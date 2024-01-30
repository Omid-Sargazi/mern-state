import User from "../models/user.models.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
export const signup = async (req, res, next) => {
  const { username, password, email } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, password: hashedPassword, email });
  try {
    await newUser.save();
    res.status(200).json("user created successfully.");
  } catch (error) {
    // next(errorHandler(501, "error form the function"));
    next(error);
    // res.status(500).json(error.message);
  }
  console.log("object");
  console.log(req.body);
};
