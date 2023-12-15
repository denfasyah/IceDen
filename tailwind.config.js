/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      screens: {
        "xl": "1320px",
      },
      daisyui: {
      themes: [
        {
          mytheme: {
          
 "primary": "#db2777",
          
 "secondary": "#00dd00",
          
 "accent": "#008428",
          
 "neutral": "#2d2439",
          
 "base-100": "#fafdf6",
          
 "info": "#00d4ff",
          
 "success": "#21b400",
          
 "warning": "#e11c00",
          
 "error": "#d5002c",
          },
        },
      ],
    },
      
    },
  },
  plugins: [require("daisyui")],
};
