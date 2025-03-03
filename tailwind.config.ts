import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        'fadeInUp': 'fadeInUp 0.5s ease-out', // カスタムアニメーションを追加
        "slide-in-bottom": "slide-in-bottom 1s ease-out    "
      },
      keyframes: {
        'fadeInUp': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        "slide-in-bottom": {
                    "0%": {
                        transform: "translateY(1000px)",
                        opacity: "0"
                    },
                    to: {
                        transform: "translateY(0)",
                        opacity: "1"
                    }
                },
      },
    },
  },
  plugins: [],
} satisfies Config;
