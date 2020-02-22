const nordColors = {
  "nord-0": `var(--nord-0)`,
  "nord-1": `var(--nord-1)`,
  "nord-2": `var(--nord-2)`,
  "nord-3": `var(--nord-3)`,
  "nord-4": `var(--nord-4)`,
  "nord-5": `var(--nord-5)`,
  "nord-6": `var(--nord-6)`,
  "nord-7": `var(--nord-7)`,
  "nord-8": `var(--nord-8)`,
  "nord-9": `var(--nord-9)`,
  "nord-10": `var(--nord-10)`,
  "nord-11": `var(--nord-11)`,
  "nord-12": `var(--nord-12)`,
  "nord-13": `var(--nord-13)`,
  "nord-14": `var(--nord-14)`,
  "nord-15": `var(--nord-15)`,
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
