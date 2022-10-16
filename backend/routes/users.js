const express = require('express');
// const { signUpForEvent } = require('../controllers/events');
const router = express.Router();

const {signUp, login, validateUser, resendCode, updateProfile, chooseTasks, getInfo} = require('../controllers/users')

router.route('/signup').post(signUp)
router.route('/login').post(login)
router.route('/validate/:id').post(validateUser)
router.route('/resend/:id').post(resendCode)
router.route('/updateprofile/:id').post(updateProfile)
router.route('/picktasks/:id').post(chooseTasks)
router.route('/user:id').get(getInfo)
// router.route('/:id').get(signUpForEvent)
// router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)

module.exports = router