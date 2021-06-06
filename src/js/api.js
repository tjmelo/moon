"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.api = void 0;
const axios = require('axios');
exports.api = axios.create({
    // Support base URL for research..
    baseURL: 'https://api.genderize.io',
});
