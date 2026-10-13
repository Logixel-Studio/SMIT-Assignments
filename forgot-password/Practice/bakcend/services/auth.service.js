const jwt = require("jsonwebtoken")
const { getDB } = require("../lib/helper/db")
const bcrypt = require("bcryptjs")

async function cretaeUserForSignup({ email, name, password }, res) {
    const users = await getDB().collection("users").findOne({ email })
    if (users) {
        return res.status(409).send("user alredy exisits")
    }
    const hashedPasswor = await bcrypt.hash(password, 10)
    await getDB().collection("users").insertOne({
        name,
        email,
        password: hashedPasswor
    })
    res.status(200).send("SignUp scussfully , now you can SignIn")
}

async function userForSignin({ email, name, password }, res) {
    const users = await getDB().collection("users").findOne({ email })
    if (!users) {
        return res.status(409).send("User Not Found")
    }
    const isPasswordMatch = await bcrypt.compare(password, users.password)
    if (!isPasswordMatch) res.status(400).send("Credentials Not Found")

    const token = jwt.sign({ email, id: users.id }, process.env.JWT_TOKEN_SECRET, { expiresIn: "1d" })

    return { token, user: { id: users.id, email: users.email, name: users.name } }
}

module.exports = { cretaeUserForSignup, userForSignin }