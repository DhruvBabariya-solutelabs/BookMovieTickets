import express from "express";
import userController from "../controllers/UserController.js";

const router = express.Router();

router.post("/signup", userController.createUser);

export default router;
