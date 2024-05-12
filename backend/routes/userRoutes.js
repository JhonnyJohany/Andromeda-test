import { Router } from "express";
import { login } from "../controllers/userController.js";

const router = new Router();

router.post("/login", login);

export default router;
