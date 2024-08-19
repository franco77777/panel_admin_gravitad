import Administration2InputDrag from '@/modules/administration/components/InputDrag'
import { SecondaryTextExist, BgDarker, Primary, Bg } from '@/theme/theming'

const Administration4 = () => {
  return (
    <div
      style={{ color: SecondaryTextExist(), background: Bg() }}
      className="font-normal min-h-screen bg-primary px-[4vw] py-[4vw] w-full"
    >
      <div className=" text-2xl">Create Organization</div>
      <div className="flex gap-4  text-2xl w-full justify-center mb-8">
        <div>Create organization</div>
        <div>/</div>
        <div>Add Branch</div>
      </div>
      <section className="grid gap-8 grid-cols-[repeat(auto-fit,minmax(min(100%,500px),1fr))] mt-[2vw]">
        <Administration2InputDrag />

        <ul style={{ color: SecondaryTextExist() }} className=" flex flex-col gap-4 mt-4 w-full items-center">
          <li>
            <div>Name Organization</div>
            <input
              style={{ borderColor: Primary(), background: BgDarker() }}
              type="text"
              className="border-2 w-[400px]    rounded-xl"
            />
          </li>
          <li>
            <div>Country</div>
            <input
              style={{ borderColor: Primary(), background: BgDarker() }}
              type="text"
              className="border-2 w-[400px]  rounded-xl"
            />
          </li>
          <li>
            {' '}
            <div>State</div>
            <input
              style={{ borderColor: Primary(), background: BgDarker() }}
              type="text"
              className="border-2 w-[400px]  rounded-xl"
            />
          </li>
          <li>
            {' '}
            <div>Address</div>
            <input
              style={{ borderColor: Primary(), background: BgDarker() }}
              type="text"
              className="border-2 w-[400px]  rounded-xl"
            />
          </li>
          <li>
            {' '}
            <div>Branch</div>
            <select
              style={{ borderColor: Primary(), background: BgDarker() }}
              name=""
              id=""
              className="border-2 w-[400px]  rounded-xl cursor-pointer"
            >
              <option value="" disabled selected>
                select branch
              </option>
              <option value="">new branch</option>
              <option value="">branch 1</option>
              <option value="">branch 2</option>
            </select>
          </li>
          <li>
            {' '}
            <div>Name Organization</div>
            <input
              style={{ borderColor: Primary(), background: BgDarker() }}
              type="text"
              className="border-2 w-[400px]  rounded-xl"
            />
          </li>
          <li>
            <button
              type="button"
              style={{
                background: SecondaryTextExist(),
                color: Primary() === '#000000' ? '#ffffff' : '#000000',
              }}
              className="block mt-4 p-2 mx-auto rounded-lg w-fit cursor-pointer  text-base  hover:scale-105 duration-150 "
            >
              Add Organization
            </button>
          </li>
        </ul>
      </section>
    </div>
  )
}
export default Administration4
