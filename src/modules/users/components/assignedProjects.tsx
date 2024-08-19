import { SecondaryGradientExist, SecondaryTextExist, BgDarker, Primary } from '@/theme/theming'

const UserProfileAssignedProjects = () => {
  return (
    <div
      style={{
        background: BgDarker(),
        color: SecondaryTextExist(),
        borderColor: Primary(),
      }}
      className="mt-8  border-2 rounded-2xl overflow-x-auto"
    >
      <table className=" w-full ">
        <th colSpan={6} style={{ background: SecondaryGradientExist() }} className="  text-2xl   text-black text-center  ">
          Assigned Projects
        </th>
        <tr className="bg-tertiary ">
          <th style={{ borderColor: Primary() }} className="text-center text-xl font-normal">
            project code
          </th>
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
        <tr style={{ borderColor: Primary() }} className="border-t-2 ">
          <td style={{ borderColor: Primary() }} className="text-center">
            1
          </td>
          <td style={{ borderColor: Primary() }} className="border-l-2  text-center">
            zucadev
          </td>
          <td style={{ borderColor: Primary() }} className="border-l-2  text-center">
            backend
          </td>
          <td style={{ borderColor: Primary() }} className="border-l-2  text-center">
            <div className=" h-6 w-6 rounded-full bg-red-500 mx-auto" />
          </td>
          <td style={{ borderColor: Primary() }} className="border-l-2  text-center">
            27/12/2020
          </td>
          <td style={{ borderColor: Primary() }} className="border-l-2  text-center">
            27/12/2020
          </td>
        </tr>
        <tr style={{ borderColor: Primary() }} className="border-t-2 ">
          <td style={{ borderColor: Primary() }} className="text-center">
            1
          </td>
          <td style={{ borderColor: Primary() }} className="border-l-2  text-center">
            zucadev
          </td>
          <td style={{ borderColor: Primary() }} className="border-l-2  text-center">
            backend
          </td>
          <td style={{ borderColor: Primary() }} className="border-l-2  text-center">
            <div className=" h-6 w-6 rounded-full bg-yellow-200 mx-auto" />
          </td>
          <td style={{ borderColor: Primary() }} className="border-l-2  text-center">
            27/12/2020
          </td>
          <td style={{ borderColor: Primary() }} className="border-l-2  text-center">
            27/12/2020
          </td>
        </tr>
        <tr style={{ borderColor: Primary() }} className="border-t-2 ">
          <td style={{ borderColor: Primary() }} className="text-center">
            1
          </td>
          <td style={{ borderColor: Primary() }} className="border-l-2  text-center">
            zucadev
          </td>
          <td style={{ borderColor: Primary() }} className="border-l-2  text-center">
            backend
          </td>
          <td style={{ borderColor: Primary() }} className="border-l-2  text-center">
            <div className=" h-6 w-6 rounded-full bg-[#10F74D] mx-auto" />
          </td>
          <td style={{ borderColor: Primary() }} className="border-l-2  text-center">
            27/12/2020
          </td>
          <td style={{ borderColor: Primary() }} className="border-l-2  text-center">
            27/12/2020
          </td>
        </tr>
      </table>
    </div>
  )
}
export default UserProfileAssignedProjects
