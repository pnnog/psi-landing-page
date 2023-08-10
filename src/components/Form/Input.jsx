const Input = ({type='text', placeholder,  ...props}) =>{
    return <input {...props}  type={type} required={true}  placeholder={placeholder}  className="psi-input" />
    
}

export default Input