import User from "../models/user.models.js";
import bcryptjs from "bcryptjs";
export const signup = async (req, res) => {
  const { username, password, email } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, password: hashedPassword, email });
  try {
    await newUser.save();
    res.status(200).json("user created successfully.");
  } catch (error) {
    res.status(500).json(error.message);
  }
  console.log("object");
  console.log(req.body);
};
