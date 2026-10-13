const NAME_REGEX = /^\p{L}[\p{L}\s.'-]{1,49}$/u

const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,64}$/

module.exports = { NAME_REGEX, PASSWORD_REGEX }