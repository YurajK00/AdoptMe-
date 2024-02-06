import yup from "yup";
import { getDatabase } from "./database.js";

//--------------------------------------------------------------------------------------------------------------


/**
 * Gets the user with the given username, if it exists.
 *
 * @param {string} username the username to search
 * @returns the user with the matching username, or undefined.
 */
export async function getUserWithUsername(username) {
  const db = await getDatabase();
  const sql = "SELECT * FROM Users WHERE username = ?";
  const userData = await db.get(sql, username)
  return userData
}

/**
 * Gets the user with the given username and password, if it exists.
 *
 * @param {string} username the username to search
 * @param {*} password the password to search
 * @returns the user with the given credentials, or undefined.
 */

//------------------------------------------------------------------------------------------------------------------

export async function getUserWithCredentials(username, password) {
  const db = await getDatabase();
  const sql = "SELECT * FROM Users WHERE username = ? and password = ?";
  const userData = await db.get(
    sql,
    username,
    password
  )
  return userData
}


export async function getArticles(article_id) {
  const db = await getDatabase(); 

  // SQL query with placeholders
  const sql = "SELECT * FROM Articles WHERE article_id = ?";

  try {
    // Execute the SQL query
    const userData = await db.all(sql, article_id);

    return userData; // Return the retrieved data
  } catch (error) {
    console.error("Error fetching articles:", error);
    throw error; // Propagate the error to the caller
  } 
}

//------------------------------------------------------------------------------------------------------------------

//Publish New Article

// export async function insertArticle(articleData){
//   const db = await getDatabase();

//   const{ article_title , article_content , author_username} = articleData;




//   const sql = "INSERT INTO Articles (article_title, article_content) VALUES (?,?)"
//   const values = [article_title, article_content]

  
//  try {
//     const result = await db.run(sql, values);
//     console.log("Article added", result.article_id);
//     return result.changes>0;
//   } catch (error) {
//     console.error("Error adding article:", error);
//     throw error;
//   }


// }

export async function insertArticle(articleData){
  const {article_content , article_title , author_username} = articleData
 
  const db = await getDatabase();

 await db.get('SELECT id FROM Users WHERE username = ?', [author_username], (err, row) => {
  if (err) {
      return res.status(500).json({ error: err.message });
  }

  if (!row) {
      return res.status(404).json({ error: 'Author not found' });
  }

  const author_id = row.id;

  // Insert the new article into the Articles table and retrieve author_name dynamically
  db.run(
      `INSERT INTO Articles (article_content, article_title, author_id, author_name) 
       SELECT ?, ?, u.username, ?, ?, ?, ?
       FROM Users u 
       WHERE u.username = ?`,
      [article_content, article_title, author_id, author_username],
      function (err) {
          if (err) {
              return res.status(500).json({ error: err.message });
          }
          res.status(201).json({ message: 'Article created successfully', article_id: this.lastID });
      }
  );
});
}


//--------------------------------------------------------------------------------------------------------------




const updateUserSchema = yup
  .object({
   article_title: yup.string().optional(),
  article_content: yup.string().optional()
  })
  .required();




// Edit and pulbish the article
 
export async function updateUser(publisher_id, updateData) {
  const validated = updateUserSchema.validateSync(updateData, {
    abortEarly: false,
    stripUnknown: true
  });

  const sql = "UPDATE PUBLISH SET article_title = ?, article_content = ? WHERE publisher_id = ?";
  const db = await getDatabase();

  const dbResult = await db.run(sql, validated.article_title, validated.article_content, publisher_id);

  // Return true if changes applied, false otherwise
  return dbResult.changes > 0;
}





