const express = require("express");
const { isAuthenticatedUser } = require("../middleware/auth");
const router = express.Router();
const { getAllPost, createPost } = require("../controller/postController");

router.route("/post").get(getAllPost);
router.route("/createPost").post(createPost);

module.exports = router;
