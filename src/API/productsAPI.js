import axios from 'axios';
import toast from 'react-hot-toast';

axios.defaults.baseURL = `
 https://power-pulse-back.onrender.com/`;
 
 export async function fetchProducts(query, category, recommended) {
    try {
      const queryParams = [];
      if (recommended && recommended !== 'all') {
        queryParams.push(`recommended=${recommended}`);
      }
      if (category && category !== 'all') {
        queryParams.push(`category=${category}`);
      }
      if (query && query.trim() !== '') {
        queryParams.push(`keyword=${query}`);
      }
      const queryString = queryParams.join('&');
      const response = await axios.get(`products/filter?${queryString}`);
      if (response.data?.products) {
        return response.data?.products;
      }
      return response.data;
    } catch (e) {
      toast.error('Oops, something went wrong. Try reloading page!');
      return null;
    }
  }