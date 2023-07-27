import thinking from 'assets/icons/thinking.png' 
import handshake from 'assets/icons/handshake.png' 
import anxiety from 'assets/icons/anxiety.png' 
import health from 'assets/icons/health.png' 
import depression from 'assets/icons/depression.png' 
import relationship from 'assets/icons/relationship.png' 

const icons = [
    {thinking},
    {handshake},
    {anxiety},
    {health},
    {depression},
    {relationship}
]

const getIcon = (name)=>{
    const icon =  icons.find(icon=> icon[name])
    return icon[name]
}

const Card = ({icon, title, text}) =>{
   

    return (
        <>
            <img src={getIcon(icon)} alt={title}className="w-[64px] mb-4 mx-auto" />

            <h4 className="text-psi-purple-300 mb-10 text-center uppercase relative psi-cosmetic font-bold transition-all cursor-default">{title}</h4>

            <p className="text-psi-black text-center ">{text}</p>
        </>
    )
}

export default Card