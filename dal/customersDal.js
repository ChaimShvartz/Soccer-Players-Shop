import { readJson, saveJson } from "./fileHandler.js";

const context = { fileName: "customers.json" };

export const loadCustomers = readJson.bind(context);
export const dumpCustomers = saveJson.bind(context);
