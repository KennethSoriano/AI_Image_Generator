import mongoose from "mongoose";

const connectDB = (url) => {
    mongoose.set('strictQuery', true);

    mongoose.connect(url)
        .then(() => console.log('connected to'))
        .catch((err) => console.log)
}

export default connectDB;