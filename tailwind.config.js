/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors: {
        customStrongcyan: " hsl(172, 67%, 45%)",
        customVerydarkcyan: "hsl(183, 100%, 15%)",
        customDarkgrayishcyan: "hsl(186, 14%, 43%)",
        customGrayishcyan: "hsl(184, 14%, 56%)",
        customLightgrayishcyan: "hsl(185, 41%, 84%)",
        customVerylightgrayishcyan: " hsl(189, 41%, 97%)",
        customWhite: " hsl(0, 0%, 100%)",
      },

      fontFamily: {
        SpaceMono: ["Space Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
