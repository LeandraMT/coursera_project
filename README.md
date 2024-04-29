<div align="center">
  <h1 align="center">Apollonia Dental Clinic API</h1>
</div>

## Overview
Being part of the IBM Professional Certificate program as a Backend Developer, this project has provided me with valuable insights into CRUD operations and the best practices for implementing them from the ground up.

## Project Objectives
- Create a database with employees and departments
- Create a web UI for employees and departments management
- Perform CRUD operations on the employees and departments database using the web UI

## Tech Stack
| Frontend | Backend  |
|----------|----------|
|          | Node.js  |
|          | MongoDB  |

<hr>
## Installation
1. Clone the repository:
```sh
git clone https://github.com/LeandraMT/coursera_project.git
```
2. Navigate to the project directory:
```sh
cd coursera_project
```
3. Install dependencies:
```sh
npm install
```

4. Set up the environment variables:
   - First create a `.env` file in the root directory of the project.
   - Add the following environment variables:
     1. MONGO_URI=your_mongo_uri
     2. DB_NAME=your_database_name
     3. PORT=8005

5. Run the application:
```sh
npm start
```

## Or Docker Installation
1. Clone the repository:
```sh
git clone https://github.com/LeandraMT/coursera_project.git
```
2. Navigate to the project directory:
```sh
cd coursera_project
```
3. Build the Docker Image:
```sh
docker-compose build
```
4. Start the Docker containers:
```sh
docker-compose up -d
```
