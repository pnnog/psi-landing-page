import {tv} from 'tailwind-variants'

const section = tv({
    base: 'px-12 py-14 md:py-20 min-h-[200px]',
    variants:{
        background: {
            purple:'bg-psi-purple-300',
            blue: 'bg-psi-blue',
            white: 'bg-psi-white',
            gray: 'bg-psi-gray',
        },
        space:{
            true:'px-12',
            false:'px-0'
        },
        
    },
    defaultVariants:{
        background:'purple',
        space:true
    }
})

const SectionModel = ({children, id, space, background}) =>{
    return (
        <section  id={id} className={`${section({background, space})}  `}>
            <div className='psi-container z-20 '>
                {children} 
            </div>  
        </section>

    )
}

export default SectionModel