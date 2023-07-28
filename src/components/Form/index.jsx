import Button from "components/Button"
import Input from "./Input"
import TextArea from "./TextArea"

const Form = () => {
    return(
        <form className="bg-psi-gray p-12 md:rounded-md max-w-3xl mx-auto min-h-[400px flex flex-col items-center gap-1 ">
          <Input placeholder='Digite seu nome'/>
          <Input placeholder={'Celular (Whatsapp)'}/>
          <Input placeholder={'Email'} type="email" />
          <TextArea  />

          <Button centered> Enviar</Button>
        </form>
    )
}

export default Form