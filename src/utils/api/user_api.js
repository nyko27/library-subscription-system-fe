import axiosInstance from "./axios_instance";

export async function getUsers() {
    return (await axiosInstance.get(`/users/`)).data;
}

export async function getUserById(id) {
    return (await axiosInstance.get(`/users/${id}/`)).data;
}

export async function addUser(newUser) {
    return (await axiosInstance.post("/users/", newUser));
}

export async function updateUserById(id, updatedUser) {
    return (await axiosInstance.put(`/users/${id}/`, updatedUser));
}

export async function deleteUserById(id) {
    return (await axiosInstance.delete(`/users/${id}/`)).status;
}

export async function getUserRents(id) {
    return (await axiosInstance.get(`/users/${id}/rents/`));
}

export async function getUserByPhoneNumber(phoneNumber) {
    const users = await getUsers();
    for (const user of users) {
        if (user["phone_number"] === phoneNumber) {
            return user;
        }
    }
    return false;
}

export async function requestRent(id, rentData) {
    return (await axiosInstance.post(`/users/${id}/rents:request`, rentData));
}