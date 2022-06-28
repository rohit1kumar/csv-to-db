require('dotenv').config();
const express = require('express')
const connect = require('./db/connect')
const product = require('./routes/product')
const user = require('./routes/user')
const app = express()

const PORT = process.env.PORT


//DB connection
connect()


//middleware
app.use(express.json())


//routes
app.use('/api', product)
app.use('/api', user)

//server listening
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));