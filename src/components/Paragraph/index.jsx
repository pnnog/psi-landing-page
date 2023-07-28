const Paragraph = ({color ='text-psi-black', children, space='mb-0', className}) =>{
    return (
    <p className ={`psi-paragraph ${color} ${space} ${className||''} `}>
        {children}
    </p>)
}

export default Paragraph