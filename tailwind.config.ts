import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/section/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': '#fff',
        'primary-bg-color': '#fe5930',
        'secondary-color': '#219ebc',
        'text-color': '#d4d4d4',
        'black-text': '#000',
        'slate-text': '#e2e8f0',
      },
    },
  },
  plugins: [],
};
export default config;
