import { getDatabase } from "../db/database.js";
import bcrypt from "bcryptjs";

const saltRounds = 10;
 const saltrounds1 = 10;

export async function signup(userData) {
  console.log("Function call to signup...");
  const db = await getDatabase();

  const { username, firstName, lastName, email, password, confirmedPassword, birthday } = userData;

  // Check if passwords match
  if (password !== confirmedPassword) {
    throw new Error("Passwords do not match");
  }

  // Check if username or email already exists
  const existingUser = await db.get("SELECT * FROM Users WHERE username = ? OR email = ?", [username, email]);
  
  if (existingUser) {
    throw new Error("Username or email already taken"); 
    
  } 

  // Hash and salt the password
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  const hashedConfirmedPassword = await bcrypt.hash(confirmedPassword, saltrounds1);

  const sql = "INSERT INTO Users (username, firstName, lastName, email, password, confirmedPassword, birthday) VALUES (?, ?, ?, ?, ?, ?, ?)";
  const values = [username, firstName, lastName, email, hashedPassword ,hashedConfirmedPassword, birthday];

  try {
    const result = await db.run(sql, values);
    console.log("Signup successful:", result);
    return result.username;
  } catch (error) {
    console.error("Error Signing Up:", error);
    throw error;
  }
}
