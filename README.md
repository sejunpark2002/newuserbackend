
# User Management Backend

The backend of the User Management App is built using Node.js and MongoDB, providingsolution for managing user-related tasks such as creating, updating, deleting, and retrieving user information.

[User Management Front End Repository](https://github.com/sejunpark2002/newuserfront)

## Features

- RESTful API
- NodeJS + MongoDB 
- CRUD Operations

## Live Site

[Click Here](https://usermanagement-sjp.netlify.app/)


## Technologies Used

- **Node.js** 
- **Express** 
- **MongoDB** 
- **Mongoose** 

## API Endpoints

- GET /api/users: Retrieve a list of users (with pagination support).
- GET /api/users/:id: Retrieve details of a specific user by ID.
- POST /api/users: Create a new user.
- PUT /api/users/:id: Update an existing user by ID.
- DELETE /api/users/:id: Delete a user by ID.

## Quick Start

1. Clone the repository:
    ```bash
    git clone https://github.com/sejunpark2002/newuserbackend.git
    ```

2. Navigate to the project directory:
    ```bash
    cd newuserbackend
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

4. Start the development server:
    ```bash
    npm start
    ```

## License

This project is licensed under the MIT License.
