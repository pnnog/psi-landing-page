import { GoMoveToTop as ScrollIcon} from 'react-icons/go'
import { tv } from 'tailwind-variants'



const scrollToTop = tv({
  slots:{
    base:'fixed w-[46px] p-3 border-2 border-emerald-500 shadow-xl rounded-full cursor-pointer bottom-14 right-10 md:right-20 bg-gray-600 hover:bg-psi-purple-300 hover:-translate-y-2 opacity-30 hover:opacity-100 transition-transform',

    icon:'text-white w-full h-full'
  }
})

const goToTop = (e) =>{
  e.preventDefault()
  window.scrollTo({
      top:0,
    })
}


const {base, icon} =  scrollToTop()

const ScrollToTop = () =>{
  return (
    <div className={base()} onClick={goToTop}>
      <ScrollIcon className={icon()} size={18}  />
    </div>
  )  
}

export default ScrollToTop