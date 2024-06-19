Todo List

Description
This project is a React.js application that allows users to manage tasks with functionalities to display, add, and delete tasks. It integrates with a MongoDB database using mongoose to persist task data.

Features
Task List Display

Includes the Shanture logo on the page.
Displays a list of tasks fetched from a MongoDB database.
Each task includes a checkbox to mark it as completed.
Completed tasks are visually distinct from incomplete tasks.
Add New Task

Provides an input field and a button to add new tasks to the list.
Newly added tasks are saved to the MongoDB database using mongoose.
Added tasks appear immediately in the task list.
Delete Task

Implements a way to delete tasks from the list.
Deleted tasks are removed from the MongoDB database using mongoose.
Deleted tasks disappear immediately from the task list.
Screenshots


Installation
To run this project locally, follow these steps:

Clone the repository from GitHub:

bash
Copy code
git clone https://github.com/kethakishore143/ShantureAssignment
Navigate into the project directory:

bash
Copy code
cd your-repository
Install dependencies using npm or yarn:

bash
Copy code
npm install
# or
yarn install
Configure MongoDB:

Set up a MongoDB database either locally or using a cloud service.
Note down the connection URI which includes the host, port, username, password, and database name.
Set environment variables:

Create a .env file in the root of the project.
Add the MongoDB connection URI to the .env file:
bash
Copy code
REACT_APP_MONGODB_URI=mongodb://username:password@host:port/database_name
Start the application:

bash
Copy code
npm run dev
# or
npm start
# or
yarn start
Open your browser and navigate to http://localhost:3000 to view the application.

Technologies Used
React.js
MongoDB (mongoose)
Node.js (for backend API, if applicable)
HTML/CSS
