import { Router } from "express";
import { jwt_Secret } from "../config.js";
import jwt from "jsonwebtoken";

const router = Router();

export const isLoggedIn = (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    const user = jwt.verify(token, jwt_Secret);
    console.log(user);
    next();
  } catch (err) {
    return res.status(400).send(`Incorrect Token`).end();
  }
};

export default router;
