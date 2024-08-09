import dotenv from 'dotenv';

import mongoose from 'mongoose';
import { DB_NAME } from '../constants.js'
dotenv.config();


const connectDb = async()=>{
    try{
    const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
    console.log(`MongoDB Connected :  ${connectionInstance.host}`)
    }
    catch(error){
       console.log("Mongodb connection error : ", error) 
        process.exit(1)
    }
}




export default connectDb



