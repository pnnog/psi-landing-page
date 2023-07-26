const Button = ({children, outline=false, fullWidth=false}) => {
  return(
      <button className={`
        psi-button
        ${!!outline? 'bg-transparent border-2 border-black':''}
        ${!!fullWidth? 'w-full' : 'w-fit'}
      `}>
      {children}
      </button>
    
  )
}

export default Button