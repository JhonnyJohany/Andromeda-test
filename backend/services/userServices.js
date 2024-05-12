import { loginModel } from "../models/user.model.js";
import crypto from "crypto";

const encryptPassword = (password) => {
  const key = "rFr7T1ENYlHQn80A";
  const cipher = crypto.createCipher("aes-256-cbc", key);
  let encryptedPassword = cipher.update(password, "utf-8", "hex");
  encryptedPassword += cipher.final("hex");
  return encryptedPassword;
};

const loginUser = async (username, password) => {
  const normalizedUsername = username.toLowerCase();

  const user = await loginModel.getUserByUsername(normalizedUsername);
  if (!user) {
    return null;
  }

  const encryptedPassword = encryptPassword(password);
  console.log(encryptedPassword);

  if (encryptedPassword === user.password) {
    return user;
  } else {
    return null;
  }
};

export const loginService = {
  loginUser,
};
