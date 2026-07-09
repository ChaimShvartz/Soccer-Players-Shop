import { getFilteredItems } from "./baseDal.js";

const fileName = "products.json";

export async function getFilteredProducts(filters) {
    const productsFiltersObj = {
        inStock: (product) =>
            filters.inStock === "true"
                ? product.stock > 0
                : product.stock === 0,
        maxPrice: (product) => product.price <= filters.maxPrice,
        search: (product) =>
            product.name.toLowerCase().includes(filters.search.toLowerCase()),
    };

    return await getFilteredItems(fileName, filters, productsFiltersObj);
}
