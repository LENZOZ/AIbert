/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'resalte-de-texto': '#EB5952',
        'docente': "rgb(255 84 71)",
        'texto-grande-negro': '#2A2F35',
        'texto-pequeno-negro': '#707070',
        'logo-fondo': 'rgb(78 90 255)',
        'logo-fondo-2': '#1D214E',
        'logo-resalte': '#FFC800',
        'logo-resalte-2': '#FF6A00',
        'sombra-boton': '#4F59FF',
        'iconos': '#6161FF',
        'bg': '#BDD4DE',
        'detalles grises': '#E5E5E5',
        'biologia': '#7AAB00',
        'fisica': '#9900FF',
        'fondo' : 'rgb(181 213 228)',
        'check' : 'rgb(60 255 90)',
      },
      boxShadow: {
        'recta' : '0 0px 5px 0px rgba(0,0,0,0.4)',
        'hover' : '0 0px 10px 0px rgba(0,0,0,0.4)'
      },
    },
    fontFamily: {
      "poppins": ["Poppins", "sans-serif"],
    },
  },
  plugins: [],
}

