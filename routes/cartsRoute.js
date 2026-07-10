import { Router } from "express";
import { getVerifiedCustomerId } from "../services/customersServices.js";
import { getCustomerProperty } from "../dal/customersDal.js";
import { getTotalAmount } from "../services/productsServices.js";

const router = Router();

router.get("/", async (req, res) => {
    try {
        const customerId = getVerifiedCustomerId(req.query);
        const customerCart = await getCustomerProperty(customerId, 'cart');
        
        if (!customerCart)
            return res.status(404).json({
                success: "false",
                message: "Customer not found",
            });
        
        const totalAmount = await getTotalAmount(customerCart)
        
        res.json({ success: true, data: {customerCart, totalAmount}});
    } catch (err) {
        res.status(422).json({ success: false, message: err.message });
    }
});

router.post("/items", (req, res) => {});
router.delete("/items/:productId", (req, res) => {});

export default router;
