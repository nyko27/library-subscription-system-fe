import { getUsers } from "./api/user_api";

const camelToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);

export function objToJson(obj) {
    for (const key in obj) {
        const newKey = camelToSnakeCase(key);
        if (newKey !== key) {
            obj[newKey] = obj[key];
            delete obj[key];
        }
    }
    return obj;
}

export function checkFormsFilling(obj) {
    for (const key in obj) {
        if (obj[key] === "") {
            return false;
        }
    }
    return true;
}



