import mongoose, { Connection } from "mongoose";

let cachedConnection: Connection | null = null;
export async function connectToMongoDb() {
  if (cachedConnection) {
    console.log("Using cached mongodb connection");

    return cachedConnection;
  }
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URL as string);
    cachedConnection = conn.connection;
    console.log("new mongoDb connected established");
    return cachedConnection;
  } catch (error) {
    console.log(error);

    throw error;
  }
}
