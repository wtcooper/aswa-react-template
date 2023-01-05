import axios from 'axios';
const baseUrl = '/api/users';

export const userService = {
    getUserData: async () => {
        const response = await axios.get(baseUrl);
        // const response = await axios.get(baseUrl, {params: {name: name}});
        // const response = await axios.post(baseUrl, {test_body: {name: name}}, {params: {name: name}});
        return response.data;
    },
    // save: async (data) => {
    //     const response = await axios.post(baseUrl, data);
    //     return response.data;
    // }
}