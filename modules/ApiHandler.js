const { default: axios } = require("axios");
const dataModule = require('./data');
const API_TOKEN = process.env.API_TOKEN;

class ApiHandler {

    static getApiExemple = async () => {
        let data = (await axios.get('https://api.sampleapis.com/coffee/hot')).data;
        return data;
    }

}

exports.ApiHandler = ApiHandler;