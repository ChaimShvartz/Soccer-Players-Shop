export const validator = {
    inStock: {
        checking: (value) => ["true", "false"].includes(value),
        errMessage: "inStock must be a boolean value",
    },
    maxPrice: {
        checking: (price) => price > 0 && price <= 100,
        errMessage: "maxPrice must be a number in range(1, 101)",
    },
    search: {
        checking: (key) => key.length,
        errMessage: "search must be non-empty",
    },
    id: {
        checking: (id) => id.length,
        errMessage: "ID must be non-empty",
    },
    customerId: {
        checking: (id) => id.length,
        errMessage: "ID must be non-empty",
    },
    productId: {
        checking: (id) => id.length,
        errMessage: "ID must be non-empty",
    },
    quantity: {
        checking: (quantity) => quantity > 0 && Number.isInteger(+quantity),
        errMessage: "quantity must be a positive number",
    }
};
