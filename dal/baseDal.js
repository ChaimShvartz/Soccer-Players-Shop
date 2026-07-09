import { readJson } from "./fileHandler.js";
import { validator } from "../validations.js";

export async function getFilteredItems(fileName, filters, filterObj) {
    const products = await readJson(fileName);

    return Object.keys(filters).reduce(
        (acc, key) => acc.filter(filterObj[key]),
        products,
    );
}
