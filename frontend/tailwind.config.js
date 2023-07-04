/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      colors: {
        raisingBlack : '#37323E',
        dimGray : '#6D6A75', 
        gold : '#DEB841', 
      },
      fontFamily: {
        'vt323' : ['VT323' , 'monospace'],
        'electrolize' : ['Electrolize', 'sans-serif'],
        '2Play' : ['Press Start 2P', 'sans-serif'] },
        backgroundImage: {
          "deungeonwall-1" : "url('/src/assets/images/dungeonWall-1.png')",
          "chat-wall" : "url('/src/assets/images/chat-wall-bg.png')",
        }
    },
  },
  plugins: [],
}

