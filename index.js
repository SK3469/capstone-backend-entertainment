// package require 
const dotenv = require('dotenv');
const mongoose = require('mongoose')
const { app } = require('./src/app.js')
const path = require("path")

// env configuration 
dotenv.config();
const staticPath = path.join(__dirname, "../public");
app.use("/", express.static(staticPath));

// mongodb connection 
mongoose.connect(process.env.MONGODB_URI,
    { dbName: "EntertainmentApp" }
).then(() => { console.log("Mongodb is connected") }
).catch((error) => { console.error(error) })

// server listening
app.listen(8000, () => {
    console.log("Server running on url: http://localhost:" + 8000);
})
