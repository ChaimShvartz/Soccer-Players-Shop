import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    res.json({
        success: true,
        data: "Welcome to FirstEleven.Buy and sign professional football talent instantly.",
    });
});

router.get("/health", (req, res) => {
    res.json({success: true, data:"OK"})
});

router.get("/products", (req, res) => {});

router.get("/account/balance", (req, res) => {});

export default router;
