import { SecondaryGradientExist, SecondaryTextExist, BgDarker, Primary } from '@/theme/theming'
import { Trash2 } from 'lucide-react'

const Administration2Table = () => {
  return (
    <div style={{ background: SecondaryGradientExist() }} className="w-full h-full p-1 rounded-2xl overflow-x-auto mb-4">
      <table
        style={{
          borderColor: SecondaryGradientExist(),
          backgroundColor: BgDarker(),
        }}
        className="   rounded-xl overflow-hidden text-base  w-full text-black"
      >
        <tr style={{ background: SecondaryGradientExist() }} className=" ">
          <th className=" text-center ">Name</th>
          <th className=" text-center">ID</th>
          <th className=" text-center">Administration</th>
          <th className=" text-center">Branch</th>
          <th className=" text-center">Organization</th>
          <th className=" text-center">Users</th>
          <th className=" text-center" />
          <th className=" text-center" />
        </tr>
        <tr className="">
          <td style={{ color: SecondaryTextExist() }} className="text-center text-secondary">
            gravitad
          </td>
          <td style={{ color: SecondaryTextExist() }} className="text-center text-secondary">
            active
          </td>
          <td style={{ color: SecondaryTextExist() }} className="text-center text-secondary">
            200
          </td>
          <td style={{ color: SecondaryTextExist() }} className="text-center text-secondary">
            70
          </td>
          <td style={{ color: SecondaryTextExist() }} className="text-center text-secondary">
            2
          </td>
          <td style={{ color: SecondaryTextExist() }} className="text-center text-secondary">
            2
          </td>
          <td style={{ color: SecondaryTextExist() }} className="py-2">
            <button
              type="button"
              style={{
                background: SecondaryTextExist(),
                color: Primary() === '#000000' ? '#ffffff' : '#000000',
              }}
              className="rounded py-[2px] px-2 "
            >
              drive
            </button>
          </td>
          <td style={{ color: SecondaryTextExist() }} className="">
            <Trash2 />
          </td>
        </tr>
        <tr
          style={{
            color: SecondaryTextExist(),
            borderColor: Primary(),
          }}
          className="border-t-2 "
        >
          <td className="text-center ">gravitad</td>
          <td className="text-center ">active</td>
          <td className="text-center ">200</td>
          <td className="text-center ">70</td>
          <td className="text-center ">2</td>
          <td className="text-center ">2</td>
          <td className="py-2">
            <button
              type="button"
              style={{
                background: SecondaryTextExist(),
                color: Primary() === '#000000' ? '#ffffff' : '#000000',
              }}
              className=" rounded py-[2px] px-2 "
            >
              drive
            </button>
          </td>
          <td style={{ color: SecondaryTextExist() }} className="">
            <Trash2 />
          </td>
        </tr>
      </table>
    </div>
  )
}
export default Administration2Table
