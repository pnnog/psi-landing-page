import emailJs from '@emailjs/browser';
import { getEnv } from 'utils/env';

export const sendEmail = async ({name='', message='', email='', phone=''}) =>{
  const tempĺatePrams = {
    from_name:name,
    message:message,
    email:email,
    phone:phone
  };

  try{
    const serviceID = getEnv('serviceID');
    const templateID = getEnv('templateID');
    const publicKey = getEnv('publicKey');
    const response = await emailJs.send(serviceID, templateID, tempĺatePrams, publicKey);
    return response;
  }

  catch (error){
    console.error(error);
    throw new Error('Não foi possível enviar o e-mail');
  }

};
  
