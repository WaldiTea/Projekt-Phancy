const express = require("express");
const multer = require("multer");
const { v4: uuidv4 } = require("uuid");
const path = require("path");
const Post = require("../models/post.model");
const fs = require("fs");

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "src/images");
  },
  filename: function (req, file, cb) {
    cb(null, uuidv4() + path.extname(file.originalname));
  },
});

const fileFilter = (req, file, cb) => {
  const allowedFileTypes = ["image/jpeg", "image/jpg", "image/png"];
  if (allowedFileTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({ storage, fileFilter });

router.post("/add", upload.single("photo"), (req, res) => {
  const photo = req.file.filename;
  const tags = req.body.tags;

  const newPostData = {
    photo,
    tags,
  };

  const newPost = new Post(newPostData);

  newPost
    .save()
    .then(() => Post.find())
    .then((postsArray) => res.json(postsArray))
    .catch((err) => res.status(400).json({ error: err }));
});

router.get("/all", (_, res) => {
  Post.find()
    .then((postsArray) => res.json(postsArray))
    .catch((err) => res.status(400).json({ error: err }));
});

router.put("/:id", (req, res) => {
  const id = req.params.id;
  const tag = req.body.tag;

  Post.findByIdAndUpdate(id, { $addToSet: { tags: tag } })
    .then(() => Post.find())
    .then((postsArray) => res.json(postsArray))
    .catch((err) => res.status(400).json({ error: err }));
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;

  Post.findByIdAndDelete(id)
    .then((postsArray) => fs.unlink("src/images/" + postsArray.photo, () => {}))
    .then(() => Post.find())
    .then((postsArray) => res.json(postsArray))
    .catch((err) => res.status(400).json({ error: err }));
});

module.exports = router;
