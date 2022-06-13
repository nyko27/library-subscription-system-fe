import axiosInstance from "./axios_instance";

export const getLibraryFinanceReport = () => axiosInstance.get("/rents/summarize");

export const getUsersList = () => axiosInstance.get("/rents/");

export const getUserFinanceReport = (userId) => axiosInstance.get(`/users/${userId}/rents:summarize`);

