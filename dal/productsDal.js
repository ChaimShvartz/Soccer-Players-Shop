import { readJson, saveJson } from "./fileHandler.js";

const productsDataPath = "./data/products.json";

export function loadProducts() {
    return readJson(productsDataPath);
}

export function dumpProducts(products) {
    return saveJson(productsDataPath, products);
}
