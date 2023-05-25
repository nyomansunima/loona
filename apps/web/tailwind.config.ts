import type { Config } from 'tailwindcss'
import forms from '@tailwindcss/forms'
import aspectRatio from '@tailwindcss/aspect-ratio'

export default <Partial<Config>>{
  theme: {
    fontFamily: {
      heading: ['Poppins', 'sans-serif'],
      body: ['DM Sans', 'sans-serif']
    },
    screens: {
      tablet: '640px',
      laptop: '1024px',
      desktop: '1280px'
    },
    extend: {
      colors: {
        lavender: '#A394FF',
        peach: '#FFB292',
        gum: '#FF87AB'
      },
      borderRadius: {
        '4xl': '32px'
      }
    }
  },
  plugins: [forms, aspectRatio]
}
