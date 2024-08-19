import { SecondaryGradientExist, SecondaryTextExist, BgDarker, Primary } from '@/theme/theming'

const UserProfileOrganizations = () => {
  return (
    <div style={{ borderColor: Primary(), color: SecondaryTextExist() }} className="mt-8   border-2 rounded-2xl overflow-x-auto">
      <table className=" w-full ">
        <tr className="w-full">
          <th
            style={{
              background: SecondaryGradientExist(),
              color: Primary() === '#000000' ? '#ffffff' : '#000000',
            }}
            colSpan={6}
            className="  text-2xl  text-center  "
          >
            Organizations
          </th>
        </tr>
        <tr style={{ background: BgDarker() }} className=" ">
          <th className="text-center text-xl font-normal">organization</th>
          <th style={{ borderColor: Primary() }} className="text-center text-xl font-normal border-l-2 ">
            user
          </th>
          <th style={{ borderColor: Primary() }} className="text-center text-xl font-normal border-l-2 ">
            department
          </th>
          <th style={{ borderColor: Primary() }} className="text-center text-xl font-normal border-l-2 ">
            state
          </th>
          <th style={{ borderColor: Primary() }} className="text-center text-xl font-normal border-l-2 ">
            start date
          </th>
          <th style={{ borderColor: Primary() }} className="text-center text-xl font-normal border-l-2 ">
            end date
          </th>
        </tr>
        <tr style={{ borderColor: Primary(), background: BgDarker() }} className="border-t-2 ">
          <td style={{ borderColor: Primary() }} className="text-center">
            gravitad
          </td>
          <td style={{ borderColor: Primary() }} className="border-l-2  text-center">
            zucadev
          </td>
          <td style={{ borderColor: Primary() }} className="border-l-2  text-center">
            backend
          </td>
          <td style={{ borderColor: Primary() }} className="border-l-2  text-center">
            supervised
          </td>
          <td style={{ borderColor: Primary() }} className="border-l-2  text-center">
            27/12/2020
          </td>
          <td style={{ borderColor: Primary() }} className="border-l-2  text-center">
            n/a
          </td>
        </tr>
        <tr style={{ borderColor: Primary(), background: BgDarker() }} className="border-t-2 ">
          <td style={{ borderColor: Primary() }} className="text-center">
            gravitad
          </td>
          <td style={{ borderColor: Primary() }} className="border-l-2  text-center">
            zucadev
          </td>
          <td style={{ borderColor: Primary() }} className="border-l-2  text-center">
            backend
          </td>
          <td style={{ borderColor: Primary() }} className="border-l-2  text-center">
            supervised
          </td>
          <td style={{ borderColor: Primary() }} className="border-l-2  text-center">
            27/12/2020
          </td>
          <td style={{ borderColor: Primary() }} className="border-l-2  text-center">
            n/a
          </td>
        </tr>
        <tr style={{ borderColor: Primary(), background: BgDarker() }} className="border-t-2 ">
          <td style={{ borderColor: Primary() }} className="text-center">
            gravitad
          </td>
          <td style={{ borderColor: Primary() }} className="border-l-2  text-center">
            zucadev
          </td>
          <td style={{ borderColor: Primary() }} className="border-l-2  text-center">
            backend
          </td>
          <td style={{ borderColor: Primary() }} className="border-l-2  text-center">
            supervised
          </td>
          <td style={{ borderColor: Primary() }} className="border-l-2  text-center">
            27/12/2020
          </td>
          <td style={{ borderColor: Primary() }} className="border-l-2  text-center">
            n/a
          </td>
        </tr>
      </table>
    </div>
  )
}
export default UserProfileOrganizations
