const { cretaeUserForSignup, userForSignin } = require("../services/auth.service")

async function signup(req, res) {
    await cretaeUserForSignup(req.body, res)
}

async function signin(req, res) {
    const result = await userForSignin(req.body, res)
    console.log(result.error)
}

module.exports = { signup, signin }