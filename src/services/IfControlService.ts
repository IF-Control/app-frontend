import axios from "axios";

const IfControlService = axios.create({
    //HEROKU
    baseURL: 'https://ifcontrol.com/api/v1/'
    
    //LOCAL:
    // baseURL: 'http://127.0.0.1:3333/'
});

export { IfControlService };