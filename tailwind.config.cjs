/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#E96D7B",
        
"secondary": "#A991F7",
        
"accent": "#88DBDD",
        
"neutral": "#AF4670",
        
"base-100": "#F0D6E8",
        
"info": "#2563EB",
        
"success": "#16A34A",
        
"warning": "#D97706",
        
"error": "#DC2626",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
