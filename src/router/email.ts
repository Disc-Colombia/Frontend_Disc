import axios from 'axios';
import type { EmailProps } from '../type/type';

const dataEmail = async (data:EmailProps) => {
    //console.log("Datos enviados", data)
    try {
        const response = await axios.post(
            `${import.meta.env['VITE_API_URL']}/send-email`,
            data,
            {
                headers: {
                    "Content-Type":"application/json"
                }
                
            },
            body: JSON.stringify({
                token: recaptchaRef.current?.getValue(),
                data,
              })
            
        );
        return response.data;
    } catch (error) {
        console.error('Error sending data:', error);
        throw error;

    }
};

export{dataEmail}