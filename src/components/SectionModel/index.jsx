const SectionModel = ({children, id, nospace, background='bg-psi-purple-300'}) =>{
    return (
        <section id={id} className={`psi-section-model ${background} ${nospace? 'px-0':'px-12'} `}>
            <div className='max-w-7xl mx-auto'>
                {children} 
            </div>  
        </section>
    )
}

export default SectionModel