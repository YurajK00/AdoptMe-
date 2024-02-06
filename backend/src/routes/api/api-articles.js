import express from "express";
import { getArticles } from "../../db/users-dao.js";
import { insertArticle } from "../../db/users-dao.js";
import { getArticlelink } from "../../db/getArticlelink.js";


const router = express.Router();



//Setting up a router to post article on the server and then back to the database

router.post("/" , async (req,res)=>{

try {
  const articleData = req.body;
  console.log(articleData);
  const articles = await insertArticle(articleData);
  res.status(201).json({ articles });
} catch (error) {
    console.error('Error adding article:', error);
    res.status(500).json({ error: 'Failed to add article' });
}
})




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




router.get("/articles/:id", async(req,res)=>{

let article_id = req.params.id;
  
    console.log(article_id);
  
    try {
      // Call the getArticles function to retrieve articles
      const articles = await getArticlelink(article_id);
     
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