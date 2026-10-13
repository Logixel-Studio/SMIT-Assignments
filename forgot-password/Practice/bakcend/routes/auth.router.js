const { Router } = require("express")
const authRouter = Router()
const { signupSchema, signinSchema } = require("../validations/auth.validations")
const validatemiddleware = require("../lib/middelware/validation.middleware")
const { signup, signin } = require("../controller/auth.contorller")

authRouter.post("/sign-up", validatemiddleware(signupSchema), signup)
authRouter.post("/sign-in", validatemiddleware(signinSchema), signin)

module.exports = authRouter