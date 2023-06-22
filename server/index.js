const express = require('express')
const app = express()
const port = process.env.PORT || 5000;
const mongoose = require('mongoose')

const uri = 'mongodb+srv://ShoeStore:shoestorepassword@cluster0.ouqonv5.mongodb.net/?retryWrites=true&w=majority'

async function connect() {
    try {
        await mongoose.connect(uri)
        console.log("Connected to MongoDB")
    } catch (error) {
        console.error(error);
    }
}

connect();

app.get("/api", (req, res) => {
    res.json({ users: ["userOne", "userTwo", "userThree", "userFour"] });
})

app.listen(5000, () => {console.log("Server started on port 5000")})