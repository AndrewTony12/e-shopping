import "dotenv/config";
import express from "express";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";



const app = express();
const PORT = process.env.PORT || 6000;

//connect db
import { connectMongoDb } from "./src/DbConfig/db.config.js";
connectMongoDb()

//use middlewares
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(morgan("tiny"));

//listen to app
app.listen(PORT, (error) => {
    error ? console.log(error) : console.log(`Server is running on PORT ${PORT}`);
  });