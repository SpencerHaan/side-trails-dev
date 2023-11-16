import { ignore } from 'gatsby/dist/schema/infer/inference-metadata'
import type { Config } from 'tailwindcss'

export default {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      colors: {
        "lion": '#9F8E6F',
      },
      height: {
        // @ts-ignore
        screen: ["100vh", "100dvh"]
      },
      minHeight: {
        // @ts-ignore
        screen: ["100vh", "100dvh"]
      },
      maxHeight: {
        // @ts-ignore
        screen: ["100vh", "100dvh"]
      },
      screens: {
        '3xl': '2080px',
      }
    },
    fontFamily: {
      "base": ["Montserrat", "sans-serif"],
    }
  },
  plugins: [],
} satisfies Config
