import axios from 'axios';
const baseUrl = '/api/test_headers';

export const genericDataService = {
    header: async (name) => {
        const response = await axios.get(baseUrl, {params: {name: name}});
        return response.data;
    },
    save: async (data) => {
        const response = await axios.post(baseUrl, data);
        return response.data;
    }
}