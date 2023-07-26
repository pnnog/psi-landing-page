const Title = ({color ='text-psi-purple-300', children, size ='normal', align}) =>{
    return (
    
        <h1 className = {`
                ${color}  
                ${size === 'normal'? 'title' :''}
                ${size === 'medium'? 'title-md' :''}
                ${size === 'large'? 'title-lg' :''}
                ${!!align && align}
        `}>
            {children}
        </h1>
    )

}


export default Title