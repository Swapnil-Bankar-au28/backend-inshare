require('dotenv').config();
const mongoose = require('mongoose')

const DB = "mongodb+srv://linkshare:aVK8XgOcaAjyZXvT@cluster0.e6xku.mongodb.net/linkshare?retryWrites=true&w=majority"

async function initMongoDB() {
    await mongoose.connect(DB, (err) => {
        if (err) {
            console.log("Error in connecting to DB")
        } else {
            console.log("successfully connected to DB")
        }
    })
}

module.exports =
    initMongoDB