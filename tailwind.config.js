/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "tab-color": "#f1f1f1",
        "tab-title": "#4d4d4d",
        "light-gray": "#a6a6a6",
        "select-tab": "#ebebeb",
        "chat-top-bar": "#ffffff",
        "self-bg": "#EEFFDE",
        "send-color": "#0088cc",
      },
    },
  },
  plugins: [],
};
