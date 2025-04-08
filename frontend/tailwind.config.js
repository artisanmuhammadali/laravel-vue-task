/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            keyframes: {
                'zoom-in-zoom-out': {
                    '0%': {
                        transform: 'translateX(0%)'
                    },
                    '15%': {
                        transform: 'translateX(-25%) rotate(-5deg)'
                    },
                    '30%': {
                        transform: 'translateX(20%) rotate(3deg)'
                    },
                    '45%': {
                        transform: 'translateX(-15%) rotate(-3deg)'
                    },
                    '60%': {
                        transform: 'translateX(10%) rotate(2deg)'
                    },
                    '75%': {
                        transform: 'translateX(-5%) rotate(-1deg)'
                    },
                    '100%': {
                        transform: 'translateX(0%)'
                    },
                },
            },
            animation: {
                'zoom-in-zoom-out': 'zoom-in-zoom-out 1s ease infinite',
            },
        },
    },
    css: ['~/src/assets/css/main.css'],
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/aspect-ratio'),
    ],
}