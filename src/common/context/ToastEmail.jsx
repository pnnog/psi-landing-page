import { createContext, useContext, useState } from "react"
import sendEmail from "utils/sendEmail"

const ToastEmailContext = createContext({})

export const ToastEmailContextProvider = ({children}) =>{
  const [toast, setToast] = useState({status:'', visible:false})


  return(
    <ToastEmailContext.Provider value={{toast, setToast}}>
      {children}
    </ToastEmailContext.Provider>
  )
}


export const useToastEmailContext = () =>{
  const {toast, setToast} = useContext(ToastEmailContext)


  const sendEmailToClient = (data) =>{
    sendEmail(data)
      .then((r)=> setToast({status: 'success', visible:true}))
      .catch((e)=> setToast({status:'fail', visible:true}))
  }


  if(!!toast.visible){
    setTimeout(()=>{
      setToast((prev)=> ({...prev, visible:false}))
    },3000)
  }


  return{
    toast,
    setToast,
    sendEmailToClient
  }

}
