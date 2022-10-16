require('dotenv').config()
const User = require('../models/user')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncWrapper = require('../middleware/async')
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);


const signUp = asyncWrapper(async (req, res)=>{
    const{username, number, password, passwordCheck} = req.body
    if(!username || !number || !password || !passwordCheck){
        res.status(400).json({msg: "Not all fields have been entered."})
    } else if(password !== passwordCheck){
        res.status(400).json({msg: "Passwords do not match. Please try again."})
    } else if(password.length < 8) {
        res.status(400).json({msg: "Password has to be of at least length 8."})
    } else if(number.length < 10) {
        res.status(400).json({msg: "Incorrect length for number."})
    } else {
        const existingUser = await User.findOne({username: username})
        const existingNumber = await User.findOne({number: number})
        // (!existingUser && !existingNumber) || (existingUser.valid === false && existingNumber.valid === false)
        // !existingUser || (existingUser && existingUser.valid === false
        if((existingUser && !existingUser.valid) || (existingNumber && !existingNumber.valid) || (!existingUser && !existingNumber)){
            const salt = await bcrypt.genSalt()
            const passwordHash = await bcrypt.hash(password, salt)
            const newUser = new User({
                username: username,
                password: passwordHash,
                number: number
            })
            await client.verify.v2.services(process.env.TWILIO_SERVICE_ID)
            .verifications
            .create({to: number, channel: 'sms'})
            if(existingUser){
                await User.findOneAndDelete({username: username})
            }
            const user = await User.create(newUser)
            res.status(200).json({user})
        } else{
            res.status(400).json({msg: "An account with the associated username or number already exists."})
        }
    }
})

const login = asyncWrapper(async (req, res)=>{
    const{username, password} = req.body
    if(!username || !password){
        res.status(400).json({msg: "Not all fields have been entered."})
    }
    const user = await User.findOne({username: username})
    if(!user){
        res.status(400).json({msg: "An account with the associated email does not exist."})
    } else if(!user.valid){
        res.status(400).json({msg: "Account not verifed."})
    } else if(!(await bcrypt.compare(password, user.password))){
        res.status(400).json({msg: "Invalid credentials. Please try again."})
    } else{
        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET)
        res.json({
            token,
            user: {
                id: user._id
            }
        })
    }
})

const validateUser = asyncWrapper(async(req, res)=>{
    const {id:userID} = req.params
    const code = req.body.code
    const user = await User.findOne({_id: userID})
    let result = await client.verify.v2.services(process.env.TWILIO_SERVICE_ID)
      .verificationChecks
      .create({to: user.number, code: code})
      .then(verification_check => {
        return verification_check;
        })
    if(user && result.status === "approved"){
        user.valid = true
        await user.save()
        res.status(200).json("success! user has been verified")
    } else{
        res.status(404).json("user doesn't exist or the code is incorrect")
    }
})

const resendCode = asyncWrapper(async(req, res)=>{
    const {id:userID} = req.params
    const user = await User.findOne({_id: userID})
    if(!user || user.valid) {
        return res.json("user doesn't exist or is already validated.")
    }
    await client.verify.v2.services(process.env.TWILIO_SERVICE_ID)
    .verifications
    .create({to: user.number, channel: 'sms'})
    return res.status(200).json("new code sent!")
})

const updateProfile = asyncWrapper(async(req, res)=>{
    const {id:userID} = req.params
    const {tasks, icon, major, interests, bio} = req.body
    const user = await User.findOne({_id: userID})
    if(!user || !user.valid) {
        return res.status(400).json("user doesn't exist or is already validated.")
    }
    user.icon = icon
    user.major = major
    user.interests = interests
    user.bio = bio
    user.tasks = tasks
    await user.save()
    return res.status(200).json("user profile has been updated")
})

const chooseTasks = asyncWrapper(async(req, res)=>{
    const {id:userID} = req.params
    const user = await User.findOne({_id: userID})
    if(!user || !user.valid) {
        return res.status(400).json("user doesn't exist or is already validated.")
    }
    user.status = "lfg"
    user.tasks = req.body.tasks
    await user.save
    return res.status(200).json("user's weekly tasks have been saved successfully")
})

// method used in front end, validates if user is logged in
// const validateUser = asyncWrapper(async(req, res)=>{
//     const token = req.header("x-auth-token")
//     if(!token){
//         res.json(false)
//     }
//     const verified = jwt.verify(token, process.env.JWT_SECRET)
//     if(!verified){
//         res.json(false)
//     }
//     const user = await User.findById(verified.id)
//     if(!user){
//         res.json(false)
//     }
//     res.json(true)
// })



// want: user gets event id added to their events array and user id gets added to event's attending users array
// const signUpForEvent = asyncWrapper(async(req, res)=>{
//     const {id:userID} = req.params
//     // const event = await Event.findOne({_id:eventID})l
//     return User.findOne({_id:userID}).populate('eventsAttending').exec((err, user)=>{
//         if(err){
//             console.log(err)
//         }
//         console.log(user)
//     })
//     // if(!eventToAdd){
//     //     return res.status(404).json({msg:`no event with ID : ${eventID}`})
//     // }
//     // res.status(200).json({eventToAdd})
// })



module.exports = {
    login, signUp, validateUser, resendCode, updateProfile, chooseTasks
}