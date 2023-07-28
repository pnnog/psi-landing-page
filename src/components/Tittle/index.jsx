const Title = ({color ='purple-300', children, align}) =>{
    return (

        <h1 className = {`psi-title psi-mb-sm ${align || ''} text-psi-${color} `}>
            {children}
        </h1>
    )

}


export default Title