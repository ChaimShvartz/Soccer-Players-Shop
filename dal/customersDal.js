import { getFilteredItems } from "./baseDal.js";

const fileName = "customers.json";

export async function getCustomerBalance(customerId) {
    const customer = await getFilteredItems(
        fileName,
        { customerId },
        { customerId: (customer) => customer.customerId === customerId },
    );
    return customer[0]?.balance || null;
}
