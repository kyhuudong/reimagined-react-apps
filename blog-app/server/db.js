import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = mongoose
  .connect(process.env.MONGOOSE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => {
    console.log("err: ", err);
  });

export default connectDB;
