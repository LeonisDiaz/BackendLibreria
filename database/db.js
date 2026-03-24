const mongoose = require("mongoose");

// Connect to MongoDB
const dbCONN = async () => {
    try{
        mongoose.set('strictQuery', true);
        await mongoose.connect(process.env.db_CONN);
        console.log("Connected to MongoDB Atlas")
    } catch (error){
        console.error("Error: ", error);
        process.exit(1); //Exit the process with failure
    }
}

module.exports = {
    dbCONN
}