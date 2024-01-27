import { buttonStyles } from './styles';

export const Button = ({children, size='medium', className, fullWidth, ...props}) => {
  return (
    <button 
      className={buttonStyles({size, fullWidth, className})}
      {...props}>
      {children}
    </button>
  );
};
