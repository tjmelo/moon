declare var require: any
const axios: any = require('axios');

export const api: Promise<Response> = axios.create({
    baseURL: 'https://api.genderize.io',
});