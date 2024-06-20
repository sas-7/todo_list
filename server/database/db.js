// import mongoose from "mongoose";

// const Connection=()=>{

//     mongoose.connect(MONGODB_URL,{useNewUrlParser: true});
//     mongoose.connection.on('connected',()=>{
//         console.log("Database connected succesfully");
//     })
//     mongoose.connection.on('disconnected',()=>{
//         console.log("Database disconnected "); 
//     })
//     mongoose.connection.on('error',(error)=>{
//         console.log("Error while connecting with the database",error.message); 
//     })
// }
// export default Connection;
// import mongoose from "mongoose";
// import dotenv from 'dotenv';
// dotenv.config();

// const Connection = () => {
//     // URL-encoded password: Amisha%402002
//     const MONGODB_URL = `mongodb://${process.env.DB_USER}:${encodeURIComponent(process.env.DB_PASSWORD)}@ac-abortse-shard-00-00.lkoabux.mongodb.net:27017,ac-abortse-shard-00-01.lkoabux.mongodb.net:27017,ac-abortse-shard-00-02.lkoabux.mongodb.net:27017/?ssl=true&replicaSet=atlas-uh55z1-shard-0&authSource=admin&retryWrites=true&w=majority&appName=todolist`;

//     mongoose.connect(MONGODB_URL, { useNewUrlParser: true });

//     mongoose.connection.on('connected', () => {
//         console.log("Database connected successfully");
//     });

//     mongoose.connection.on('disconnected', () => {
//         console.log("Database disconnected");
//     });

//     mongoose.connection.on('error', (error) => {
//         console.log("Error while connecting with the database", error.message);
//     });
// }

// export default Connection;
import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const Connection = () => {
    const MONGODB_URL = `mongodb://${process.env.DB_USER}:${encodeURIComponent(process.env.DB_PASSWORD)}@ac-abortse-shard-00-00.lkoabux.mongodb.net:27017,ac-abortse-shard-00-01.lkoabux.mongodb.net:27017,ac-abortse-shard-00-02.lkoabux.mongodb.net:27017/?ssl=true&replicaSet=atlas-uh55z1-shard-0&authSource=admin&retryWrites=true&w=majority&appName=todolist`;

    mongoose.connect(MONGODB_URL, { useUnifiedTopology: true});

    mongoose.connection.on('connected', () => {
        console.log("Database connected successfully");
    });

    mongoose.connection.on('disconnected', () => {
        console.log("Database disconnected");
    });

    mongoose.connection.on('error', (error) => {
        console.log("Error while connecting with the database", error.message);
    });
}

export default Connection;
