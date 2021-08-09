const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: [
    './resources/**/*.blade.php',
    './resources/**/*.js',
    './resources/**/*.vue',
  ],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        'xxs': '.65rem'
      },
      colors: {
        blue: {
          lighter: '#EAF4FE',
          light: '#208AFF',
          DEFAULT: '#0560FC',
          dark: '#003CBE',
          darker: '#3A10E5'
        },
        gray: {
          light: '#F7F9FA',
          lighter: '#FCFDFE',
          DEFAULT: '#DBDCE0',
          darker: '#181818',
          dark: '#333030',
        },
        green: {
          lightest: '#CCE1D6',
          lighter: '#2BB970',
          light: '#2BB970',
          DEFAULT: '#2BB970',
          dark: '#67A786',
          darker: '#1C7B4A'
        },
        orange: {
          lighter: '#FFF0E5',
          light: '#F77E63',
          DEFAULT: '#FF6610',
          dark: '#EF542E'
        },
        red: {
          lighter: '#EBA39F',
          light: '#D23228',
          DEFAULT: '#E13516',
          dark: '#D23228',
          darker: '#921108'
        },
        white: '#FFFFFF',
        yellow: {
          light: '#FFD300',
          DEFAULT: '#F0CC00',
          dark: '#CCA900'
        }
      }
    },
  },
  variants: {
    extend: {
      extend: {
        fontWeight: ['hover']
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
