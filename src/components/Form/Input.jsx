const Input = ({type='text', placeholder, value, setValue,ref,  ...props}) =>{

    return (
        <input {...props}  type={type} required={true}  placeholder={placeholder}  className="psi-input" value={value} onChange={(e)=> setValue(e.target.value) }/>
    )
}

export default Input