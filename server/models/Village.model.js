const { Schema, model } = require("mongoose");

const villageSchema = new Schema(
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
    features: {
      distanceToCity: {
        type: Number,
        default: 0
      },
      residents: {
        type: Number,
        default: 0
      },
      averageRentingPrice: {
        type: Number,
        default: 0
      },
      averagePurchasePrice: {
        type: Number,
        default: 0
      },
      healthService: {
        type: Boolean,
        default: false
      },
      sportsFacilities: {
        type: Boolean,
        default: false
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

module.exports = model("Village", villageSchema);