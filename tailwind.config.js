module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.jsx',
    './site/content/**/*.md',
    './site/layouts/**/*.html',
  ],  
  theme: {
    extend: {
      screens: {
        'print': {'raw': 'print'},
      },
      colors: {
        'smoke': {
          '100': 'rgba(0, 0, 0, 0.9)',
          '200': 'rgba(0, 0, 0, 0.8)',
          '300': 'rgba(0, 0, 0, 0.7)',
          '400': 'rgba(0, 0, 0, 0.6)',
          '500': 'rgba(0, 0, 0, 0.5)',
          '600': 'rgba(0, 0, 0, 0.4)',
          '700': 'rgba(0, 0, 0, 0.3)',
          '800': 'rgba(0, 0, 0, 0.2)',
          '900': 'rgba(0, 0, 0, 0.1)',
        },
        'gold': 'rgba(155,115,43,1)',
      },      
    }
  },
  variants: {},
  plugins: [
    require('@tailwindcss/ui'),
  ]
}
