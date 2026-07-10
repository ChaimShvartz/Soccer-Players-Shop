import { findItem } from "../dal/baseDal.js";
import { getProduct } from "../dal/productsDal.js";
import { validator } from "../validations.js";

export function getFinalFilters(filters) {
    const allowedFilters = ["inStock", "maxPrice", "search"];
    const finalFilters = {};
    Object.entries(filters).forEach(([key, value]) => {
        if (!allowedFilters.includes(key)) return;

        const { checking, errMessage } = validator[key];
        if (!checking(value)) throw new Error(errMessage);

        finalFilters[key] = value;
    });
    return finalFilters;
}

export function getTotalAmount(cart) {
    return cart.reduce(
        async (acc, { productId, quantity }) =>
            (await acc) + (await getProduct(productId)).price * quantity,
        0,
    );
}
