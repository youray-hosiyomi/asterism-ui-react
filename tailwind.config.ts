import type { Config } from "tailwindcss";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  corePlugins: {
    //Tailwind独自のGlobal Styleを無効化
    preflight: false,
  },
  //Utiliti Classのprefixを変更
  prefix: "tw-",
  plugins: [],
} satisfies Config;
