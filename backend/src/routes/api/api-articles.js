import express from "express";
import { getArticles } from "../../db/users-dao.js";

const router = express.Router();




router.get("/:id", async (req, res) => {
    // Retrieve article_content and article_title from query parameters
    let article_id = req.params.id;
  
    console.log(article_id);
  
    try {
      // Call the getArticles function to retrieve articles
      const articles = await getArticles(article_id);
  
      // If no articles are found, send 404 status code
      if (!articles) {
        return res.sendStatus(404);
      }
  
      // If articles are found, send them as a response
      res.json(articles);
    } catch (error) {
      console.error("Error fetching articles:", error);
      // Send a 500 status code and an error message as response
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
  
  export default router;