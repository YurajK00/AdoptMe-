import express from 'express';
import {addcomments, getcomments } from '../../data/comments.js';

const router = express.Router();

// Endpoint for adding comments
router.post('/', async (req, res) => {
  console.log("...post comment...");
  try {
    const commentData = req.body;
    console.log(commentData);
    const commentId = await addcomments(commentData);
    res.status(201).json({ commentId });
  } catch (error) {
      console.error('Error adding comment:', error);
      res.status(500).json({ error: 'Failed to add comment' });
  }
});

router.get("/", async (req, res) => {
  console.log("Article id: " + req.query.article_id);
  try {
    const comments = await getcomments(req.query.article_id);
    console.log("...got comments...");
    console.log(comments);
    res.status(200).json({ comments });
  } catch (error) {
    console.error("Error fetching comments:", error);
    res.status(500).json({ error: "Failed to fetch comments" });
  }
});

export default router;