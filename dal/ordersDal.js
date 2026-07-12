import { getFilteredItems, getItems, saveData } from "./baseDal.js";

const fileName = "orders.json";


export async function addOrder(newOrder) {
    addItem(fileName, newOrder);
}

export async function saveOrders(orders) {
    saveData(fileName, orders);
}

export async function getCustomerOrders(customerId) {
    return await getFilteredItems(
        fileName,
        { customerId },
        { customerId: (order) => order.customerId === customerId },
    );
}

export async function getOrders() {
    return await getItems(fileName);
}
