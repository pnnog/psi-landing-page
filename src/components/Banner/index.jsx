import {  paragraph, title } from 'components/UI';
import { buttonStyles } from 'components/UI/Button';

const Banner  = () =>{
  return (
    <div id="banner" className="banner banner-highlight">
      <div className="psi-container mt-[94px]">
        <div className="mb-12 md:mb-16">
          <h1 className={title({color:'white'})}> Terapia online ao seu alcance </h1>
          <p className={paragraph({size:'lg', color:'white'})}>
             Agora você pode conversar com um psicólogo online a qualquer hora com sigilo e segurança através da nossa plataforma de telepsicologia 
          </p>
        </div>
        <div className="flex justify-end">
          <a className = {buttonStyles({size:'large',})}href="#formulario">Agende já sua consulta</a>
        </div>

      </div> 
    </div>
  );
};

export default Banner;
