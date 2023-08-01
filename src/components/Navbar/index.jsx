import { useEffect, useState } from 'react'

import Nav from './Nav'
import Menu from './Menu'

const Navbar = () =>{
    const [isOpen, setIsOpen] = useState(false)
   
    useEffect(()=>{
			const checkMaxWidth = () => {
					const maxWidth = 900
					const width = window.innerWidth
					width > maxWidth && setIsOpen(false)
			}

			window.addEventListener('resize', checkMaxWidth)
			return () => window.removeEventListener('resize',checkMaxWidth)
        
    },[])
      
    return(
			<>
				<Nav setIsOpen={setIsOpen} />
				<Menu setIsOpen={setIsOpen} isOpen={isOpen}/>
			</>
    )
}

export default Navbar