import Input from "./Input"
import TextArea from "./TextArea"
import { button } from "components/UI"
import { useToastEmailContext } from "common/context/ToastEmail"

const Form = () => {

  const {trySendEmailToClient} = useToastEmailContext()

  const handleSubmit = async (e) =>{
    e.preventDefault()
    const data={
      name: e.target.elements.name.value,
      phone: e.target.elements.phone.value,
      email: e.target.elements.email.value,
      message: e.target.elements.message.value
    }

    await trySendEmailToClient(data)
    const inputs = document.querySelectorAll('input')
    document.querySelector('textArea').value=''
    inputs.forEach(input=> input.value='')
  }

  return(
    <form onSubmit={handleSubmit} className="bg-psi-gray p-12 md:rounded-md max-w-3xl mx-auto min-h-[400px flex flex-col items-center gap-1">
      <Input placeholder='Nome' name='name'/>
      <Input minLength={8} placeholder='Telefone (WhatsApp)' name='phone'  />
      <Input placeholder='Email'type="email" name='email' />
      <TextArea  minLength={3}/>
      <button type='submit' className={button({size:'medium'})}> Enviar</button>
    </form>
    )
}

export default Form