import { useToastEmailContext } from 'common/context/ToastEmail'
import {AiOutlineCheckCircle as CheckIcon} from 'react-icons/ai'
import {MdErrorOutline as ErrorIcon} from 'react-icons/md'
import { tv } from 'tailwind-variants'

const toast =  tv({
  base:'psi-toast',

  variants:{
    visible:{
      true:'translate-y-28',
    },

    status:{
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


const Toast = () =>{
  const {toast: toastInfo } = useToastEmailContext()
  const {status, visible} = toastInfo

  const message = messages[status || 'fail']

  return(
    <div aria-hidden={!visible} className={toast({visible, status})}>
      <div>
        {message.icon}
      </div>

      <div className='flex-1 '>
        <h5 className="text-sm md:text-base mb-1 font-bold"> {message.title} </h5>
        <p className="text-xs md:text-sm text-gray font-semibold ">{message.text}</p>
      </div>
    </div>
  )
}


export default Toast