import type { Config } from 'tailwindcss'
import forms from '@tailwindcss/forms'
import aspectRatio from '@tailwindcss/aspect-ratio'

export default <Partial<Config>>{
  plugins: [forms, aspectRatio]
}
