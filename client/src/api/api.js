import axios from "axios";

const url = "http://localhost:3500/users/";

export const getUserFunc = async () => {
    const response = await axios.get(url);
    return response.data;
};


export const setUseFunc = async (user) => {
    const response = await axios.post(url, user);
    return response.data;
};