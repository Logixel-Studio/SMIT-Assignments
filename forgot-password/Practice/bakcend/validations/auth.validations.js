const joi = require("joi")
const { NAME_REGEX, PASSWORD_REGEX } = require("../lib/regex/regex")

const signupSchema = joi.object({
    name: joi.string().pattern(NAME_REGEX).required(),
    email: joi.string().email().required(),
    password: joi.string().pattern(PASSWORD_REGEX).required().min(5).messages({
        "string.pattern.base":
            "Password must be 8-64 characters with uppercase, lowercase, number and special character"
    }),
})

const signinSchema = joi.object({
    name: joi.string().required(),
    email: joi.string().email().required(),
    password: joi.string().required()
})
module.exports = { signupSchema, signinSchema }