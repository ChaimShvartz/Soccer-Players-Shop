const fileName = "orders.json";

import { getFilteredItems } from "./baseDal.js";

export async function addOrder(newOrder) {
    addItem(fileName, newOrder);
}

export async function saveOrders(orders) {
    saveJson(fileName, orders);
}

export async function getCustomerOrders(customerId) {
    return await getFilteredItems(
        fileName,
        { customerId },
        { customerId: (order) => order.customerId === customerId },
    );
}
