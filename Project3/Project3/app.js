const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


const users = [
  { name: 'James', email: 'james@e.com', password: 'james123' },
  { name: 'Mary', email: 'mary@e.com', password: 'mary123' },
  { name: 'Leo', email: 'leo@e.com', password: 'leo@123' },
  
  
];


function validateFormData(formData) {
  const errors = [];

  if (!formData.name || !/^[a-zA-Z]+$/.test(formData.name)) {
    errors.push('Name field must not be empty and should contain only alphabets.');
  }

  if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    errors.push('Please enter a valid email address.');
  }

  if (!formData.password || formData.password.length < 6) {
    errors.push('Password must be at least 6 characters long.');
  }

  if (formData.password !== formData.confirmPassword) {
    errors.push('Passwords do not match.');
  }

  return errors;
}


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/submit', (req, res) => {
  const formData = req.body;
  const errors = validateFormData(formData);

  if (errors.length > 0) {
    res.status(400).json({ errors });
  } else {
    const user = users.find((u) => u.name === formData.name && u.password === formData.password);
    if (user) {
      res.send(`<h2>Hello <span style="font-size: 24px;font-weight: bold;">${user.name}</span>!</h2>`);
    } else {
      res.status(401).send('<h2 style="font-family: Times New Roman; font-size:larger;">Given Data is not present in the dataset</h2>');
    }
  }
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
