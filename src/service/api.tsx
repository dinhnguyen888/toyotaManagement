import axios from "axios";
interface User {
    name: string;
    age: string;
    address: string;
}


const url = "http://localhost:8000/data";

export const getallUsers = async (id?:string) => {
    id = id || '';
    return await axios.get(`${url}/${id}`);
}

export const addUser = async (user:User) => {
    return await axios.post(url,user);
}

export const editUser = async (id:string, user:User) => {
    return await axios.put(`${url}/${id}`,user);
}


export const deleteUser = async (id:string) => {
    return await axios.delete(`${url}/${id}`);
}