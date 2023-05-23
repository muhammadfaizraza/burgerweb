import mongoose from "mongoose";

export const connectDB = async () => {
  const { connection } = await mongoose.connect(process.env.mongo_URI);
  console.log(`database is connected at ${connection.host}`);
  console.log("Current directory:", __dirname);
};
