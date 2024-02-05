import yup from "yup";
import { getDatabase } from "./database.js";


/**
 * Gets the user with the given username, if it exists.
 *
 * @param {string} username the username to search
 * @returns the user with the matching username, or undefined.
 */
export async function getUserWithUsername(username) {
  const db = await getDatabase();
  const sql = "SELECT * FROM PUBLISH WHERE username = ?";
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
  const db = await getDatabase(); // Assuming getDatabase returns a database connection

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
//export async function insertUser(username, password){
  //const db =await getDatabase();
  //const sql = 'Insert into Users (username, password) Values (? , ?';
  //const userData = await db.run(
  //  sql, username, password
 // )
 // return userData
//}


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


