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
export interface tasks {
  name: string
}
