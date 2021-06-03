declare var require: any
const axios: any = require('axios');

export const api: Promise<Response> = axios.create({
    // Support base URL for research..
    baseURL: 'https://api.genderize.io',
});