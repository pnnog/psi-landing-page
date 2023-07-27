const SectionImage = ({src, alt}) =>{
    return (
        <img id="section-image" src={src} alt={alt} className=" max-h-[600px] md:shadow-md hover:scale-105 transition-transform duration-700 lg:justify-self-end rounded-full" />
    )
}

export default SectionImage