import express from "express";
import "dotenv/config";
import userRouter from "./routes/userRoutes.js";
import btcRouter from "./routes/btcRoutes.js";
import bodyParser from "body-parser";
import cors from "cors";
const app = express();

// app.use(express.json());

app.use(cors());

app.use(bodyParser.json());

app.use("/api", userRouter, btcRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server listening on port" + PORT);
});
