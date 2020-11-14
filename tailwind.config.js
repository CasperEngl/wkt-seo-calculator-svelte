module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [
    './src/**/*.{svelte,ts}',
  ],
  theme: {
    extend: {
    },
  },
  variants: {
  },
  plugins: [
    require('@tailwindcss/custom-forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/ui'),
  ],
}
