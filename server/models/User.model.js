const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    role: {
      type: String,
      enum: ['USER', 'ADMIN'],
      default: 'USER'
    },
    firstName: {
      type: String,
      required: [true, 'Indica tu nombre'],
      trim: true
    },
    lastName: {
      type: String,
      required: [true, 'Indica tu apellido'],
      trim: true
    },
    email: {
      type: String,
      unique: true,
      required: [true, 'Indica un email'],
      lowercase: true,
      trim: true
    },
    password: {
      type: String,
      required: [true, 'Indica tu contraseña']
    },
    phoneNumber: {
      type: String,
      required: [true, 'Indica un número de teléfono']
    },
    birthDate: {
      type: Date,
      required: [true, 'Indica tu fecha de nacimiento']

    },
    profileImg: {
      type: String,
    },
    interests: {
      type: [String]
    },
    followedTowns: [{
      type: Schema.Types.ObjectId,
      ref: 'Town'
    }],
    favHouses: [{
      type: Schema.Types.ObjectId,
      ref: 'House'
    }]
  },
  {
    timestamps: true,
  }
);

module.exports = model("User", userSchema);