import { button, paragraph, title } from "components/UI"

const Banner  = () =>{
  return (
    <div id="banner" className="banner banner-highlight">
      <div className="psi-container mt-[94px] flex flex-col gap-12 md:gap-16">
        <div>
          <h1 className={title({color:'white'})}> Terapia online ao seu alcance </h1>
          <p className={paragraph({size:'lg',color:'white'})}>
             Agora você pode conversar com um psicólogo online a qualquer hora com sigilo e segurança através da nossa plataforma de telepsicologia 
          </p>
        </div>
        <a className = {button({size:'large'})}href="#formulario">Agende já sua consulta</a>
      </div> 
    </div>
  )
}

export default Banner