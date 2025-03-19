/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      sm: "640px", // 작은 화면 (모바일)
      md: "768px", // 중간 화면 (태블릿)
      lg: "1024px", // 큰 화면 (데스크탑)
      xl: "1280px", // 아주 큰 화면 (데스크탑)
      "2xl": "1536px", // 매우 큰 화면
    },
  },
  plugins: [],
};
