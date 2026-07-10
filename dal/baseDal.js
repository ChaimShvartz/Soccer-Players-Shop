import { readJson } from "./fileHandler.js";

export async function getFilteredItems(fileName, filters, filterObj) {
    const items = await readJson(fileName);

    return Object.keys(filters).reduce(
        (acc, key) => acc.filter(filterObj[key]),
        items,
    );
}

export async function findItem(fileName, predicate) {
    const items = await readJson(fileName)

    return items.find(predicate)
}

