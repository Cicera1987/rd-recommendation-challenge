/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        white: '#ffffff',
        darkGray: '#333333',
        gray: '#666666',
        lightGray: '#f5f5f5',
        green: '#28f0c8',
        pink: '#f014a0',
        purple: '#f064b4',
        cyan: '#00f0c8',
        accent: '#00dc104',
        link: '#61dafb',
        blue: "#002233",
        water: "#d3faff"
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen',
          'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
          'sans-serif'],
        mono: ['source-code-pro', 'Menlo', 'Monaco', 'Consolas', 'Courier New', 'monospace'],
      },
    },
  },
  plugins: [],
};