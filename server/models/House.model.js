const { Schema, model } = require("mongoose");

const houseSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Indica el nombre de la casa'],
      trim: true
    },
    description: {
      type: String
    },
    services: {
      type: String
    },
    roomsDescription: {
      type: String
    },
    maxGuests: {
      type: Number,
    },
    images: {
      type: [String]
    },
    availableDaysLeft: {
      type: Number,
    },
    location: {
      type: {
        type: String,
      },
      coordinates: [Number]
    },
    village: {
      type: Schema.Types.ObjectId,
      ref: 'Village'
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("House", houseSchema);