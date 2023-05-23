import app from "./app.js";
import { connectDB } from "./config/database.js";
import bsecure from "bsecure";

connectDB();
app.get("/", (req, res, next) => {
  res.send("<h1>Working </h1>");
});

export const instance = new bsecure({
  key_id: process.env.client_id,

  key_secret: process.env.client_secret,
});

app.listen(process.env.PORT, () =>
  console.log(
    `server is working on PORT :${process.env.PORT},IN ${process.env.NODE_ENV} MODE`
  )
);
