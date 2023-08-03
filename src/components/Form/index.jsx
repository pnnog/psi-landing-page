import { useState } from "react"

import sendEmail from "utils/sendEmail"

import Input from "./Input"
import TextArea from "./TextArea"
import { button } from "components/UI"

const Form = ({setToastType, setToastIsVisible}) => {

  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')


  const onSend = () => {
    setToastType('success')
    setToastIsVisible(true)

    setTimeout(()=>{
      setToastIsVisible(false)
    }, 3000)
  }

  const onFail = () => {
    setToastType('fail')
    setToastIsVisible(true)

    setTimeout(()=>{
      setToastIsVisible(false)
    }, 3000)
  }

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
      <Input placeholder='Nome' value={name} setValue={setName}/>
      <Input minLength={8} placeholder={'Telefone (WhatsApp)'} value={phone} setValue={setPhone} />
      <Input placeholder={'Email'} type="email" value={email} setValue={setEmail} />
      <TextArea value={message} setValue={setMessage} minLength={3}/>
      <button type='submit' className={button({size:'medium'})}> Enviar</button>
    </form>
    )
}

export default Form