import axios from 'axios';

const API_URL = 'http://127.0.0.1:27017/api';

export const registerUser = async (userData) => {
    return await axios.post(`${API_URL}/register`, userData);
};

export const getAllusers = async () => {
    return await axios.get(`${API_URL}/users`);
};