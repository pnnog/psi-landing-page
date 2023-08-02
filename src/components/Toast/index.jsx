import {AiOutlineCheckCircle as CheckIcon} from 'react-icons/ai'
import {MdErrorOutline as ErrorIcon} from 'react-icons/md'
import { tv } from 'tailwind-variants'


const toast =  tv({
  base:'psi-toast',

  variants:{
    isVisible:{
      true:'translate-y-28',
    },

    type:{
      success:'bg-emerald-400',
      fail:'bg-red-500 '
    }
  }
})

const messages = {
  success:{
    title:'Mensagem enviada com sucesso',
    text:'Já recebi sua mensagem e logo entro em contato, certo?',
    icon: <CheckIcon size={24} />
  },

  fail:{
    title:'Parece que houve um problema',
    text:'Tente novamente, por favor.',
    icon: <ErrorIcon size={24} />

  }
}


const Toast = ({type, isVisible}) =>{
  const message = messages[type]

  return(
    <div className={toast({isVisible, type})}>

      <div>
        {message.icon}
      </div>

      <div className='flex-1 '>
        <h5 className="text-sm md:text-base mb-1 font-bold"> {message.title} </h5>
        <p className="text-xs text-gray font-semibold ">{message.text}</p>
      </div>
    </div>
  )
}


export default Toast