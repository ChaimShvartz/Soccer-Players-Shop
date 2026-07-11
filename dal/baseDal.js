import { readJson, saveJson } from "./fileHandler.js";

export async function getFilteredItems(fileName, filters, filterObj) {
    const items = await readJson(fileName);

    return Object.keys(filters).reduce(
        (acc, key) => acc.filter(filterObj[key]),
        items,
    );
}

export async function getItems(fileName) {
    return await readJson(fileName)
}

export async function findItem(fileName, predicate) {
    const items = await readJson(fileName)    

    return items.find(predicate)
}

export async function addItem(fileName, item) {
    const items = await readJson(fileName)
    items.push(item)
    saveJson(fileName, items)
}

export async function saveData(fileName, data) {
    saveJson(fileName, data)
}