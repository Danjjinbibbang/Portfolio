import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      borderColor: {
        DEFAULT: "#d1d5db", // gray-300 기본값
        primary: "#258ddb", // url 색상
        secondary: "#ffed4a",
        danger: "#e3342f",
      },
    },
  },
};

export default config;
