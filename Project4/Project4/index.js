const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// Set up MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'yourusername',
  password: 'yourpassword',
  database: 'yourdatabase'
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
  } else {
    console.log('Connected to MySQL database');
  }
});

// Define routes for CRUD operations
app.get('/users', (req, res) => {
  db.query('SELECT * FROM users', (err, results) => {
    if (err) {
      res.status(500).send('Error retrieving users');
    } else {
      res.json(results);
    }
  });
});

app.post('/users', (req, res) => {
  const { name, email, password } = req.body;
  const query = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
  db.query(query, [name, email, password], (err, result) => {
    if (err) {
      res.status(500).send('Error creating user');
    } else {
      res.json({ id: result.insertId, message: 'User created' });
    }
  });
});



// Create a new user
app.post('/create', async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const result = await connection.promise().query(
      'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
      [name, email, password]
    );
    res.json({ message: 'User created successfully', userId: result[0].insertId });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Failed to create user' });
  }
});

// Read all users
app.get('/read', async (req, res) => {
  try {
    const [rows] = await connection.promise().query('SELECT * FROM users');
    res.json(rows);
  } catch (error) {
    console.error('Error reading users:', error);
    res.status(500).json({ error: 'Failed to read users' });
  }
});

// Update a user
app.put('/update/:id', async (req, res) => {
  const userId = req.params.id;
  const { name, email, password } = req.body;
  try {
    await connection.promise().query(
      'UPDATE users SET name = ?, email = ?, password = ? WHERE id = ?',
      [name, email, password, userId]
    );
    res.json({ message: 'User updated successfully' });
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ error: 'Failed to update user' });
  }
});

// Delete a user
app.delete('/delete/:id', async (req, res) => {
  const userId = req.params.id;
  try {
    await connection.promise().query('DELETE FROM users WHERE id = ?', [userId]);
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ error: 'Failed to delete user' });
  }
});




// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
