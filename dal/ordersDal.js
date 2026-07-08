import { readJson, saveJson } from "./fileHandler.js";

const ordersDataPath = "./data/orders.json";

export function loadOrders() {
    return readJson(ordersDataPath);
}

export function dumpOrders(orders) {
    return saveJson(ordersDataPath, orders);
}
