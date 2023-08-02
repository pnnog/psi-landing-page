import { useState } from "react"

import sendEmail from "utils/sendEmail"

import Input from "./Input"
import TextArea from "./TextArea"
import { button } from "components/UI"

const Form = () => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const onSend = () => window.alert('Mensagem enviada com sucesso')
  const onFail = () => window.alert('Houve um erro. Tente novamente')
  const clearFields = () => {
    setName('')
    setPhone('')
    setEmail('')
    setMessage('')
  }
  
  const handleSubmit = (e) =>{
    e.preventDefault()
    
    const data ={
      name, 
      phone, 
      email, 
      message
    }

    sendEmail(data)
      .then((response)=> {
      clearFields()
      !!response ? onSend(): onFail()
    }) 
  }


  return(
    <form onSubmit={handleSubmit} className="bg-psi-gray p-12 md:rounded-md max-w-3xl mx-auto min-h-[400px flex flex-col items-center gap-1">
      <Input placeholder='Digite seu nome' value={name} setValue={setName}/>
      <Input placeholder={'Celular (Whatsapp)'} value={phone} setValue={setPhone}/>
      <Input placeholder={'Email'} type="email" value={email} setValue={setEmail} />
      <TextArea value={message} setValue={setMessage} />
      <button type='submit' className={button({size:'medium'})}> Enviar</button>
    </form>
    )
}

export default Form