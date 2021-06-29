import mongoose from "mongoose";

export default function connectDB(URI) {
  mongoose
    .connect(URI, {
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
}
