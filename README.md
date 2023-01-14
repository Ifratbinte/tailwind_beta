# tailwind_beta

- tailwind css install and config <br>
    yarn add -D tailwindcss postcss autoprefixer <br>
    npx tailwindcss init -p

- on tailwind.config.cjs <br>
    module.exports = { <br>
    content: [ <br>
        "./src/**/*.{js,jsx,ts,tsx}", <br>
    ], <br>
    theme: { <br>
        extend: {}, <br>
    }, <br>
    plugins: [], <br>
    } <br>

- on index.css 
    @tailwind base; <br>
    @tailwind components; <br>
    @tailwind utilities; <br>

    
