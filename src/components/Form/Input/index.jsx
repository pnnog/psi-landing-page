const Input = ({type='text', placeholder}) =>{

    return (
        <input type={type} required={true}  placeholder={placeholder}  className="psi-input"/>
    )
}

export default Input