import axios from "axios"

export const genderApi = axios.create({
    baseURL: 'https://api.genderize.io',
})