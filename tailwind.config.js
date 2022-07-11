module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 30s linear infinite',
      },
      colors: {
        primary: '#2C3639',
        secondary: '#3F4E4F',
        accent: '#A27B5C',
        light: '#DCD7C9',
        lightseagreen: '#4AB2AA',
      },
    },
  },
  plugins: [],
}
