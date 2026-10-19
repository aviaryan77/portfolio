const v = (name) => `rgb(var(--c-${name}) / <alpha-value>)`;

module.exports = {
  content: ['./pages/**/*.tsx', './components/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        sans: ['"IBM Plex Sans"', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      // Colours come from CSS variables so light/dark can switch (see globals.css).
      colors: {
        ink: {
          DEFAULT: v('ink'),
          deep: v('ink-deep'),
          raised: v('ink-raised'),
          line: v('ink-line'),
          line2: v('ink-line2'),
        },
        text: {
          DEFAULT: v('text'),
          2: v('text-2'),
          muted: v('text-muted'),
          faint: v('text-faint'),
        },
        mint: {
          DEFAULT: v('mint'),
          hover: v('mint-hover'),
        },
      },
    },
  },
  plugins: [],
};
