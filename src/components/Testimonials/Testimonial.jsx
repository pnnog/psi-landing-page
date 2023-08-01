import ana from 'assets/images/ana.jpg'
import amanda from 'assets/images/amanda.jpg'
import raelly from 'assets/images/raelly.jpg'

const pics=[
  {ana}, 
  {amanda },
  {raelly}
]


const findPic = (name) =>{
  let firstName = name.split(' ')[0]
  const lowerName =  firstName.toLowerCase()
  const pic = pics.find(pic => !!pic[lowerName])

  return pic[lowerName]

}


const Testimonial = ({name, text}) =>{
  const imgSrc = findPic(name) 

  return(  
    <li className="p-4 shadow-lg border-2 border-gray-200 rounded-lg max-w-[350px] min-h-[182px]">
      <article>

      <div className="flex items-center gap-4 mb-4">
        <img className="w-[50px] h-[50px] rounded-full border-2 border-psi-purple-200" src={imgSrc} alt={name} />
        <h4 className="text-psi-black w-fit relative title-cosmetic">{name}</h4>
      </div>
    
      <p className="text-sm font-normal text-gray-400 italic text-justify"> "{text}" </p>
      </article>

    </li>

  )
}

export default Testimonial