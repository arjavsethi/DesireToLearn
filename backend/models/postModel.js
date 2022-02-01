const mongoose = require("mongoose");

const postSchema =new mongoose.Schema({
    name: {
      type: String,
      required: [true, "Please Enter product Name"],
      trim: true,
    },
    category: {
        type: String,
        required: [true, "Please Enter product Description"],
      },
  dateOfQue :{
      type : Date,
      max : Date.now,

  },
  imageUrl :{
    type: String,
    required : [true ,"Please Enter image url"]
  },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  });
  module.exports = mongoose.model("Post", postSchema);