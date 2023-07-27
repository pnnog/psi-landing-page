const Title = ({color ='purple', children, size ='normal', center, end}) =>{
    return (
    
        <h1 className = {`
        
                ${color=='purple'&& 'text-psi-purple-300'}  
                ${color=='white'&& 'text-psi-white'}  
                ${size === 'normal'? 'psi-title' :''}
                ${size === 'medium'? 'title-md' :''}
                ${size === 'large'? 'title-lg' :''}
                ${!!center && 'text-center'}
                ${!!end && 'text-end'}
        `}>
            {children}
        </h1>
    )

}


export default Title