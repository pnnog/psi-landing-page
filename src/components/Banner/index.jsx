import bannerImage from "assets/images/banner.svg"
import Button from "components/Button"

const Banner  = () =>{
  return(


  <div className='bg-psi-blue py-24 lg:py-0'>

    <div className="grid grid-cols-1 items-center lg:grid-cols-2">
      <div className='flex flex-col gap-8 px-24 lg:px-0 lg:pl-24 ' >
        <h1 className='text-3xl text-psi-purple-300 font-bold text'>Psicologia online ao seu alcance</h1>

        <p className='text-base text-psi-black font-semibold'> Agora você pode conversar com um psicólogo online a qualquer hora com sigilo e segurança através da nossa plataforma de telepsicologia</p>

        <div className="w-fit">
          <Button> Agende já sua consulta</Button>
        </div>
      </div>

      <div className=" h-[400px] md:h-[800px] w-full">
        <img src={bannerImage} alt="Imagem do Banner" className="w-full h-full" />
      </div>

    </div>


  </div>


  )
}

export default Banner