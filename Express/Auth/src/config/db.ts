import mongoose from 'mongoose';

export async function connectToDB(){
    try{
        await mongoose.connect(process.env.MONGO_URL!);
        console.log("Mongo connection is successfully connected.");
    }catch(err){
        console.error("MongoDB connection error!");
        process.exit(1);
    }
}
