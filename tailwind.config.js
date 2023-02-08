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
                base_white: "rgb( var(--_base-white) / <alpha-value> )",
                primary: "rgb( var(--_primary-color) / <alpha-value> )",
                secondary: "rgb( var(--_secondary-color) / <alpha-value> )",
                info: "rgb( var(--_info-color) / <alpha-value> )",
                error: "rgb( var(--_error-color) / <alpha-value> )",
                success: "rgb( var(--_success-color) / <alpha-value> )",
            },
        },
    },

    plugins: [require("@tailwindcss/forms")],
};
