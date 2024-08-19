import { SecondaryTextExist, BgDarker, Primary } from '@/theme/theming'
import type { slideAction } from '../utils/signUpTypes'
const Welcome = ({ slide, setSlide }: slideAction) => {
  return (
    <div
      style={{ right: slide.welcome, color: SecondaryTextExist() }}
      className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,500px),1fr))] w-full h-full absolute transition-all duration-300"
    >
      <div className="flex flex-col  ">
        <h3>Bienvenido Nombre y Apellido</h3>
        <span>image here</span>
      </div>
      <div className=" font-normal grid place-items-center text-sm  relative text-[clamp(1rem,3cqw,1.5rem)]  ">
        <div style={{ background: BgDarker() }} className=" relative  rounded-2xl w-full p-4 md:p-12 ">
          <div className=" ">
            Por favor termina de completar tus datos, toma en cuenta que debes tener, resumen curricular, documento de identidad
            de tu pais, de poseer un documento de identidad que verifique tu direccion como en Venezuela el R.I.F, si tu documento
            de identidad tiene tu direccion fiscal, solo el documento de identidad, tambien debes de poseer tu wallet a la que los
            pagos seran asociados, debe ser USDT en la red de tron, TRC20
          </div>
          <button type="button" color="blue" className="opacity-0  p-2 pointer-events-none ">
            Continuar
          </button>
          <button
            type="button"
            style={{
              background: SecondaryTextExist(),
              color: Primary() === '#000000' ? '#ffffff' : '#000000',
            }}
            onClick={() => setSlide({ ...slide, welcome: '100%', formData: '0%' })}
            color="blue"
            className="absolute right-2 bottom-2 rounded-xl p-2"
          >
            Continuar
          </button>
        </div>
      </div>
    </div>
  )
}
export default Welcome
