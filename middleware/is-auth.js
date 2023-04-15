import jwt from "jsonwebtoken";
import User from "../models/User.js";

export default async (req, res, next) => {
  const authHeader = req.get("Authorization");
  if (!authHeader) {
    const error = new Error("Not authanticated");
    error.statusCode = 401;
    throw error;
  }
  const token = req.get("Authorization");

  let decodedToken;
  try {
    decodedToken = jwt.verify(token, "somesecretsecretsecret");
  } catch (err) {
    err.statusCode = 500;
    throw err;
  }
  if (!decodedToken) {
    const error = new Error("Not authanticated");
    error.statusCode = 401;
    throw error;
  }
  req.userId = decodedToken.userId;
  req.user = await User.findById(req.userId);
  next();
};
