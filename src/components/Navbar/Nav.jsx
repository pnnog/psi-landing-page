import Logo from "./Logo"
import MenuLink from "./MenuLink"
import {AiOutlineMenu as OpenMenuIcon} from 'react-icons/ai'


const Nav = ({setIsOpen}) =>{
  return (
    <nav className={`bg-psi-white opacity-90 fixed right-0 left-0 z-10 px-12 py-3 `}>
      <div className='psi-container flex items-center justify-between gap-8'>
  
        <a className="w-fit" href="#banner">
          <Logo /> 
        </a>
        
        <div className='hidden 2md:flex gap-8 items-center'>
          <MenuLink sectionID='porque-fazer-terapia' >Por que fazer terapia</MenuLink>
          <MenuLink sectionID='tipos-de-atendimento' >Tipos de atendimento</MenuLink>
          <MenuLink sectionID='sobre' >Sobre</MenuLink>
          <MenuLink sectionID='depoimentos' >Depoimentos</MenuLink>
          <MenuLink sectionID='formulario' highlight >Inicie sua jornada</MenuLink>
        </div>

        <OpenMenuIcon size={25} className='text-psi-black cursor-pointer 2md:hidden' onClick={()=> setIsOpen(true)}/>
      </div>
    </nav>
  )
}

export default Nav