import axios from 'axios';

axios.defaults.baseURL = `https://power-pulse-back.onrender.com/`;


export const fetchFilters = async () => {
    const response = await axios.get(`exercises`);
    return response.data;

}

export const fetchExercises = async (category, filter) => {
    const response = await axios.get(`exercises/filters?filter=${category}&name=${filter}`);
    return response.data;
}