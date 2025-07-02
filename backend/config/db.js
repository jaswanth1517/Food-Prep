import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://jasswanth:1516171819@cluster0.ss8rbpg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(()=>{
       console.log('DB connected') ;
    })
}