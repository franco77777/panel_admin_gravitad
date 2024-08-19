import { storeTheme } from '@/store/theme/theme'

export interface Theme {
  primary: string
  bg: string
  bgDarker: string
}

export interface GradientTheme extends Theme {
  secondary: string
}

export interface ThemingType {
  0: Theme
  1: Theme
  2: Theme
  3: Theme
  4: Theme
  5: Theme
  6: Theme
  7: GradientTheme
  8: GradientTheme
}

export const Theming: ThemingType = {
  0: {
    primary: '#00CCB4',
    bg: '#0b1021',
    bgDarker: '#06070f',
  },
  1: {
    primary: '#5cabca',
    bg: '#0b1021',
    bgDarker: '#05070e',
  },
  2: {
    primary: '#2bca2b',
    bg: '#000000',
    bgDarker: '#113423',
  },
  3: {
    primary: '#f58233',
    bg: '#0b1021',
    bgDarker: '#05070e',
  },
  4: {
    primary: '#ff0000',
    bg: '#000000',
    bgDarker: '#3e0b19',
  },

  5: {
    primary: '#000000',
    bg: '#ffffff',
    bgDarker: '#ffffff',
  },
  6: {
    primary: '#c3eb5b',
    bg: '#0b1021',
    bgDarker: '#05070e',
  },
  7: {
    primary: '#7f00ff',
    secondary: '#e100ff',
    bg: '#0b1021',
    bgDarker: '#05070e',
  },
  8: {
    primary: '#f12711',
    secondary: '#f5af19',
    bg: '#0b1021',
    bgDarker: '#05070e',
  },
}

export const Primary = () => {
  const Theme = storeTheme.getState().primary

  return Theme ? Theme : Theming[0].primary
}
export const Secondary = () => {
  const Theme = storeTheme.getState().secondary

  return Theme
}
export const Bg = () => {
  const Theme = storeTheme.getState().bg
  return Theme ? Theme : Theming[0].bg
}

export const BgDarker = () => {
  const Theme = storeTheme.getState().bgDarker
  return Theme ? Theme : Theming[0].bgDarker
}

export const SecondaryGradientExist = () => {
  return Secondary()
    ? `linear-gradient(to right, ${Primary()},${Secondary()})`
    : `linear-gradient(to right, ${Primary()},${Primary()})`
}

export const SecondaryTextExist = () => {
  return Secondary() ? Secondary() : Primary()
}
