
const camelToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);

export function objToJson(obj) {
    for (const key in obj) {
        const newKey = camelToSnakeCase(key);
        if (newKey !== key) {
            obj[newKey] = obj[key];
            delete obj[key];
        }
    }

    return JSON.stringify(obj);
}

export function checkFormsFilling(obj) {
    for (const key in obj) {
        if (obj[key] === "") {
            return false;
        }
    }

    return true;
}

export async function handleSubmit(e, formsData, apiMethod, navigate, handleShow, redirectLink) {
    e.preventDefault();

    if (!(checkFormsFilling(formsData))) {
        handleShow();
    } else {
        const newObj = objToJson(formsData);
        const response = await apiMethod(newObj);

        if (response.status === 200) {
            navigate(redirectLink);
        } else {
            handleShow();
        }
    }
}