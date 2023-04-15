import mongoose from "mongoose";

const Schema = mongoose.Schema;

const movieSchema = new Schema({
  title: {
    type: String,
    required: true,
  },

  releaseDate: {
    type: Date,
    required: true,
  },

  castName: {
    type: [String],
    required: true,
  },

  directorsName: {
    type: [String],
    required: true,
  },

  choreographers: {
    type: [String],
    required: true,
  },

  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

  shows: [
    {
      time: {
        type: Date,
        required: true,
      },
      seats: {
        totalseats: {
          type: Number,
          required: true,
        },
        gold: {
          type: Number,
          required: true,
        },
        silver: {
          type: Number,
          required: true,
        },
        platinum: {
          type: Number,
          required: true,
        },
      },
      price: {
        gold: {
          type: Number,
          required: true,
        },
        silver: {
          type: Number,
          required: true,
        },
        platinum: {
          type: Number,
          required: true,
        },
      },
    },
  ],
});

export default mongoose.model("Movie", movieSchema);
