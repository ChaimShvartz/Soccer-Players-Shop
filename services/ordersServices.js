import { getCustomerProperty, getCustomers, saveCustomers } from "../dal/customersDal.js";
import { getOrders, saveOrders } from "../dal/ordersDal.js";
import { getProducts, saveProducts } from "../dal/productsDal.js";
import { checkProductsAvailability } from "./productsServices.js";

export async function checkCart(customerId) {
    const cart = await getCustomerProperty(customerId, 'cart')
    
    if(!cart.length) throw new Error("The cart is empty");
    checkProductsAvailability(cart)
}

export async function performCheckout(customerId) {
    const customers = await getCustomers()
    const products = await getProducts()
    const orders = await getOrders()

    const customer = customers.find(customer => customer.customerId === customerId)
    const  {cart} = customer
    let totalAmount = 0

    cart.forEach(({productId, quantity}) => {
        const product = products.find(product => product.id === productId)
        product.stock -= quantity
        totalAmount += product.price * quantity
    })

    
    orders.push({
        customerId,
        items: [...cart]
    })

    customer.balance -= totalAmount;
    customer.cart = []

    saveOrders(orders)
    saveCustomers(customers)
    saveProducts(products)
}
