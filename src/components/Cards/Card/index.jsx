
const Card = ({icon, title, text}) =>{

    return (
        <>
            <img src={`assets/${icon}`} alt={title}className="w-[64px] mb-4 mx-auto" />

            <h4 className="text-psi-purple-300 mb-10 text-center uppercase relative psi-cosmetic font-bold transition-all cursor-default">{title}</h4>

            <p className="text-psi-black text-center ">{text}</p>
        </>
    )
}

export default Card