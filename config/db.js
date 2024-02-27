import mongoose from "mongoose";
import colors from "colors";
const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb+srv://Divyansh:QC8ThhQeMFlqViiO@cluster0.aqfimep.mongodb.net/");
    console.log(
      `Conneted To Mongodb Databse ${conn.connection.host}`.bgMagenta.white
    );
  } catch (error) {
    // console.log(`Errro in Mongodb ${error}`.bgRed.white);
    console.log("not connected")
  }
};

export default connectDB;
