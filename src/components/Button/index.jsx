const Button = ({children, size='md', onClick}) => {
  return(
      <a className={` psi-button ${size === 'lg' ? 'w-[280px] py-5 md:py-6 text-lg md:text-xl':''} ${size === 'md' ? 'w-[200px] py-4 md:py-4 text-md lg:text-lg':''}`} 
        onClick={onClick}>
      {children}
      </a>
    
  )
}

export default Button