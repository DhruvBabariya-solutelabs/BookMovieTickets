import mongoose from "mongoose";

const Schema = mongoose.Schema;

const movieTicket = new Schema({
  movie: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Movie",
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  price: {
    type: String,
    enum: ["gold", "silver", "platinum"],
    required: true,
  },
  seat: {
    type: String,
    enum: ["gold", "silver", "platinum"],
    required: true,
  },
});
