/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        raisingBlack : '#37323E',
        dimGray : '#6D6A75', 
        gold : '#DEB841',


      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        'vt323' : ['VT323' , 'monospace'],
        'electrolize' : ['Electrolize', 'sans-serif'],
        '2Play' : ['Press Start 2P', 'sans-serif']
      }
    },
  },
  plugins: [],
}
