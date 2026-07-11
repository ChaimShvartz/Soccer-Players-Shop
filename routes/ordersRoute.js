import { Router } from "express";
import { getVerifiedDetails } from "../utils.js";
import { getVerifiedCustomerId } from "../services/customersServices.js";
import { getCustomerOrders } from "../dal/ordersDal.js";

const router = Router();

router.get("/", async (req, res) => {
    try {
        const customerId = getVerifiedCustomerId(req.query);

        const orders = await getCustomerOrders(customerId);
        if (!orders.length) throw new Error("Orders not found");

        res.json({ success: true, data: orders });
    } catch (err) {
        res.status(422).json({ success: false, message: err.message });
    }
});

router.post("/checkout", (req, res) => {});

export default router;
