import express from "express";

const router = express.Router();

// import child routes
import articleRoutes from "./api-articles.js";
router.use("/articles", articleRoutes)

import authRoutes from "./api-auth.js";
router.use("/auth", authRoutes);

import userRoutes from "./api-users.js";
router.use("/users", userRoutes);

import comments from "./api-comments.js";
router.use("/comments", comments);

import singupusersRoutes from "./api-signup.js";
router.use("/signup" , singupusersRoutes);

import userprofileRoutes  from "./api-userprofile.js";
router.use("/userprofile", userprofileRoutes);






export default router;
