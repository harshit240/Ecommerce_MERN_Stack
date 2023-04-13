const mongoose = require("mongoose");

const productaSchema = new mongoose.Schema({
  name: {
    type: String,
    // required: true,
  },

  description: {
    type: String,
    // required: true,
  },

  price: {
    type: Number,
    // required: true,
  },

  stock: {
    type: Number,
    // required: true,
    default: 1,
  },
  rating: {
    type: Number,
    default: 0,
  },

  images: {
      public_id: {
        type: String,
      },
      url: {
        type: String,
      },
    },
  createdAt: {
    type: Date,
    default: Date.now,
  },
}, { timestamps: true });
var productModel = mongoose.model("Product", productaSchema);
module.exports = productModel;
