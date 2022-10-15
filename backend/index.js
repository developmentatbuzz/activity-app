const express = require('express')
const app = express()
// const events = require('./routes/events')
const users = require('./routes/users')
const cors = require("cors")
const connectDB = require('./db/connect')
require('dotenv').config()

//  middleware 
app.use(express.json())
app.use(cors())

//  routes
app.use('/api/v1/users', users)

const port = process.env.PORT || 3000

const start = async () =>{
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`http://localhost:${port}`))
    } catch (error){
        console.log(error)
    }
}
start()

