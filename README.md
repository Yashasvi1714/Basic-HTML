# Repo Name: **Web-Application-and-Recommendation-Systems**

## Overview

This repository contains multiple projects demonstrating different concepts in web development and machine learning, including:

1. **Recipe Recommendation System**: A content-based recommendation engine that suggests similar recipes based on ingredients and cooking steps using NLP and cosine similarity.
2. **Contact List Web Application**: A lightweight web application allowing users to manage contacts with features like adding, deleting, and searching contacts by city.
3. **User Validation Web Application**: A Node.js-based app that validates and authenticates user credentials, providing personalized greetings upon successful login.
4. **User Management API**: A RESTful API built with Node.js and MySQL for managing users, including CRUD (Create, Read, Update, Delete) operations.

## Project Breakdown

### 1. **Recipe Recommendation System**
   - **Objective**: Recommend similar recipes based on a user's input (ingredients and cooking steps).
   - **Technologies**: Python, Pandas, NumPy, Scikit-learn, NLTK, Jupyter Notebook.
   - **Methodology**:
     - Data preprocessing and cleaning.
     - Text vectorization with `CountVectorizer`.
     - Cosine similarity for recommendations.

### 2. **Contact List Web Application**
   - **Objective**: Manage a contact list in the browser.
   - **Features**:
     - Add, delete, and search contacts by city.
     - Persistent storage using browser local storage.
   - **Technologies**: HTML, CSS, JavaScript.

### 3. **User Validation Web Application**
   - **Objective**: Validate user input (name, email, and password) and authenticate credentials.
   - **Features**:
     - Input validation for name, email, and password.
     - Personalized greeting upon successful login.
   - **Technologies**: Node.js, Express.js, Body-Parser, HTML.

### 4. **User Management API**
   - **Objective**: Manage users with a RESTful API for CRUD operations on a "users" table.
   - **Technologies**: Node.js, Express.js, MySQL, Body-Parser.

## Installation Instructions

### Prerequisites
Ensure that the following are installed:
- **Node.js** (for Node.js-based projects)
- **MySQL** (for the User Management API)
- **Python** (for the Recipe Recommendation System)

### 1. **Recipe Recommendation System**
   - Clone the repository:
     ```bash
     git clone https://github.com/Yashasvi1714/Web-Application-and-Recommendation-Systems.git
     cd Web-Application-and-Recommendation-Systems/Recipe-Recommendation
     ```
   - Install required packages:
     ```bash
     pip install -r requirements.txt
     ```
   - Run the Jupyter Notebook and execute the code to see the recommendation system in action.

### 2. **Contact List Web Application**
   - Clone the repository:
     ```bash
     git clone https://github.com/Yashasvi1714/Web-Application-and-Recommendation-Systems.git
     cd Web-Application-and-Recommendation-Systems/Contact-List-App
     ```
   - Open `index.html` in any modern browser to run the application.

### 3. **User Validation Web Application**
   - Clone the repository:
     ```bash
     git clone https://github.com/Yashasvi1714/Web-Application-and-Recommendation-Systems.git
     cd Web-Application-and-Recommendation-Systems/User-Validation-App
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Run the application:
     ```bash
     node app.js
     ```

### 4. **User Management API**
   - Clone the repository:
     ```bash
     git clone https://github.com/Yashasvi1714/Web-Application-and-Recommendation-Systems.git
     cd Web-Application-and-Recommendation-Systems/User-Management-API
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Set up the MySQL database and configure it in `config.js`.
   - Run the API:
     ```bash
     node app.js
     ```

## Conclusion

This repository provides a diverse range of projects showcasing different skills, from building recommendation systems to developing interactive web applications and APIs. Each project demonstrates practical applications of popular technologies and frameworks, making it a useful resource for learning and reference.

Feel free to explore, modify, and extend these projects!
