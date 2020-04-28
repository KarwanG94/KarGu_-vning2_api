const express = require('express');
const router = express.Router();

const users = require('./users.js');
const posts = require('./posts.js');

router.get("/", users.theUsers);
router.get("/users/:userId", users.theUsers);
router.post("/", users.postUsers);
router.put("/users/:userId", users.putUsers);

router.get("/posts", posts.getPosts);
router.get("/posts/:postsId", posts.getPosts);
router.post("/posts", posts.postPosts);
router.put("/posts/:postsId", posts.getPosts);
router.patch("/posts/:postsId", posts.patchPosts);
router.delete("/posts/:postsId", posts.deletePosts);





module.exports = router