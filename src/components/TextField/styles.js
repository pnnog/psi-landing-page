import { tv } from 'tailwind-variants';

export const textFieldStyles = tv({
  slots:{
    wrapper:'',
  },
  variants:{
    fullWidth: {
      true: {
        wrapper: 'w-full'
      }
    }
  }
});
  
  
export const inputStyles =  tv({
  base:'bg-zinc-50 p-4 h-16 rounded-md outline-none border-2 border-gray-200 focus:bg-gray-100 placeholder:text-gray-500 hover:bg-zinc-100 ',

  variants:{
    error:{
      true: 'border-red-500'
    },
    fullWidth: {
      true:'w-full'
    },
    
    multiline:{
      true: 'min-h-16 h-auto'
    }
  }
});

  
export const helperTextStyles =  tv({
  base:'text-xs text-zinc-800',
  variants:{
    error: {
      true:' text-red-500'
    },
    margins:{
      true:'ms-5 mt-1'
    }
  }
});
  