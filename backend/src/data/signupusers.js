import { getDatabase } from "../db/database.js";
import bcrypt from "bcryptjs";

const saltRounds = 10; //make 10 saltrounds
const saltrounds1 = 10;

export async function signup(userData) {
  console.log("Function call to signup...");
  const db = await getDatabase();

  const { username, email, password, confirmedPassword } = userData;

  // Check if passwords match
  if (password !== confirmedPassword) {
    throw new Error("Passwords do not match");
  }

  // Check if username or email already exists
  const existingUser = await db.get("SELECT * FROM Users WHERE username = ? OR email = ?", [username, email]);
  if (existingUser) {
    throw new Error("Username or email already exists");
  }

  // Hash and salt the password
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  const hashedConfirmedPassword = await bcrypt.hash(confirmedPassword, saltrounds1);
  
  const sql = "INSERT INTO Users (username, email, password ,confirmedPassword) VALUES (?, ?, ?,?)";
  const values = [username, email, hashedPassword, hashedConfirmedPassword];

  try {
    const result = await db.run(sql, values);
    console.log("Signup successful:", result);
    return result.username;
  } catch (error) {
    console.error("Error Signing Up:", error);
    throw error;
  }
}
