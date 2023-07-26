/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors:{
        'psi-purple':{
          '100':'#ba83bf',
          '200':'#8E39A4',
          '300':'#543E75'
        },
        "psi-blue": '#C5E0ED',
        "psi-white": '#FFFFFF',
        "psi-gray":'#EAEAEA',
        "psi-black":'rgb(52, 58, 64)'
      },

      fontFamily:{
        'sans':['Manrope', ...defaultTheme.fontFamily.sans]
      },

      backgroundImage:{
        'whiteBackground': "url('assets/images/white-background.svg')"
      },

      gridTemplateColumns: {
        'autoCard':'repeat(auto-fill, minmax(25rem,1fr))'
      },
  

    

      
    },
  },
  plugins: [],
}

