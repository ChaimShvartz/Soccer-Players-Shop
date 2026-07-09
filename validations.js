export const validator = {
    inStock: {
        checking: (value) => ["true", "false"].includes(value),
        errMessage: "inStock must be a boolean value",
    },
    maxPrice: {
        checking: (value) => value > 0 && value <= 100,
        errMessage: "maxPrice must be a number in range(1, 101)",
    },
    search: {
        checking: (value) => value.length,
        errMessage: "search must be non-empty",
    },
};
