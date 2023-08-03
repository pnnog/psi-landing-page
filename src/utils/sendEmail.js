import emailJs from '@emailjs/browser'
import { getEnv } from './env'

const sendEmail = async (data) =>{
  const tempĺatePrams = {
    from_name:data.name,
    message:data.message,
    email:data.email,
    phone:data.phone
  }

  try{

    const serviceID = getEnv('serviceID')
    const templateID = getEnv('templateID')
    const publicKey = getEnv('publicKey')
    
    const response = await emailJs.send(serviceID, templateID, tempĺatePrams, publicKey)
    return 'ok'
  }

  catch (err){
    console.log('Erro ao enviar email', err)
    return ' '
  }

}
  

export default sendEmail