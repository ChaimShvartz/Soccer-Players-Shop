import fs from "fs/promises";
import "dotenv/config";

export async function readJson() {
    try {
        const fullPath = process.env.DATA_BASE_PATH + this.fileName;
        const data = await fs.readFile(fullPath);
        return JSON.parse(data);
    } catch (err) {
        console.error(err.message);
        return [];
    }
}

export async function saveJson(data) {
    try {
        const fullPath = process.env.DATA_BASE_PATH + this.fileName;
        return await fs.writeFile(
            fullPath,
            JSON.stringify(data, null, 2),
            "utf8",
        );
    } catch (err) {
        console.error(err.message);
    }
}
