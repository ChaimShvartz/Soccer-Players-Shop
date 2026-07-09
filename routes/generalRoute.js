import { Router } from "express";
// import { getFilterredProducts } from "../dal/productsDal.js";
// import { getFilteredProducts } from "../services/productsServices.js";
import { getFilteredProducts } from "../dal/productsDal.js";
import { getFinalFilters } from "../services/productsServices.js";
// import { isValidValue } from "../validations.js";

const router = Router();

router.get("/", (req, res) => {
    res.json({
        success: true,
        data: "Welcome to FirstEleven.Buy and sign professional football talent instantly.",
    });
});

router.get("/health", (req, res) => {
    res.json({ success: true, data: "OK" });
});

router.get("/products", async (req, res) => {
    try {
        const finalFilters = getFinalFilters(req.query)
        const filteredProducts = await getFilteredProducts(finalFilters);
        res.json({ success: true, data: filteredProducts });
    } catch (err) {
        res.json({ success: false, message: err.message });
    }
});

router.get("/account/balance", (req, res) => {});

export default router;
