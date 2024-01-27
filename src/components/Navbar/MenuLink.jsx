import { tv } from 'tailwind-variants';

const menuLink = tv({
  base:'menu-link',
  variants:{
    highlight:{
      true:'menu-link-highlight',
      false:'menu-link-border'
    }
  },  
});


const MenuLink = ({highlight=false, sectionID, children, setIsOpen}) =>{
  const handleClick = () =>{
    !!setIsOpen && setIsOpen(false);
  };
  
  return <a 
    href={`#${sectionID}`} 
    className={menuLink({highlight})} 
    onClick={handleClick} 
  >
    {children}
  </a>;
    
};

export default MenuLink; 


