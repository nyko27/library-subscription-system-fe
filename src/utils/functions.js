const camelToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);

export function objToJson(obj) {
    for (const key in obj) {
        const newKey = camelToSnakeCase(key);
        if (newKey !== key) {
            obj[newKey] = obj[key];
            delete obj[key];
        };
    }

    const jsonData = JSON.stringify(obj);
    console.log(jsonData);

    return jsonData;
}