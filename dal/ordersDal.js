import { readJson, saveJson } from "./fileHandler.js";

const context = { fileName: "orders.json" };

export const loadOrders = readJson.bind(context);
export const dumpOrders = saveJson.bind(context);
