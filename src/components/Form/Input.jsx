const Input = ({type='text', placeholder, value, setValue}) =>{

    return (
        <input type={type} required={true}  placeholder={placeholder}  className="psi-input" value={value} onChange={(e)=> setValue(e.target.value)}/>
    )
}

export default Input