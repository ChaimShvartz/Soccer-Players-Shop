import { validator } from "../validations.js";

export function getFinalFilters(filters) {
    const allowedFilters = ["inStock", "maxPrice", "search"];
    const finalFilters = {}
    Object.entries(filters).forEach(([key, value]) => {
        if (!allowedFilters.includes(key)) return;

        const { checking, errMessage } = validator[key];
        if (!checking(value)) throw new Error(errMessage);
        
        finalFilters[key] = value;
    });
    return finalFilters
}
