import {AiFillLinkedin as LinkedinIcon} from 'react-icons/ai';
import {AiOutlineWhatsApp as WhatsappIcon} from 'react-icons/ai';
import {AiFillInstagram as InstagramIcon} from 'react-icons/ai';

const Footer = () =>{
  return(
    <footer id='footer' className=" px-12 py-14 md:py-20  bg-psi-white" >
      <div className='psi-container  '>

        <div className='flex gap-8 flex-col md:flex-row md:items-center md:justify-between'>

          <p className="text-gray-500 text-center">Responsável técnico: Aline Leite - CRP 03/26769</p>

          <nav className="flex gap-8 justify-center">
            <a href='https://www.google.com.br' target='_blank' className='text-psi-purple-300 hover:bg-gray-100 p-3 shadow-md rounded-full border-2  transition-colors cursor-pointer border-gray-300' rel="noreferrer">
              <LinkedinIcon size={20} />
            </a>

            <a href='https://wa.me/5571991521058?text=Ol%C3%A1%2C+Aline%21+Gostaria+de+conversar+com+voc%C3%AA%21' target='_blank' className='text-psi-purple-300 hover:bg-gray-100 p-3 shadow-md rounded-full border-2  transition-colors cursor-pointer border-gray-300' rel="noreferrer">
              <WhatsappIcon size={20} />
            </a>

            <a href='https://www.instagram.com/alineleite.psi' target='_blank' className='text-psi-purple-300 hover:bg-gray-100 p-3 shadow-md rounded-full border-2  transition-colors cursor-pointer border-gray-300' rel="noreferrer">
              <InstagramIcon size={20} />
            </a>
          </nav>

        </div>

        <p className="text-gray-500 text-sm text-center md:text-start mt-8 md:mt-4">Copyright © 2023 Todos os direitos reservados</p>
      </div>
    </footer>
  );
};

export default Footer;
