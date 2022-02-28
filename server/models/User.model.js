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
      unique: true,
      required: [true, 'Indica un número de teléfono']
    },
    birthDate: {
      type: Date,
    },
    profileImg: {
      type: String,
      default: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png'
    },
    interests: {
      type: [String]
    },
    followedVillages: [{
      type: Schema.Types.ObjectId,
      ref: 'Village'
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