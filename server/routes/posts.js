import express from "express";
import { getPosts } from "../controllers/posts.js";
import { createPost } from "../controllers/posts.js";
import { putPost } from "../controllers/posts.js";
import { deletePost } from "../controllers/posts.js"

const router = express.Router();

router.get( '/', getPosts )
router.post( '/', createPost )
router.put( '/:id', putPost )
router.delete("/:id", deletePost )

export default router;

