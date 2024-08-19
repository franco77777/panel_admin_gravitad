import { SecondaryTextExist, BgDarker, Primary } from '@/theme/theming'
import { Copy, Settings, UserRound } from 'lucide-react'

const PersonalInformation = () => {
  const CopyButton = async (value: string) => {
    const Element = document.querySelector(`[data-user=${value}]`)
    console.log('coping text', Element?.innerHTML)

    if (Element) await navigator.clipboard.writeText(Element.innerHTML)
  }

  return (
    <div
      style={{
        background: BgDarker(),
        color: SecondaryTextExist(),
        borderColor: Primary(),
      }}
      className=" border-2  rounded-2xl  items-cemter justify-center flex gap-8 p-4"
    >
      <div className="w-1/2  rounded">
        <UserRound size={140} strokeWidth={2} className="mx-auto" />
      </div>
      <ul className="w-1/2 flex flex-col justify-between  rounded">
        <li className="flex gap-2">
          <div data-user="name">name</div>

          <Copy
            size={20}
            strokeWidth={2}
            onClick={() => CopyButton('name')}
            className="hover:scale-105 cursor-pointer duration-150"
          />
        </li>
        <li className="flex gap-2">
          <div data-user="phone">phone</div>
          <Copy
            size={20}
            strokeWidth={2}
            onClick={() => CopyButton('phone')}
            className="hover:scale-105 cursor-pointer duration-150"
          />
        </li>
        <li className="flex gap-2">
          <div data-user="email">email</div>
          <Copy
            size={20}
            strokeWidth={2}
            onClick={() => CopyButton('email')}
            className="hover:scale-105 cursor-pointer duration-150"
          />
        </li>
        <li className="flex gap-2">
          <div data-user="github">github</div>
          <Copy
            size={20}
            strokeWidth={2}
            onClick={() => CopyButton('github')}
            className="hover:scale-105 cursor-pointer duration-150"
          />
        </li>
        <li className="flex justify-between">
          <div data-user="area">area</div>
          <Settings
            size={20}
            strokeWidth={2}
            onClick={() => CopyButton('area')}
            className="hover:scale-105 cursor-pointer duration-150"
          />
        </li>
      </ul>
    </div>
  )
}
export default PersonalInformation
