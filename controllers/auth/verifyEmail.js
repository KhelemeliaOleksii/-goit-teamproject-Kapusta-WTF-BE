const asyncHandler = require('express-async-handler')

const { userModel } = require('../../models/user/')

const verifyEmail = asyncHandler(async (req, res) => {
  const { verificationToken } = req.params
  console.log(verificationToken);
  const user = await userModel.findOne({ verificationToken })
  if (!user) {
    res.status(400)
    throw new Error('User authorizated allready')
  }
  await userModel.findByIdAndUpdate(user._id, {
    verificationToken: '',
    verify: true
  })
    res.redirect(
    "https://wtf-kapusta.netlify.app/login"
  )
  // res.json({
  //   message: 'Verification successful'
  // })
})

module.exports = verifyEmail
