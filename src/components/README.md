- tailwind css install and config <br>
    yarn add -D tailwindcss postcss autoprefixer
    npx tailwindcss init -p

- on tailwind.config.cjs <br>
    module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
    }

- on index.css 
    @tailwind base;
    @tailwind components;
    @tailwind utilities;