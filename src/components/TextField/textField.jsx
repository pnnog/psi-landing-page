import { forwardRef } from 'react';
import { helperTextStyles, inputStyles,  textFieldStyles } from './styles';

export const TextField = forwardRef(({  error = false, helperText='', fullWidth=false, multiline =false, rows, ...props}, ref) =>{
  const {wrapper} = textFieldStyles({fullWidth});

  return (
    <div className={wrapper()}>

      {!multiline && (
            <input 
            ref={ref}
            className={inputStyles({error, fullWidth})}
            {...props}
          />
      )}
  
    {multiline && (
      <textarea 
        ref={ref} 
        rows={rows}   
        className={inputStyles({error, fullWidth, multiline})} 
        {...props} 
        /> 
    )}
     

      {!!helperText && (<p className={helperTextStyles({error, margins:true})}> {helperText}</p>)}
    </div>
  );
})
