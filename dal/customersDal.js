import { addItem, findItem, getFilteredItems, getItems } from "./baseDal.js";
import { readJson, saveJson } from "./fileHandler.js";

const fileName = "customers.json";

export async function getCustomerProperty(customerId, property) {
    const customer = await getCustomer(customerId);        
    return customer?.[property];
}

export async function getCustomer(customerId) {
    return await findItem(
        fileName,
        (customer) => customer.customerId === customerId,
    );
}

export async function addCustomer(newCustomer) {
     addItem(fileName, newCustomer)
}

export async function saveCustomers(customers) {
    saveJson(fileName, customers)
}

export async function getCustomers() {
    return getItems(fileName)
}