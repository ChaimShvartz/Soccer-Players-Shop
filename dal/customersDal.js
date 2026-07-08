import { readJson, saveJson } from "./fileHandler.js";

const customersDataPath = "./data/customers.json";

export function loadCustomers() {
    return readJson(customersDataPath);
}

export function dumpCustomers(customers) {
    return saveJson(customersDataPath, customers);
}
