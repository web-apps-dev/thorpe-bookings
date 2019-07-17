
## Purpose

Allow delegates to register and browse available courses at conference events 
for a hotel suite.

## Running

From the root directory start the server:

    node server.js

Navigate to `localhost:3030`

## Login Credentials

Username and password are the same for the following users:

  * imran   (admin)
  * joe     (admin)
  * john
  * jenny

## Run Cypress Example Tests

While the server is running, start the Cypress test runner and click the 'Run all specs' button.

    npx cypress open

## Highlights

  * Angular application with Jade templates
  * Express backend
  * Connect to MongoDB - local & remote
  * Role based User authentication and authorisation
  * Live filters from the `Courses` menu option
