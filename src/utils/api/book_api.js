import axiosInstance from "./axios_instance";

export async function getBooks() {
    return (await axiosInstance.get(`/books`)).data;
}

export async function getBookById(id) {
    return (await axiosInstance.get(`/books/${id}`)).data;
}

export async function addBook(newBook) {
    return (await axiosInstance.post("/books", newBook)).data;
}

export async function updateBookById(id, updatedBook) {
    return (await axiosInstance.put(`/books/${id}`, updatedBook)).data;
}

export async function deleteBookById(id) {
    return (await axiosInstance.delete(`/books/${id}`)).status;
}