import { readJson, saveJson } from "./fileHandler.js";

const context = { fileName: "products.json" };

export const loadProducts = readJson.bind(context);
export const dumpProducts = saveJson.bind(context);
