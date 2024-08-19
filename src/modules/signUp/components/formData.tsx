import { useState } from 'react'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { SecondaryTextExist, Bg, BgDarker, Primary } from '@/theme/theming'
import type { slideAction } from '../utils/signUpTypes'

const FormData = ({ slide, setSlide }: slideAction) => {
  const [value, setValue] = useState<string | undefined>()
  console.log('value', value)

  return (
    <div
      style={{ right: slide.formData, color: SecondaryTextExist() }}
      className=" w-full h-full relative transition-all duration-300 text-[clamp(1rem,3cqw,2rem)] font-normal"
    >
      <form
        style={{ background: BgDarker() }}
        className="rounded-xl p-4 flex max-w-md flex-col gap-4 absolute bg-orange-400 w-[80%]  top-[50%] left-[50%] center-translate"
      >
        <div>
          <div>Country</div>
          <input style={{ borderColor: Primary(), background: Bg() }} type="text" className="border-2 rounded-xl w-full" />
        </div>
        <div>
          <div>Address</div>
          <input style={{ borderColor: Primary(), background: Bg() }} type="text" className="border-2 rounded-xl w-full" />
        </div>
        <div>
          <label htmlFor="phone" defaultValue={'phone'} />
          <PhoneInput id="phone" international defaultCountry="RU" value={value} onChange={setValue} />
        </div>

        <button type="button" className="opacity-0  p-2 pointer-events-none ">
          Continuar
        </button>

        <button
          style={{
            background: SecondaryTextExist(),
            color: Primary() === '#000000' ? '#ffffff' : '#000000',
          }}
          onClick={() => setSlide({ ...slide, formData: '100%', wallet: '0%' })}
          type="button"
          className="absolute right-2 bottom-2 rounded-lg p-2 text-base"
        >
          Continuar
        </button>
      </form>
    </div>
  )
}

export default FormData
