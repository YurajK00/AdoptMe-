import { getDatabase } from "./database.js";


export async function getArticlelink(article_id) {
    const db = await getDatabase(); 
  
    // SQL query with placeholders
    const sql = "SELECT article_title, article_content , author_name, date_published FROM Articles WHERE article_id = ?";
  
    try {
      // Execute the SQL query
      const userData = await db.all(sql, article_id);
  
      return userData; // Return the retrieved data
    } catch (error) {
      console.error("Error fetching articles:", error);
      throw error; // Propagate the error to the caller
    } 
  }
  