# Task Server App

This is an authentication service boilerplate built using Node.js and Express. It provides endpoints for user sign-up and login functionalities.

## Installation

### Prerequisites

- Node.js installed on your machine ([Download Node.js](https://nodejs.org/))

### Install Dependencies

```bash
cd task-server-app
npm i
```

### Start Server

For Development

```bash
cd task-server-app
npm run dev
```

For Production

```bash
cd task-server-app
npm run start
```

The server will start on port 3000 by default. You can access it at http://localhost:3000.

Routes
GET /v1/api/auth/ - Home route.
POST /v1/api/auth/signUp - Endpoint for user sign-up.
POST /v1/api/auth/login - Endpoint for user login.

### Authentication Routes

These routes handle user authentication:

POST /v1/api/auth/signUp - Endpoint for user sign-up.

## Input:

email: User's email address (string)
password: User's password (string)
confirmPassword: Confirmation of the user's password (string)
firstName: User's first name (string)
lastName: User's last name (string)
dob: User's date of birth (date)
streetAddress: User's street address (string)
optionalAddress: Optional address (string)
country: User's country (string)
state: User's state (string)
city: User's city (string)
zipCode: User's zip code (string)
phone: User's phone number (string)
sinNumber: User's SIN number (string)
passportNumber: User's passport number (string, optional)
driverLicenseNumber: User's driver license number (string, optional)

POST /v1/api/auth/login - Endpoint for user login.

## Input:

email: User's email address (string)
password: User's password (string)
