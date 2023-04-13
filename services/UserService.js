import User from "../models/User.js";

const createUser = async (userData) => {
  try {
    const savedUser = await userData.save();
    return savedUser;
  } catch (error) {
    throw new Error(error.message);
  }
};

export default { createUser };
