import { findItem, getFilteredItems } from "./baseDal.js";

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
