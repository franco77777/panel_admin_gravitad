import { useState } from 'react'

import { Bg } from '@/theme/theming'
import Login from '@/modules/signUp/components/login'
import Welcome from '@/modules/signUp/components/welcome'
import FormData from '@/modules/signUp/components/formData'
import Wallet from '@/modules/signUp/components/wallet'
import Files from '@/modules/signUp/components/files'
import FormContact from '@/modules/signUp/components/formContact'

const Excalidraw = () => {
  const [slide, setSlide] = useState({
    login: '0%',
    welcome: '-100%',
    formData: '-100%',
    wallet: '-100%',
    formContact: '-100%',
    files: '-101%',
  })
  return (
    <div style={{ background: Bg() }} className=" min-w-[100vw] min-h-[100vh]  overflow-hidden">
      <div className="p-[4vw] w-full h-full absolute top-[50%] left-[50%] center-translate rounded-2xl overflow-hidden">
        <div className="relative w-full h-full rounded-2xl overflow-hidden">
          <Login slide={slide} setSlide={setSlide} />
          <Welcome slide={slide} setSlide={setSlide} />
          <FormData slide={slide} setSlide={setSlide} />
          <Wallet slide={slide} setSlide={setSlide} />
          <FormContact slide={slide} setSlide={setSlide} />
          <Files slide={slide} setSlide={setSlide} />
        </div>
      </div>
    </div>
  )
}

export default Excalidraw
