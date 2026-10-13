function validatemiddleware(signupSchema) {
    return (req, res, next) => {
        const { error } = signupSchema.validate(req.body)
        if (error) {
            res.status(400).json({
                success: false,
                message: error.details[0].message
            })
        }
        next()
    }
}

module.exports = validatemiddleware