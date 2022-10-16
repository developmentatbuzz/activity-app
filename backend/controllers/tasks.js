// require('dotenv').config()
// const Task = require('../models/tasks')
// const jwt = require('jsonwebtoken')
// const bcrypt = require('bcryptjs')
// const asyncWrapper = require('../middleware/async')
// const accountSid = process.env.TWILIO_ACCOUNT_SID;
// const authToken = process.env.TWILIO_AUTH_TOKEN;
// const client = require('twilio')(accountSid, authToken);

// const changeWeeklyTasks = asyncWrapper(async(req, res)=>{
//     const {id, tasks} = req.params
//     // const user = await User.findOne({_id: userID})
//     if(id !== process.env.ADMIN_CODE) {
//         return res.status(400).json("silly baka ur not an admin :3")
//     }
//     if(tasks.length != 5) {
//         return res.status(400).json("goofy ah need more task yuh - nabil 4:08 am oct 16 2022")
//     }
//     const task = await Task.findOne({})
//     if(!user || !user.valid) {
//         return res.status(400).json("user doesn't exist or is already validated.")
//     }
//     user.tasks = req.body.tasks
//     await user.save
//     return res.status(200).json("user's weekly tasks have been saved successfully")
// })


// module.exports = {

// }