/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        blue: "0 8px 16px -1px rgba(66, 153, 225, 0.5), 0 2px 4px -1px rgba(66, 153, 225, 0.06)",
      },
      fontFamily: {
        signature: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    // ...
  ],
};
