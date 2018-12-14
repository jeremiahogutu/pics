import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID d360af006d0de07f9ac60f8c007fff544e1cba177ac64cb3c97c55d5e2520cab'
    }
});