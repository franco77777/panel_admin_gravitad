import { useState } from 'react'
import { Bg, SecondaryTextExist, BgDarker, Primary, SecondaryGradientExist } from '@/theme/theming'
import { CirclePlus, CircleX } from 'lucide-react'
import type { slideAction, social } from '../utils/signUpTypes'

const FormContact = ({ slide, setSlide }: slideAction) => {
  const [openModal, setOpenModal] = useState(false)
  const [socialList, setSocialList] = useState<social[]>([])
  const [social, setSocial] = useState<social>({ name: '', link: '' })

  const AddSocial = () => {
    socialList.push(social)
    console.log(social)
    console.log(socialList)
    setOpenModal(false)
  }

  const removeSocial = (name: string) => {
    const socialCopy = [...socialList]
    const result = socialCopy.filter((e) => e.name !== name)

    setSocialList(result)
  }
  return (
    <div
      style={{ right: slide.formContact, color: SecondaryTextExist() }}
      className=" w-full h-full flex  transition-all duration-300 absolute top-0 font-normal text-[clamp(1rem,3cqw,1.5rem)]"
    >
      {openModal && <div style={{ background: Bg() }} className="w-screen min-h-screen absolute top-0 left-0 z-10 opacity-80" />}
      <form
        style={{ background: BgDarker() }}
        className="rounded-2xl p-4 flex max-w-md flex-col gap-4 absolute w-[80%]  top-[50%] left-[50%] center-translate"
      >
        <div>
          <div>linkedin</div>
          <input type="text" style={{ background: BgDarker(), borderColor: Primary() }} className="border-2 rounded-xl w-full" />
        </div>

        <div>
          <div>discord</div>
          <input type="text" style={{ background: BgDarker(), borderColor: Primary() }} className="border-2 rounded-xl w-full" />
        </div>
        <div>
          <div>telegram</div>
          <input type="text" style={{ background: BgDarker(), borderColor: Primary() }} className="border-2 rounded-xl w-full" />
        </div>
        <div>
          <div>github</div>
          <input type="text" style={{ background: BgDarker(), borderColor: Primary() }} className="border-2 rounded-xl w-full" />
        </div>
        <div>
          {socialList.map((e) => (
            <div key={e.name} className=" flex gap-4 text-sm ">
              <span>{e.name}</span>
              <span>{e.link}</span>
              <button type="button" onClick={() => removeSocial(e.name)}>
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="h-5 w-5"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          ))}
        </div>
        <button
          style={{
            background: SecondaryGradientExist(),
            color: Primary() === '#000000' ? '#ffffff' : '#000000',
          }}
          type="button"
          onClick={() => setOpenModal(true)}
          color="success"
          className="p-2 rounded-xl  "
        >
          <div className="flex gap-2 cursor-pointer items-center justify-center">
            <CirclePlus width={30} height={30} />

            <span className="font-medium text-base">add social network</span>
          </div>
        </button>

        <button
          type="button"
          style={{
            background: SecondaryGradientExist(),
            color: Primary() === '#000000' ? '#ffffff' : '#000000',
          }}
          className="cursor-pointer px-4 rounded-lg w-fit opacity-0 pointer-events-none"
        >
          Continuar
        </button>
        {/* <Button
          onClick={() =>
            setSlide({ ...slide, formContact: "100%", files: "0%" })
          }
          color="blue"
          className="absolute right-0 bottom-0"
        >
          Continuar
        </Button> */}
        <button
          type="button"
          onClick={() => setSlide({ ...slide, formContact: '100%', files: '0%' })}
          style={{
            background: SecondaryGradientExist(),
            color: Primary() === '#000000' ? '#ffffff' : '#000000',
          }}
          className="cursor-pointer px-4 rounded-lg w-fit absolute right-2 bottom-2"
        >
          Continuar
        </button>
      </form>
      {openModal && (
        <div
          style={{
            background: BgDarker(),
            color: SecondaryTextExist(),
          }}
          className="modalAnimation flex flex-col gap-4 z-30 w-96 p-4 rounded-xl   absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <CircleX onClick={() => setOpenModal(false)} className="top-2 right-2 absolute cursor-pointer" size={30} />
          <div>
            <div>social network</div>
            <input
              type="text"
              style={{
                background: Bg(),
                color: SecondaryTextExist(),
                borderColor: Primary(),
              }}
              className="rounded-xl w-full border-2"
              value={social.name}
              onChange={(event) => setSocial({ ...social, name: event.target.value })}
            />
          </div>
          <div>
            <div>link</div>
            <input
              type="text"
              style={{
                borderColor: Primary(),
                background: Bg(),
                color: SecondaryTextExist(),
              }}
              onChange={(event) => setSocial({ ...social, link: event.target.value })}
              className="rounded-xl w-full"
            />
          </div>
          <button
            type="button"
            onClick={AddSocial}
            style={{
              background: SecondaryGradientExist(),
              color: Primary() === '#000000' ? '#ffffff' : '#000000',
            }}
            className="px-4 rounded-lg mt-4"
          >
            Add
          </button>
        </div>
      )}
    </div>
  )
}

export default FormContact
