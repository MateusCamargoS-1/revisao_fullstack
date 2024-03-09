const api = axios.create({
    baseURL: 'https://revisao-fullstack-g691.onrender.com',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Token123'
    }
});