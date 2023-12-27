# Survey App

Basic survey app using using Express and React. It uses a mongoDB database to store the survey data. The app is deployed on vercel.

## Features

### User Authentication

- **Login:** Admins can seamlessly log in to their account using username and password.
- **Register:** Admins can create an account using username and password.
- **JWT:** JSON Web Tokens are used to authenticate users and maintain a logged-in state between the client and server.

### Fill Survey

- **Form Validation:** Form validation is implemented on the client-side as well as the server-side.
- **Submit Survey:** Users can submit the survey form and the data is stored in the database.

### Viewing previous surveys

- **View Surveys:** Admins can view all the surveys submitted by users after logging in.

### Notifications

- **Success and Error Notifications:** Success and error notifications are displayed to the user after submitting the form, logging in, registering, etc.

## Prerequisites

- Node.js and npm installed on your machine

## Usage

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/Pankaj3112/Evotech-Global-Full-Stack-Assessment.git
   cd Evotech-Global-Full-Stack-Assessment
   ```

2. **Install dependencies:**

   ```bash
   npm install
   cd frontend
   npm install
   ```

3. **Setup environment variables:**

   - Create a new file named `.env` in the root directory of the project
   - Copy the contents of `.env.example` into `.env`
   - Replace the values of the variables with your own values
   - Also create a `.env` file in the frontend folder and copy the contents of `.env.example` into it and replace the values of the variables with your own values
   - JWT_SECRET can be any random string

4. **Run the App:**
   ```bash
   npm start
   cd frontend
   npm run dev
   ```

- Open the app in your web browser at http://localhost:5173

## API Reference

### Authentication

#### Login

- **Demo Credentials:**
	- `username`: admin
	- `password`: 123456

- **URL:** `/admin/login`
- **Method:** `POST`
- **Body Params:**

  - `username`: String
  - `password`: String

- **Success Response:**
	- `{success: true, message: "Login Successful", token: token}`
- **Error Response:**
	- `{success: false, message: "Invalid Credentials"}`

#### Register

- **URL:** `/admin/register`
- **Method:** `POST`
- **Body Params:**

  - `username`: String
  - `password`: String
	
- **Success Response:**
	- `{success: true, message: "Registration Successful"}`
- **Error Response:**
	- `{success: false, message: "Username already exists"}`
	- `{success: false, message: "Error registering user"}`

### Survey

#### Submit Survey

- **URL:** `/survey/submit`
- **Method:** `POST`
- **Body Params:**

  - `name`: String (required)
  - `email`: String 
  - `gender`: String
  - `address`: String
  - `nationality`: String
  - `phoneNum`: String
  - `message`: String (required)

- **Success Response:**
	- `{success: true, message: "Survey Submitted Successfully"}`
- **Error Response:**
	- `{success: false, message: "Error submitting survey"}`

#### View all Surveys

- **URL:** `/admin/view-all`
- **Method:** `GET`
- **Headers:**
	- `Authorization`: token

- **Success Response:**
	- `{success: true, surveys: surveys}`
- **Error Response:**
	- `{success: false, message: "Error fetching surveys"}`
	- `{success: false, message: "No surveys found"}`



## Contributing

- Contributions are welcome! If you encounter issues or have suggestions, feel free to open issues or submit pull requests.

## License

- This project is licensed under the MIT License. Please review the license before using or contributing to the project.
