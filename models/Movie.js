import mongoose from "mongoose";

const Schema = mongoose.Schema;

const movieSchema = new Schema({
  title: {
    type: String,
    required: true,
  },

  releaseDate: {
    type: String,
    required: true,
  },

  castName: [
    {
      type: String,
    },
  ],

  directorsName: [
    {
      type: String,
    },
  ],

  choreographers: [
    {
      type: String,
    },
  ],

  movieStatus: {
    type: String,
    default: "Running",
  },
});

export default mongoose.model("Movie", movieSchema);
