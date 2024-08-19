import { Bg, BgDarker, Primary, SecondaryTextExist } from '@/theme/theming'

const GlobalAdmin4 = () => {
  return (
    <div
      style={{ background: Bg(), color: SecondaryTextExist() }}
      className="flex gap-4 flex-col lg:flex-row min-h-screen p-4 relative"
    >
      <section className="w-full flex-grow flex gap-2 h-auto">
        <div
          style={{ background: BgDarker(), borderColor: Primary() }}
          className="rounded-2xl bg-purple-500 w-1/3 h-auto border-[1px] "
        >
          section1
        </div>
        <div className="  rounded-2xl  w-full flex flex-col gap-2 ">
          <div
            style={{ background: BgDarker(), borderColor: Primary() }}
            className="border-[1px]  h-24 rounded-2xl bg-yellow-500"
          >
            section3
          </div>
          <ul
            style={{ background: BgDarker(), borderColor: Primary() }}
            className="p-2 border-[1px] gap-2  w-full h-full rounded-xl grid grid-cols-[repeat(auto-fill,minmax(min(100%,100px),1fr))] auto-rows-[100px]"
          >
            <li style={{ background: Bg(), borderColor: Primary() }} className="rounded-xl border-[1px]">
              example
            </li>
            <li style={{ background: Bg(), borderColor: Primary() }} className="rounded-xl border-[1px]">
              example
            </li>
            <li style={{ background: Bg(), borderColor: Primary() }} className="rounded-xl border-[1px]">
              example{' '}
            </li>
          </ul>
        </div>
      </section>
      <section style={{ background: BgDarker(), borderColor: Primary() }} className="w-full border-[1px] rounded-2xl">
        party members
      </section>
    </div>
  )
}
export default GlobalAdmin4
