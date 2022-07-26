const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  photo: String,
  tags: [String],
});

module.exports = mongoose.model("Post", postSchema);
