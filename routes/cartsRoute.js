import { Router } from "express";
import {
    addProductToCart,
    getVerifiedCustomerId,
    removeItemFromCart
} from "../services/customersServices.js";
import { getCustomer, getCustomerProperty } from "../dal/customersDal.js";
import { getTotalAmount } from "../services/productsServices.js";
import { getProduct } from "../dal/productsDal.js";
import { getVerifiedDetails } from "../utils.js";

const router = Router();

router.get("/", async (req, res) => {
    try {
        const customerId = getVerifiedCustomerId(req.query);
        const customerCart = await getCustomerProperty(customerId, "cart");

        if (!customerCart)
            return res.status(404).json({
                success: "false",
                message: "Customer not found",
            });

        const totalAmount = await getTotalAmount(customerCart);

        res.json({ success: true, data: { customerCart, totalAmount } });
    } catch (err) {
        res.status(422).json({ success: false, message: err.message });
    }
});

router.post("/items", async (req, res) => {
    try {
        const { customerId, productId, quantity } = getVerifiedDetails(
            req.body,
            ["customerId", "productId", "quantity"],
            true,
        );

        const product = await getProduct(+productId);
        if (!product)
            return res.status(404).json({
                success: "false",
                message: "Product not found",
            });
        if (product.stock < quantity)
            throw new Error("There are not enough items in stock");

        addProductToCart(customerId, productId, +quantity);

        res.status(201).json({
            success: true,
            data: { message: "Product added successfully" },
        });
    } catch (err) {
        res.status(422).json({ success: false, message: err.message });
    }
});

router.delete("/items/:productId", async (req, res) => {
    try {
        const { productId, customerId } = getVerifiedDetails(
            { ...req.body, ...req.params },
            ["customerId", "productId"],
            true,
        );

        const product = getProduct(productId);
        if (!product)
            res.status(404).json({
                success: false,
                message: "Product not found",
            });

        await removeItemFromCart(productId, customerId)
            ? res.json({ success: true, msg: "Product deleted successfully" })
            : res.sendStatus(204);
    } catch (err) {
        res.status(422).json({ success: false, message: err.message });
    }
});

export default router;
