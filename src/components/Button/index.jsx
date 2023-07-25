const Button = ({children, outline}) => {
  return(
    <button className={`psi-button ${!!outline &&  'bg-transparent border-2 border-black' }`}>
      {children}
    </button>
  )
}

export default Button