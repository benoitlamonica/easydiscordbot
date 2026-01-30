import axios from 'axios';
import { moduleData } from '@/data';

const API_TOKEN = process.env.API_TOKEN;

interface CoffeeItem {
    title: string;
    description: string;
}

class ApiHandler {

    static getApiExemple = async (): Promise<CoffeeItem[]> => {
        const data = (await axios.get('https://api.sampleapis.com/coffee/hot')).data;
        return data;
    }

}

export { ApiHandler };
