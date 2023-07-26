import bannerImage from "assets/images/banner.svg"
import Button from "components/Button"
import Grid from "components/Grid"
import SectionImage from "components/SectionImage"
import Title from "components/Tittle"

const Banner  = () =>{
  return(

    <div id="banner" className='bg-psi-blue py-28 px-6 md:px-12 lg:px-24 min-h-[600px]'>
        <Grid>
          <div id="banner-texts">
              <Title size="large">Terapia online ao seu alcance  </Title>
              <p className=' lg:text-2xl text-psi-black font-semibold text-justify mb-12 '> Agora você pode conversar com um psicólogo online a qualquer hora com sigilo e segurança através da nossa plataforma de telepsicologia </p>
              <Button>Agende já sua consulta</Button>
          </div>

          <div id="banner-image" className="hidden lg:block lg:w-full ">
            <SectionImage src={bannerImage} alt='Imagem do Banner'/>
          </div>
        </Grid>
    </div>


  )
}

export default Banner