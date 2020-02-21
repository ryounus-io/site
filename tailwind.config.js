const nordColors = {
  "nord-0": `var(--nord0)`,
  "nord-1": `var(--nord1)`,
  "nord-2": `var(--nord2)`,
  "nord-3": `var(--nord3)`,
  "nord-4": `var(--nord4)`,
  "nord-5": `var(--nord5)`,
  "nord-6": `var(--nord6)`,
}

module.exports = {
  theme: {
    extend: {
      screens: {
        dark: { raw: "(prefers-color-scheme: dark)" },
      },
      colors: {
        "primary-light": `var(--bg-colour)`,
        "primary-dark": `var(--nord-0)`,
        ...nordColors,
      },
    },
  },
  variants: {},
  plugins: [],
}
