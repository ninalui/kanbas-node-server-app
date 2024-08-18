import "dotenv/config";
import session from "express-session";
import express from 'express';
import cors from "cors";
import mongoose from 'mongoose';
import Hello from "./hello.js";
import Lab5 from './Lab5/index.js';
import UserRoutes from "./Users/routes.js";
import CourseRoutes from "./Kanbas/Courses/routes.js";
import ModuleRoutes from "./Kanbas/Modules/routes.js";
import AssignmentRoutes from "./Kanbas/Assignments/routes.js";
import QuestionRoutes from "./Kanbas/Questions/routes.js";


const CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING || "mongodb://127.0.0.1:27017/kanbas"
mongoose.connect(CONNECTION_STRING)
  .then(async () => {
    console.log("Connected to MongoDB");
    console.log("Database: ", mongoose.connection.name);
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB: ", error.message);
  });

  const app = express();

app.use(cors({
  credentials: true,
  origin: process.env.NETLIFY_URL || "http://localhost:3000"
}));

app.use(express.json());

const sessionOptions = {
  secret: process.env.SESSION_SECRET || "kanbas",
  resave: false,
  saveUninitialized: false,
};
if (process.env.NODE_ENV !== "development") {
  sessionOptions.proxy = true;
  sessionOptions.cookie = {
    sameSite: "none",
    secure: true,
    domain: process.env.NODE_SERVER_DOMAIN,
  };
}
app.use(session(sessionOptions));

UserRoutes(app);
CourseRoutes(app);
ModuleRoutes(app);
AssignmentRoutes(app);
QuestionRoutes(app);
Lab5(app)
Hello(app)
app.listen(process.env.PORT || 4000)
