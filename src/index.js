import dotenv from 'dotenv';

import mongoose from 'mongoose';
import { DB_NAME } from './constants.js';
dotenv.config();
import connectDb from './db/index.js';


connectDb()

// import express from 'express';


// const app =express()
// const connectDB = async ()=>{
//     try{
//       await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
//       app.on("error", (error)=>{
//         console.log("Error: ", error)
//         throw error
//       })

//       app.listen(process.env.PORT, ()=>{
//         console.log(`App is listening to port ${process.env.PORT}`)
//       })

//     }
//     catch(error){
//         console.log(error)
//         throw err
//     }
// }

// connectDB()