import axiosInstance from "./axios_instance";

export async function getRents() {
    return (await axiosInstance.get(`/rents/`)).data;
}

export async function getRentById(rentId) {
    return (await axiosInstance.get(`/rents/${rentId}`)).data;
}

export async function addRent(newRent) {
    return (await axiosInstance.post("/rents/", newRent));
}

export async function updateRentById(rentId, updatedRent) {
    return (await axiosInstance.put(`/rents/${rentId}`, updatedRent));
}

export async function deleteRentById(rentId) {
    return (await axiosInstance.delete(`/rents/${rentId}`)).status;
}

export async function getLibraryFinancialReport() {
    return (await axiosInstance.get(`/rents/summarize`)).data;
}
