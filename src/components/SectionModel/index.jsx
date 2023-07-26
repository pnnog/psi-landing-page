const SectionModel = ({color='bg-psi-blue', children, id}) =>{
    return (
        <section id={id} className={`${color}  py-28 px-6 md:px-12 lg:px-24 min-h-[300]`}>
            {children}   
        </section>
    )
}

export default SectionModel