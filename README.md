# REST API

## Requirements

For development, you will only need Node.js 

 ### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).


---

## Getting Stated

### Clone the repository
    $ git clone https://github.com/rohit1kumar/csv-to-db.gitt

### Install dependencies
    $ cd csv-to-db
    $ npm install

### Add environment variables 
   *(example given in .env.example)*

    PORT=3000
    MONGO_URL=mongodb://localhost:27017/<databasename>
    JWT_SECRET=<secret>

### Build and run the project
    $ npm start

### Navigate to base URL
     http://localhost:3000/api

### API endpoints

 - User  : /user
 - Product  : /product

