import jwt from "jsonwebtoken";
import User from "../models/User.js";

export default async (req, res, next) => {
  const authHeader = req.get("Authorization");
  if (!authHeader) {
    return res.status(422).json("Not Authantcated");
  }
  const token = req.get("Authorization");

  let decodedToken;
  try {
    decodedToken = jwt.verify(token, "somesecretsecretsecret");
  } catch (err) {
    return res.status(422).json("Not Authantcated");
  }
  if (!decodedToken) {
    return res.status(422).json("Not Authantcated");
  }
  req.userId = decodedToken.userId;
  req.user = await User.findById(req.userId);
  next();
};
