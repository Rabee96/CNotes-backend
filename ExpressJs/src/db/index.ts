import mongoose from "mongoose";
import environment from "../config/environment";

const connectDB = async () => {
  const URL = environment.database.uri ?? "Database URL";

  try {
    await mongoose.connect(URL);
  } catch (error) {
    console.error("database connection error:", error);
    process.exit(1);
  }
};

connectDB();

export default mongoose.connection;
