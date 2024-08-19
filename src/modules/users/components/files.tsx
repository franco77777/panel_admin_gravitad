import { SecondaryTextExist, BgDarker, Primary } from '@/theme/theming'
import { FileText } from 'lucide-react'

const UserProfileFiles = () => {
  return (
    <ul
      style={{
        background: BgDarker(),
        color: SecondaryTextExist(),
        borderColor: Primary(),
      }}
      className="flex gap-4 text-secondary border-2 border-secondary rounded-2xl p-4"
    >
      <li>
        <FileText />
        DNI
      </li>
      <li>
        <FileText />
        CV
      </li>
      <li>
        <FileText />
        other
      </li>
    </ul>
  )
}
export default UserProfileFiles
