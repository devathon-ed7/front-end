// postcss.config.mjs
import purgecss from '@fullhuman/postcss-purgecss';

export default {
  plugins: {
    '@tailwindcss/postcss': {},
    ...process.env.VITE_NODE_ENV === 'production' ? {
      '@fullhuman/postcss-purgecss': {
        content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
        safelist: [/^data-/, /^aria-/],
        defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
      }
    } : {}
  }
}