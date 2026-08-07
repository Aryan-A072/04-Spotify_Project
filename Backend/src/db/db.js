const mongoose = require("mongoose")

async function connectDb(){

    try{
        await mongoose.connect(process.env.MONGO_URI)

        console.log("Database connect successfully")
    }catch(err){
        console.log("Database connection error: ", err)
    }
}

module.exports = connectDb