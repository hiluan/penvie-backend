import { Configuration, OpenAIApi } from "openai";
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import errorHandler from "./middleware/errorHandler.js";
import redisCache from "./middleware/redisCache.js";
import chatRoutes from "./routes/chat.js";
import essayRoutes from "./routes/essay.js";
import authToken from "./middleware/authToken.js";
// CONFIGURATION OPEN AI
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
export const openai = new OpenAIApi(configuration);

// CONFIGURATION middlewares
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: false }));
app.use(cors());
app.use(errorHandler); // with this we dont need `try {} catch(error) {}` in all route handlers
app.use(authToken); // check if user's token is correct => get/post data to/from the front end
// app.use(redisCache); // LATER FOR DEPLOYMENT

// ROUTES
app.use("/api/v1/chatgpt", chatRoutes);
app.use("/api/v1/davinci", essayRoutes);

// app.use("/api/v1/templates", templateRoutes);
// app.use("/api/v1/user", userRoutes);
// app.use("/api/v1/app-status", appStatusRoutes);

app.get("/api/v1/chatgpt", async (req, res) => {
  res.send("Hello from OpenAI");
});
app.get("/", async (req, res) => {
  res.send("Hello from OpenAI");
});

// MONGOOSE SETUP
const PORT = process.env.PORT || 8080;
mongoose.set("strictQuery", true);
mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
  })
  .catch((err) => console.log(`${err} did not connect`));
