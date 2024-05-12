import { Router } from "express";
import { BTCPrice } from "../controllers/dashboardController.js";

const router = new Router();

router.get("/dashboard", BTCPrice.getAllBTCUSDController);

export default router;
