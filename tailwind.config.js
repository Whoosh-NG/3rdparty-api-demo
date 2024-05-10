/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      color: {
        pryColor: '#400080',
        bgPryColor: '#53127d',
        secColor: '#ffa24f',
        pryDark: '#25015b',
        white: '#fff',
        black: '#202124',
        darkBlack: '#000',
        transGreen: '#B6C1C1',
        Grey1: '#303237',
        Grey2: '#565c69',
        Grey3: '#bdc0ce',
        Grey4: '#f4f5f8',
        Grey5: '#bcbcbd',
        Grey6: '#7e8494',
        Line: '#e5e7ef',
        rated: '#be9122',
        positive: '#20af0b',
        negative: '#ff3b2d',
        receiver: '#eeeff2',
        sender: '#3b70fb',
      },
      fontFamily: {
        publicSans: ['Public Sans', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
