# User Validation Web Application

This is a Node.js-based web application designed to validate and authenticate user credentials. Users can submit their name, email, and password, which are validated on the server side. If the data is correct, a personalized greeting is displayed; otherwise, an appropriate error message is shown.

## Features

- **User Input Validation**:
  - Name must contain only alphabetic characters.
  - Email must follow a valid email format.
  - Password must be at least 6 characters long.
  - Password and Confirm Password fields must match.
  
- **Credential Verification**:
  - Compares the entered name and password against a predefined list of users.

- **Error Handling**:
  - Displays error messages for invalid input data.
  - Responds with a 400 status code for validation errors and a 401 status code for authentication failures.

- **Personalized User Greeting**:
  - Upon successful login, a welcome message is displayed with the user's name.

## Technologies

- **Node.js** - JavaScript runtime environment.
- **Express.js** - Web framework for building the server.
- **Body-Parser** - Middleware to parse incoming request bodies.
- **HTML** - Simple user interface for input submission.

## Installation Instructions

### Prerequisites

Ensure that the following are installed on your system:

- [Node.js](https://nodejs.org/)

### Setup and Installation

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd <project-folder>
