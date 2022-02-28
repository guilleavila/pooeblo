const { Schema, model } = require("mongoose");

const townSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Indica el nombre del pueblo'],
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
    CCAA: {
      type: String,
    },
    province: {
      type: String,
    },
    profileImg: {
      type: String,
    },
    description: {
      type: String,
    },
    website: {
      type: String,
    },
    location: {
      type: {
        type: String,
      },
      coordinates: [Number]
    },
    characteristics: {
      distanceToCity: {
        type: Number
      },
      residents: {
        type: Number
      },
      averageRentingPrice: {
        type: Number
      },
      averagePurchasePrice: {
        type: Number
      },
      healthService: {
        type: Boolean
      },
      sportsFacilities: {
        type: Boolean
      },
      otherServices: {
        type: [String]
      }
    }
  },
  {
    timestamps: true,
  }
);

module.exports = model("Town", townSchema);