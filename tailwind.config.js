/* eslint-disable no-undef */
import daisyui from 'daisyui';
const flowbite = require('flowbite-react/tailwind');

/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', flowbite.content()],
    theme: {
        extend: {
            fontFamily: {
                poppins: ['Poppins', 'sans-serif']
            },
            colors: {
                neutralSilver: '#F5F7Fa',
                neutralDGrey: '#4D4D4D',
                brandPrimary: '#3F83F8',
                brandSecondary: '#7066e0',
                brandLight: '#ffffff',
                neutralGrey: '#717171'
            }
        }
    },
    plugins: [daisyui, flowbite.plugin()]
};
