import {BsWhatsapp as WhatsAppIcon} from 'react-icons/bs'
import { tv } from 'tailwind-variants'



const whatsAppLink = tv({
  slots:{
    base:'fixed w-[50px] p-3 border-2 border-white shadow-xl rounded-full cursor-pointer bottom-14 right-10 md:right-20 bg-green-500  hover:-translate-y-2  transition-transform',

    icon:'text-white w-full h-full'
  }
})




const {base, icon} =  whatsAppLink()

const WhatsAppLink = () =>{
  return (
    <a className={base()} href='https://wa.me/5571991521058?text=Ol%C3%A1%2C+Aline%21+Gostaria+de+conversar+com+voc%C3%AA%21' target='_blank'>
      <WhatsAppIcon className={icon()} size={18}  />
    </a>
  )  
}

export default WhatsAppLink