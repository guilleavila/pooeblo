const { Schema, model } = require("mongoose");

const subscriptionSchema = new Schema(
  {
    coRenter: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    house: {
      type: Schema.Types.ObjectId,
      ref: 'House'
    },
    daysLeftToBook: {
      type: Number
    }
  },
  {
    timestamps: true,
  }
);

module.exports = model("Subscription", subscriptionSchema);