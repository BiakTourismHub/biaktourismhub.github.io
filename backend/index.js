import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import db from "./config/Database.js"
import router from "./routes/index.js";
dotenv.config();
// Command Create Table
// import Users from "./models/UserModel.js"

const app = express();

try {
    await db.authenticate();
    console.log('Database Tersambung')
    
    // Command Create Table
    // await Users.sync();
} catch (error) {
    console.error(error)
}

app.use(cookieParser());
app.use(express.json());
app.use(router);

app.listen(5000, ()=> console.log('Server jalan di port 5000 qaqa'));
