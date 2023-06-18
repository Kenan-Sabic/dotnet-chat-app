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
       
        'castle-floor-1' : "url('../../assets/images/diego-lopez-groundtile1.jpg')",
        'dungeonWall-1' : "url('../../assets/images/dungeonWall-1.png')",
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
