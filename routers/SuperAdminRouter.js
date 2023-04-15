import express from "express";
import userController from "../controllers/UserController.js";
import isSuperAdmin from "../middleware/is-superAdmin.js";
import isAuth from "../middleware/is-auth.js";
const router = express.Router();

router.post("/signup-admin", isAuth, isSuperAdmin, userController.createUser);

router.put(
  "/update-admin/:id",
  isAuth,
  isSuperAdmin,
  userController.updateUser
);

router.get("/findusers", isAuth, isSuperAdmin, userController.getUsers);

router.delete(
  "/delete-admin/:id",
  isAuth,
  isSuperAdmin,
  userController.deleteUser
);

export default router;
