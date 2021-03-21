import {darkTheme, lightTheme} from '../../assets/styling/Themes';

const localThemeMode = () => {
  return !localStorage.getItem('theme') ? "light" : localStorage.getItem('theme')
}

export default {
  businessDetails: {
    contact: {
      phone: '',
      email: '',
      social: {
        facebook: 'https://facebook.com/',
        linkedin: 'http://linkedin.com/',
        twitter: 'https://twitter.com/'
      }
    }
  },
  isLoading: false,
  mode: {
    theme: localThemeMode(),
    modeTheme: localThemeMode() === 'light' ? lightTheme : darkTheme
  },
  popup: {
    isOpen: true
  },
  settings: {
    underConstruction: false
  },
  siteName: 'Financial Community',
  themes: {
    lightTheme,
    darkTheme
  }
}
