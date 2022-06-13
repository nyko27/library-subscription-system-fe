import axiosInstance from "./axios_instance";

export const getLibraryFinanceReport = () => axiosInstance.get("/rents/summarize");