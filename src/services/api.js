import axios from "axios";

const api = axios.create({
    baseURL: 'https://ifsp-control.herokuapp.com/'
});

export { api };