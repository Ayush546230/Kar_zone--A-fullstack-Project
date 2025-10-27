import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://ayushsrivastava18623_db_user:S1qm267LBMa1A7j4@cluster0.pa3rzw8.mongodb.net/CarRental"
    )
    .then(() => console.log("Database connected successfully"));
};
