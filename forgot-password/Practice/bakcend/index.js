require("dotenv").config()
const express = require("express")
const fs = require("fs")
const { connectDB, getDB } = require("./lib/helper/db")
const router = require("./routes/index.router")
const app = express()

app.use(express.json())

app.use("/api",router)

app.listen(5000, async () => {
    console.log("Express server started")
    await connectDB()
})