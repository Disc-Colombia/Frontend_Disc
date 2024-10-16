import axios from 'axios';
import type { EmailProps } from '../type/type';
import ReCAPTCHA from 'react-google-recaptcha';

const dataEmail = async (data: EmailProps, recaptchaRef: React.MutableRefObject<ReCAPTCHA | null> ) => {
    //console.log("Datos enviados", data)
    try {
        const response = await axios.post(
            `${import.meta.env['VITE_API_URL']}/send-email`,{
            data,
            token: recaptchaRef, 
            },
            {
                headers: {
                    "Content-Type":"application/json"
                }
                
            },
            
            
        );
        return response.data;
    } catch (error) {
        console.error('Error sending data:', error);
        throw error;

    }
};

export{dataEmail}