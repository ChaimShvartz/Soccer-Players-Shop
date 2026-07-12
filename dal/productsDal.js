import { findItem, getFilteredItems, getItems, saveData } from "./baseDal.js";

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

export async function getProduct(productId) {    
    return await findItem(fileName, (product) => product.id === productId);
}

export async function getProducts() {
    return await getItems(fileName)
}

export async function saveProducts(products) {
    await saveData(fileName, products)
}