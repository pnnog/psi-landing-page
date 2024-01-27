import {tv} from 'tailwind-variants';

export const grid = tv ({
  base:'grid grid-cols-1 ',
  variants:{
    type:{
      section:'md:grid-cols-2 gap-16 md:gap-24 justify-items-center items-center',
      cards:'sm:grid-cols-2 lg:grid-cols-3 gap-16 sm:gap-32 px-12 sm:px-0  py-4 lg:py-8'
    }
  }
});


export const paragraph = tv({
  base:' text-sm md:text-base text-psi-black text-justify font-normal   ',
  variants:{
    color:{
      white: 'text-psi-white'
    },
    
    align:{
      center:'text-center'
    },

    size:{
      sm:'md:text-sm',
      lg:'text-base font-semibold lg:text-lg xl:text-xl '
    }
  },
});


export const title = tv({
  base:'text-3xl lg:text-4xl font-bold text-psi-purple-300 mb-5 lg:mb-7',
  variants:{
    align:{
      center:'text-center'
    },

    color:{
      white:'text-psi-white'
    },
  },

});
