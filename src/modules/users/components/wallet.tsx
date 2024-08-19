import { SecondaryTextExist, BgDarker, Primary } from '@/theme/theming'
import { Copy } from 'lucide-react'

const UserProfileWallet = () => {
  const CopyButton = async (value: string) => {
    const Element = document.querySelector(`[data-user=${value}]`)
    console.log('coping text', Element?.innerHTML)

    if (Element) await navigator.clipboard.writeText(Element.innerHTML)
  }

  return (
    <ul
      style={{
        background: BgDarker(),
        color: SecondaryTextExist(),
        borderColor: Primary(),
      }}
      className="flex flex-col gap-4   border-2  rounded-2xl p-4"
    >
      <li className="flex flex-col  gap-2">
        <div>Wallet:</div>
        <div className="flex gap-4">
          <div data-user="wallet">0xb0A7c00EA503AdbdFE0071bdd9eB6Fbb18e7C6B5</div>
          <Copy
            size={20}
            strokeWidth={2}
            onClick={() => CopyButton('wallet')}
            className="cursor-pointer hover:scale-105 duration-150"
          />
        </div>
      </li>
      <li className="flex flex-col gap-2 ">
        <div>Red:</div>
        <div>Tron - TRC20</div>
      </li>
    </ul>
  )
}
export default UserProfileWallet
