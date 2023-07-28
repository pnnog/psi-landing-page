import bannerImage from "assets/images/banner.svg"
import Button from "components/Button"
import SectionImage from "components/SectionImage"
import SectionModel from "components/SectionModel"
import Title from "components/Tittle"

const Banner  = () =>{
  return(

      <SectionModel id='banner' background="bg-psi-blue">
        <div className="psi-grid">
          <div id="banner-texts">
              <Title size="large">Terapia online ao seu alcance  </Title>
              <p className=' text-base lg:text-xl text-psi-black font-semibold text-justify mb-12 '> Agora você pode conversar com um psicólogo online a qualquer hora com sigilo e segurança através da nossa plataforma de telepsicologia </p>
              <Button size='lg'>Agende já sua consulta</Button>
          </div>
            <SectionImage src={bannerImage} alt='Imagem do Banner'/>
            </div>
      </SectionModel>
  )
}

export default Banner