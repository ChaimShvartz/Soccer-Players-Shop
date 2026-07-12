import { getProduct, getProducts } from "../dal/productsDal.js";

export function getTotalAmount(cart) {
    return cart.reduce(
        async (acc, { productId, quantity }) =>
            (await acc)+ (await getProduct(productId)).price * quantity,
        0,
    );
}

export async function checkProductsAvailability(productsCart) {
    const products = await getProducts();
    productsCart.forEach(({ productId, quantity }) =>  {        
        const product = products.find(
            (product) => product.id === productId,
        );
        if (product.stock < quantity){
            console.log(product, quantity);
            
            throw new Error("There are not enough items in stock");
        }
    });
}
