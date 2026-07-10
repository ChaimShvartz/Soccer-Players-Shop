import { Router } from "express";
import { getFilteredProducts } from "../dal/productsDal.js";
import { getCustomerProperty } from "../dal/customersDal.js";
import { getFinalFilters } from "../services/productsServices.js";
import { getVerifiedCustomerId } from "../services/customersServices.js";

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
        const finalFilters = getFinalFilters(req.query);
        const filteredProducts = await getFilteredProducts(finalFilters);
        res.json({ success: true, data: filteredProducts });
    } catch (err) {
        res.status(422).json({ success: false, message: err.message });
    }
});

router.get("/account/balance", async (req, res) => {
    try {
        const customerId = getVerifiedCustomerId(req.query);
        const customerBalance = await getCustomerProperty(
            customerId,
            "balance",
        );

        if (customerBalance === undefined)
            return res.status(404).json({
                success: "false",
                message: "Customer not found",
            });

        res.json({ suscess: true, data: customerBalance });
    } catch (err) {
        res.status(422).json({ success: false, message: err.message });
    }
});

export default router;
