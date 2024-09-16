import axios from 'axios';
import type { EmailProps } from '../type/type';

const dataEmail = async (data:EmailProps) => {
    console.log("Datos enviados", data)
    console.log("url del backend", `${import.meta.env.VITE_API_URL}`)
    console.log("api site", `${import.meta.env.VITE_APP_SITE_KEY}`)

    try {
        const response = await axios.post(
            `${import.meta.env.VITE_API_URL}/send-email`,
            data,
            {
                headers: {
                    "Content-Type":"application/json"
                }
            }
        );
        return response.data;
    } catch (error) {
        console.error('Error sending data:', error);
        throw error;

    }
};

export{dataEmail}