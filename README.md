# Create a User Management System using JavaScript that simulates how a real application handles users.

# Functional Requirements
# 1 User Creation
Allow adding users with:
id (auto-generated)
name
email
role (admin, user, guest)
isActive (true / false)

# 2 User Operations
Implement functionality to:
Display all users
Activate / deactivate a user
Delete a user
Filter users by role
Show only active users

# 3 Data Structure Rules
Store all users in an array
Each user must be stored as an object
Do not mutate the original array directly when filtering

# 4 JavaScript Concepts You MUST Use
Your solution must demonstrate correct usage of:
Variables (let, const)
Functions (declaration / arrow)
Arrays & Objects
Array methods:
map
filter
find
Conditional statements
Looping
Spread operator (...)
Type comparison (===)
Basic error handling

# 5 Asynchronous Simulation
Simulate async behavior by:
Creating a fake API call using setTimeout
Returning user data using Promises
Handling success and error using:
.then()
.catch()
.finally()

# 6 Event Loop Awareness
Include a small code snippet that logs:
Synchronous logs
setTimeout
Promise resolution
Add comments explaining the order of execution.

 # User Interface (Minimal)
Input fields for user data
Buttons for each operation
Render users dynamically using DOM manipulation
(No CSS or frameworks required)
