const SectionModel = ({children, id, nospace, color='blue'}) =>{
    return (
        <section id={id} className={`
            ${color=='blue'? 'bg-psi-blue':''}
            ${color=='purple'? 'bg-psi-purple-300':''}
            ${color=='gray'? 'bg-psi-gray':''}
            ${nospace? '':'px-12'}
            md:px-12 lg:px-24 py-14 md:py-28 min-h-[300]`}>
            <div className='max-w-7xl mx-auto'>
                {children} 
            </div>  
        </section>
    )
}

export default SectionModel