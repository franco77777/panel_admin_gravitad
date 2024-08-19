export interface Image {
  name: string
  url: string
}

export interface filesProp {
  slide: {
    login: string
    welcome: string
    formData: string
    wallet: string
    formContact: string
    files: string
  }
  setSlide: React.Dispatch<
    React.SetStateAction<{
      login: string
      welcome: string
      formData: string
      wallet: string
      formContact: string
      files: string
    }>
  >
}

export interface social {
  name: string
  link: string
}
export interface slideAction {
  slide: slide
  setSlide: React.Dispatch<React.SetStateAction<slide>>
}
export interface slide {
  login: string
  welcome: string
  formData: string
  wallet: string
  formContact: string
  files: string
}
