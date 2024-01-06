/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // "../assets/**/*.{jpg,png,mp4,svg}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'blackbackground': "url('/black-back.jpg')",
        'whitebackground': "url('/white-back.jpg')",
        'blackback': "url('/background-video.mp4')",
        'goldCard': "url('/backgroundCard.png')"
      },

      fontFamily: {
        'gabarito' : ['Gabarito'],
        'dela' : ['"Dela Gothic One"'],
      },

      fontWeight: {
        '900': '900'
      },

      width: {
        '200': ['200%'],
        '150': ['150%'],
      },

      backgroundColor: {
        'eagreen': '#3ff660',
        'dark': '#161616',
        'ldark': '#242424',
        'lldark': '#393939',
        'gd': '#ffda6a'
      },
      colors: {
        'eagreen': '#3ff660',
        'dark': '#363636',
        'ldark': '#242424',
        'darkt': '#161616',
        'lldark': '#3f3f3f',
        'xdark': '#c4c4c4'
      },
      borderColor: {
        'gr': '#313131',
        'lr': '#4d4d4d',
      }
    },
  },
  plugins: [],
}

