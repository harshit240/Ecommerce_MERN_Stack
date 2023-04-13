const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    // required: true,
  },

  description: {
    type: String,
    // required: true,
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
var categoryModel = mongoose.model("categoryProduct", categorySchema);
module.exports = categoryModel;
