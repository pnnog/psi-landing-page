const SectionImage = ({src, alt}) =>{
    return (
        <img id="section-image" src={src} alt={alt} className="rounded-xl max-h-[600px] shadow-md hover:scale-105 transition-transform duration-700 lg:justify-self-end" />
    )
}

export default SectionImage