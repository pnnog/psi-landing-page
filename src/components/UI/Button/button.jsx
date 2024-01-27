import {tv} from 'tailwind-variants'

export const buttonStyles = tv({
    base: 'w-auto px-3 first-letter:cursor-pointer uppercase min-w-[200px] flex items-center text-center justify-center rounded-3xl bg-psi-purple-200 text-psi-white font-bold transition-transform hover:scale-105',
  
    variants:{
      size:{
        large: 'py-5 px-5 text-base',
        medium:' py-2 text-base '
      },
      fullWidth:{
        true:'w-full'
      }
    },
    defaultVariants:{
      size:'medium'
    }
  })

export const Button = ({children, size='medium', className, fullWidth, ...props}) => {
    return (
        <button 
        className={buttonStyles({size, fullWidth, className})}
        {...props}>
            {children}
        </button>
    )
}