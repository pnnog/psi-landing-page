import emailJs from '@emailjs/browser'

const sendEmail = async (data) =>{
  const tempĺateParams = {
    from_name:data.name,
    message:data.message,
    email:data.email,
    phone:data.phone
  }

  // const SERVICE_ID = 'service_zfbn1pq'
  const SERVICE_ID_FAIL = 'service_zfbn1p'
  const TEMPLATE_ID = 'template_jiqejbs'
  const PUBLIC_KEY = 'I81yQ5EHazrH2NEad'

  try{
    const response = await emailJs.send(SERVICE_ID_FAIL, TEMPLATE_ID, tempĺateParams, PUBLIC_KEY)
    return 'ok'
  }

  catch (err){
    console.log('Erro ao enviar email', err)
    return ' '
  }

}
  

export default sendEmail