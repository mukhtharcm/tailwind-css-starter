module.exports = {
  purge: ["./public/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "foreignwind-purple": "#5267DF",
        "foreignwind-red": "#FA5959",
        "foreignwind-blue": "#242A45",
        "foreignwind-grey": "#9194A2",
        "foreignwind-white": "#f7f7f7",
      },
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require("tailwindcss-debug-screens")
  ],
};
