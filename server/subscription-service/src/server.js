import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import helmet from "helmet";
dotenv.config();

const PORT = process.env.PORT;
const app = express();
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("connected to DB"))
  .catch((err) => console.log("DB err", err.message));
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

async function startServer() {
  try {
    app.listen(PORT, () => {
      console.log(`Subscription Server is running port : ${PORT}`);
    });
  } catch (err) {
    console.log("Failed to stat server ", err.message);
    process.exit(1);
  }
}

startServer();
