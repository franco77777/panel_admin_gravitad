import { Bg, BgDarker, Primary } from '@/theme/theming'

const Ga3section = () => {
  return (
    <div className="flex gap-2">
      <div
        style={{ background: BgDarker(), borderColor: Primary() }}
        className="rounded-2xl bg-purple-500 w-1/3 h-auto border-[1px] "
      >
        section1
      </div>
      <div className="  rounded-2xl  w-full flex flex-col gap-2 ">
        <div style={{ background: BgDarker(), borderColor: Primary() }} className="border-[1px]  h-24 rounded-2xl bg-yellow-500">
          section3
        </div>
        <ul
          style={{ background: BgDarker(), borderColor: Primary() }}
          className="p-2 border-[1px] gap-2  w-full h-full rounded-xl grid grid-cols-[repeat(auto-fill,minmax(min(100%,100px),1fr))] auto-rows-[100px]"
        >
          <li style={{ background: Bg(), borderColor: Primary() }} className="grid place-items-center rounded-xl border-[1px]">
            example
          </li>
          <li style={{ background: Bg(), borderColor: Primary() }} className="grid place-items-center rounded-xl border-[1px]">
            example
          </li>
          <li style={{ background: Bg(), borderColor: Primary() }} className="grid place-items-center rounded-xl border-[1px]">
            example{' '}
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Ga3section
