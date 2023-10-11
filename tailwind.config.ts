import type { Config } from 'tailwindcss'


const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        light: {
          primary: '#dfdfdf50',
          text: '#0f0f0f90',
          component: '#fff',
          
        },
        dark: {
          primary: '#1a202c', 
          text: '#ffffff',
          component:'#00000050' 
        }
      }
    },
    plugins: [],
  }
}
export default config
