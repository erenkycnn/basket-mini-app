import axios from 'axios';

const API_URL = process.env.VUE_APP_API_URL;

const apiService = {
  async getProducts() {
    return await axios.get(`${API_URL}/listing`);
  },

  async addToCart(id, amount) {
    return await axios.post(`${API_URL}/order`, [{ id, amount }]);
  },
};

export default apiService;
