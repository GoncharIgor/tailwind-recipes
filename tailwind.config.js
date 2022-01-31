// we can override theme values here: colors. paddings, font sizes

module.exports = {
    mode: 'jit',
    darkMode: 'class',
    purge: ['./src/**/*.{html,js}', './public/index.html'], // remove unused styles
    content: ["./src/**/*.{html,js}"], // paths to all of your template files
    theme: {
        extend: {
            colors: {
                primary: '#ff6363', // we are adding new custom color "primary" to theme
                secondary: {
                    100: '#e2e2d5',
                    200: '#888883'
                }
            },
            fontFamily: {
                // bodyFont - a customly named key to access font from html file. Can be any name
                // "Nunito" font was imported before in styles.css
                bodyFont: ['Nunito']
            }
        },
    },
    variants: {
        extend: {}
    },
    plugins: [],
}
