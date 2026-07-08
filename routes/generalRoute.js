import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {});
router.get("/health", (req, res) => {});
router.get("/products", (req, res) => {});
router.get("/account/balance", (req, res) => {});

export default router;
