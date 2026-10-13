require("dotenv").config()
const { MongoClient } = require("mongodb")
const client = new MongoClient(process.env.MONGO_URI)

const dns = require("node:dns");
dns.setServers(["1.1.1.1", "8.8.8.8"]);


let db = ""

async function connectDB() {
    try {
        await client.connect()
        db = client.db(process.env.DB_NAME)
        console.log("MongoBD connected")
    }
    catch (error) {
        console.log(`Can't connect to MongoDB : ${error}`)
    }
}

function getDB() {
    return db
}

module.exports = { connectDB, getDB }
