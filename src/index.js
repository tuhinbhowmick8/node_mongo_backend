import dotenv from 'dotenv';

import mongoose from 'mongoose';
import { DB_NAME } from './constants.js';
import connectDb from './db/index.js';
import {app} from './app.js'
dotenv.config({
    path: './.env'
})

connectDb()
.then(()=>{
    app.listen(process.env.PORT|| 8000, ()=>{
        console.log(`Server is runnung at port : ${process.env.PORT}`)
    } )
})
.catch((err)=>{
    console.log("Mongo Db Connection failed...", err)
})

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