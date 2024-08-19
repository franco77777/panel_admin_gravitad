import { Search, UsersRound } from 'lucide-react'
import { SecondaryGradientExist, SecondaryTextExist, BgDarker, Primary, Bg } from '@/theme/theming'

const ExcalidrawFilesSection = () => {
  return (
    <div style={{ background: Bg() }} className="min-w-[500px] w-full min-h-[100vh]  md:p-12 p-6 overflow-x-auto ">
      {/* <-------------------------------HEADER-------------------> */}
      <div
        style={{
          color: Primary(),
          backgroundColor: BgDarker(),
        }}
        className="min-w-[500px]   w-full h-14 md:h-16 xl:h-20  flex  justify-between items-center  rounded-2xl px-4  "
      >
        <div
          style={{
            backgroundImage: SecondaryGradientExist(),
          }}
          className="text-[clamp(1.8rem,3cqw,3rem)] gradient-text font-bold leading-normal "
        >
          Conserje
        </div>
        <input
          style={{
            color: SecondaryTextExist(),
            backgroundColor: Bg(),
            borderColor: Primary(),
          }}
          type="text"
          className="rounded-2xl h-10 text-[clamp(1rem,3cqw,1.5rem)]"
        />
        <div style={{ color: SecondaryTextExist() }} className="flex gap-2 items-center">
          <UsersRound strokeWidth={2} className="w-[clamp(30px,3cqw,40px)] h-[clamp(30px,3cqw,40px)]" />
          <UsersRound strokeWidth={2} className="w-[clamp(30px,3cqw,40px)] h-[clamp(30px,3cqw,40px)]" />
        </div>
      </div>

      {/* <-------------------------------BODY-------------------> */}
      <div
        style={{ background: SecondaryGradientExist() }}
        className="min-w-[600px]  w-full h-full bg-orange-400 min-h-[80vh] md:mt-8 mt-4 rounded-xl p-1 "
      >
        <h4
          style={{
            background: SecondaryGradientExist(),
            color: Primary() === '#000000' ? '#ffffff' : '#000000',
          }}
          className="font-bold text-2xl text-center"
        >
          Process History
        </h4>
        <div style={{ background: Bg(), color: SecondaryTextExist() }} className="rounded-xl  p-4  ">
          <div className="flex w-full gap-3 items-end ">
            <div className="flex relative h-9  mt-4 w-full gap-3 ">
              <input
                style={{ borderColor: Primary(), background: BgDarker() }}
                type="text"
                id="search"
                className="w-full rounded-xl border-2"
              />
              {/* <img
                src="../public/icons/search.svg"
                alt=""
                className="w-6 h-6 absolute top-[50%] right-2 center-top pointer-events-none"
              /> */}
              <Search className="w-6 h-6 absolute top-[50%] right-2 center-top pointer-events-none" />
            </div>

            <select
              id="select"
              style={{
                borderColor: Primary(),
                background: BgDarker(),
                color: SecondaryTextExist(),
              }}
              defaultValue="All"
              className=" cursor-pointer border-2  w-[20%] h-9 rounded-xl  py-0 px-2 m-0 font-medium relative"
            >
              <option value="All">All</option>
              <option value="newtab">newtab</option>
              <option value="sametab">sametab</option>
              <option value="parent">parent</option>
              <option value="top">top</option>
              <option value="modal">modal</option>
              <option value="workspace">workspace</option>
            </select>
          </div>
          <div className="w-full h-full text-base font-medium  mt-8 flex gap-2 justify-between">
            <span>project code</span>
            <span>user</span>
            <span>department</span>
            <span>state</span>
            <span>start date</span>
            <span>end date</span>
          </div>
          <div
            style={{ background: BgDarker(), borderColor: Primary() }}
            className="w-full min-h-[60vh]  mt-2 rounded-2xl border-2 "
          />
        </div>
      </div>
    </div>
  )
}

export default ExcalidrawFilesSection
