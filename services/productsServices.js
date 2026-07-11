import { getProduct } from "../dal/productsDal.js";

export function getTotalAmount(cart) {
    return cart.reduce(
        async (acc, { productId, quantity }) =>
            (await acc) + (await getProduct(productId)).price * quantity,
        0,
    );
}
