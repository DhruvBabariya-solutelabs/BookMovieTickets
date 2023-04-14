import mongoose from "mongoose";
import User from "../models/User.js";
import service from "../services/UserService.js";

const createUser = async (req, res) => {
  try {
    const { email, password, name, contect } = req.body;
    const user = new User({ email, password, name, contect });
    const savedUser = service.createUser(user);
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export default { createUser };
