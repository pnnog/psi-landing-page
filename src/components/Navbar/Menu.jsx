import { tv } from 'tailwind-variants';
import {AiOutlineClose as CloseMenuIcon} from 'react-icons/ai';

import MenuLink from './MenuLink';

const menu = tv({
  base:'menu-mobile',
  variants:{
    isOpen:{
      false:'opacity-0 pointer-events-none',
      true:'opacity-0 opacity-100'
    }
  },
});

const Menu = ({isOpen, setIsOpen}) =>{
  return(
    <menu className={menu({isOpen})} aria-hidden={!isOpen}>
   
      <div className='self-end cursor-pointer'>
        <CloseMenuIcon size={35} className='text-psi-white bg-psi-purple-100 rounded-xl  shadow-lg  transition-all  hover:bg-psi-purple-200 p-1' onClick={()=> setIsOpen(false)}/>
      </div>

      <div className={`flex flex-col gap-8 transition-all duration-700 ${isOpen?'translate-y-0 ':'translate-y-40'}`}>
        <MenuLink sectionID='porque-fazer-terapia' setIsOpen={setIsOpen}>Por que fazer terapia</MenuLink>
        <MenuLink sectionID='tipos-de-atendimento' setIsOpen={setIsOpen}>Tipos de atendimento</MenuLink>
        <MenuLink sectionID='sobre' setIsOpen={setIsOpen}>Sobre</MenuLink>
        <MenuLink sectionID='depoimentos' setIsOpen={setIsOpen}>Depoimentos</MenuLink>
        <MenuLink sectionID='formulario' highlight setIsOpen={setIsOpen}>Inicie sua jornada</MenuLink>
      </div>
    </menu>
  );
};

export default Menu;
