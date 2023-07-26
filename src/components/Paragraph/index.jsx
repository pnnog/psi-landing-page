const Paragraph = ({color ='black', children, space='mb-4'}) =>{
    return <p className={`text-base lg:text-lg text-psi-${color} font-semibold text-justify ${space}`}> {children}</p>
}

export default Paragraph