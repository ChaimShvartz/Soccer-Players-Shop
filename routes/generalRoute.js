import { Router } from "express";
import { getFilteredProducts } from "../dal/productsDal.js";
import { getCustomerProperty } from "../dal/customersDal.js";
import {  getVerifiedDetails } from "../utils.js";
import { getVerifiedCustomerId } from "../services/customersServices.js";

const router = Router();

router.get("/", (req, res) => {
    res.json({
        success: true,
        data: "Welcome to FirstEleven.Buy and sign professional football talent instantly.",
    });
});

router.get("/health", (req, res) => {
    res.json({ success: true, data: {message: "OK"} });
});

router.get("/products", async (req, res) => {
    try {
        const finalFilters = getVerifiedDetails(req.query, ['inStock', 'maxPrice', 'search']);
        
        const filteredProducts = await getFilteredProducts(finalFilters);
        res.json({ success: true, data: filteredProducts });
    } catch (err) {
        res.status(422).json({ success: false, message: err.message });
    }
});

router.get("/account/balance", async (req, res) => {
    try {
        const {customerId} = getVerifiedDetails(req.query, ['customerId'], true);
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
