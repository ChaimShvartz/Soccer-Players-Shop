import fs from "fs/promises";

export async function readJson(filePath) {
    try {
        const data = await fs.readFile(filePath);
        return JSON.parse(data);
    } catch (err) {
        console.error(err.message);
        return [];
    }
}

export async function saveJson(filePath, data) {
    try {
        return await fs.writeFile(filePath, JSON.stringify(data, null, 2), "utf8");
    } catch (err) {
        console.error(err.message);
    }
}
