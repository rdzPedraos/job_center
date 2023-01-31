const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Roboto", "Nunito", ...defaultTheme.fontFamily.sans],
            },

            colors: {
                base_white: "rgb( var(--base-white) / <alpha-value> )",
                primary: "rgb( var(--primary-color) / <alpha-value> )",
                secondary: "rgb( var(--secondary-color) / <alpha-value> )",
                info: "rgb( var(--info-color) / <alpha-value> )",
                error: "rgb( var(--error-color) / <alpha-value> )",
                success: "rgb( var(--success-color) / <alpha-value> )",
            },
        },
    },

    plugins: [require("@tailwindcss/forms")],
};
