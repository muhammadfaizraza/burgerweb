import express, { urlencoded } from "express";
import dotenv from "dotenv";
import { connectPassport } from "./utils/Provider.js";
import { connectDB } from "./config/database.js";
import session from "express-session";
import cookieParser from "cookie-parser";
import passport from "passport";
import { errorMiddleware } from "./middleware/errormiddleware.js";
import cors from "cors";

const app = express();

export default app;

dotenv.config({
  path: "./config/config.env",
});
connectDB();
connectPassport();

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: process.env.NODE_ENV === "development" ? false : true,
      httpOnly: process.env.NODE_ENV === "development" ? false : true,
      sameSite: process.env.NODE_ENV === "development" ? false : "none",
    },
  })
);

app.use(passport.authenticate("session"));
app.use(passport.initialize());

app.use(passport.session());
app.enable("trust proxy");
app.use(cookieParser());

app.use(express.json());
app.use(
  urlencoded({
    extended: true,
  })
);

app.use(
  cors({
    credentials: true,
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

//import routes
import orderRoute from "./Routes/order.js";

import UserRoute from "./Routes/user.js";
import ContactRoute from "./Routes/contact.js";

app.use("/api/v1", UserRoute);
app.use("/api/v1/", orderRoute);

app.use("/api/v1/", ContactRoute);

app.use(errorMiddleware);

if (process.env.NODE_ENV === "production") {
  const path = require("path");
  app.get("/", (req, res) => {
    app.use(
      express.static(path.resolve(__dirname, "Burger-Web-Front-End", "build"))
    );
    res.sendFile(
      path.resolve(__dirname, "Burger-Web-Front-End", "build", "index.html")
    );
  });
}
