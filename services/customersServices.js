import {
    addCustomer,
    getCustomer,
    getCustomers,
    saveCustomers,
} from "../dal/customersDal.js";
import { getVerifiedDetails } from "../utils.js";
import { validator } from "../validations.js";
import "dotenv/config";

export function getVerifiedCustomerId({ customerId }) {
    const { checking, errMessage } = validator.id;
    if (!checking(customerId)) throw new Error(errMessage);
    return customerId;
}

export function getFinalParams(params) {
    return getVerifiedDetails(
        params,
        ["customerId", "productId", "quantity"],
        true,
    );
}

export async function addProductToCart(customerId, productId, quantity) {
    const newItem = { productId, quantity };
    const customers = await getCustomers();
    const customer = customers.find(
        (customer) => customer.customerId === customerId,
    );

    if (!customer)
        customers.push({
            customerId,
            balance: +process.env.STARTING_BALANCE,
            cart: [newItem],
            createdAt: new Date(),
        });
    else {
        const item = customer.cart.find((item) => item.productId === productId);
        item ? (item.quantity += quantity) : customer.cart.push(newItem);
    }
    saveCustomers(customers);
}

export async function removeItemFromCart(productId, customerId) {
    const customers = await getCustomers();

    const customer = customers.find(
        (customer) => customer.customerId === customerId,
    );
    if (!customer) throw new Error("Customer not found");

    const itemIndex = customer.cart.findIndex(
        (item) => item.productId === productId,
    );

    if (itemIndex === -1) return;
    
    customer.cart.splice(itemIndex, 1);
    saveCustomers(customers);
    return true;
}

export function hasEnoughBalance(customer, amount) {     
    return customer.balance >= amount
}