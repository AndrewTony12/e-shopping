import mongoose from "mongoose";

export const connectMongoDb = ()=>{
    
    try {
        const conStr = process.env.MONGO_URL;
        const connect = mongoose.connect(conStr)
        connect && console.log("MongoDb Connected");
    } catch (error) {
        console.log(error);
        
    }
}