const Paragraph = ({color ='black', children, space='mb-4'}) =>{
    return (
    <p className ={`
        text-base lg:text-md
        font-semibold text-justify
        ${color=='black'&& 'text-psi-black'}
        ${color=='white'&& 'text-psi-white'}
        ${space}`}>
            {children}
    </p>)
}

export default Paragraph