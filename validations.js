export const validator = {
    inStock: {
        checking: (value) => ["true", "false"].includes(value),
        errMessage: "inStock must be a boolean value",
    },
    maxPrice: {
        checking: (price) => value > 0 && price <= 100,
        errMessage: "maxPrice must be a number in range(1, 101)",
    },
    search: {
        checking: (key) => key.length,
        errMessage: "search must be non-empty",
    },
    id: {
        checking: (id) => id > 0,
        errMessage: "ID must be an integer",
    },
};
