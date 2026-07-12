import { Router } from "express";
import { getVerifiedDetails } from "../utils.js";
import {
    getVerifiedCustomerId,
    hasEnoughBalance,
} from "../services/customersServices.js";
import { getCustomerOrders } from "../dal/ordersDal.js";
import { getCustomer } from "../dal/customersDal.js";
import { checkCart, performCheckout } from "../services/ordersServices.js";
import { getTotalAmount } from "../services/productsServices.js";

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

router.post("/checkout", async (req, res) => {
    // try {
    console.log(req.body);
 
    const customerId = getVerifiedCustomerId(req.body);

    const customer = await getCustomer(customerId);
    if (!customer) throw new Error("Customer not found");

    checkCart(customerId);    
    if (!hasEnoughBalance(customer, await getTotalAmount(customer.cart)))
        throw new Error("There are not enough money in balance");

    performCheckout(customerId);
    res.json({
        success: true,
        data: { message: "Checkout completed successfully" },
    });
    // } catch (err) {
    //     res.status(422).json({ success: false, message: err.message });
    // }
});

export default router;
