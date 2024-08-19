import { SecondaryGradientExist, SecondaryTextExist, Bg, BgDarker, Primary } from '@/theme/theming'
import { SquarePlus } from 'lucide-react'

const Administration2Folders = () => {
  return (
    <ul className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(350px,1fr))] ">
      <li style={{ background: SecondaryGradientExist() }} className=" bg-red-500 p-[5px] rounded-2xl">
        <div className="rounded-2xl overflow-hidden">
          <div
            style={{
              background: SecondaryGradientExist(),
              color: Primary() === '#000000' ? '#ffffff' : '#000000',
            }}
            className="pl-2 "
          >
            Folder
          </div>
          <div style={{ background: BgDarker() }} className="flex gap-4  p-2">
            <ul style={{ color: SecondaryTextExist() }} className="grid grid-cols-4 w-1/2 gap-2">
              <li style={{ background: Bg() }}>1</li>
              <li style={{ background: Bg() }}>2</li>
              <li style={{ background: Bg() }}>3</li>
              <li style={{ background: Bg() }}>4</li>
              <li style={{ background: Bg() }}>5</li>
              <li style={{ background: Bg() }}>6</li>
              <li style={{ background: Bg() }}>7</li>
              <li style={{ background: Bg() }}>8</li>
              <li style={{ background: Bg() }}>9</li>
              <li style={{ background: Bg() }}>10</li>
              <li style={{ background: Bg() }}>11</li>
              <li style={{ background: Bg() }}>12</li>
            </ul>
            <div className="flex flex-col justify-center items-center gap-2 w-1/2">
              <input
                style={{
                  background: Bg(),
                  borderColor: Primary(),
                  color: SecondaryTextExist(),
                }}
                type="text"
                className="rounded-xl h-10   w-full"
              />
              <div style={{ color: Primary() }} className="">
                <SquarePlus size={24} strokeWidth={2} className="cursor-pointer hover:scale-105 duration-150 " />
              </div>
            </div>
          </div>
        </div>
      </li>
      <li style={{ background: SecondaryGradientExist() }} className=" bg-red-500 p-[5px] rounded-2xl">
        <div className="rounded-2xl overflow-hidden">
          <div
            style={{
              background: SecondaryGradientExist(),
              color: Primary() === '#000000' ? '#ffffff' : '#000000',
            }}
            className="pl-2 "
          >
            Users
          </div>
          <div style={{ background: BgDarker() }} className="flex gap-4  p-2">
            <ul style={{ color: SecondaryTextExist() }} className="grid grid-cols-4 w-1/2 gap-2">
              <li style={{ background: Bg() }}>1</li>
              <li style={{ background: Bg() }}>2</li>
              <li style={{ background: Bg() }}>3</li>
              <li style={{ background: Bg() }}>4</li>
              <li style={{ background: Bg() }}>5</li>
              <li style={{ background: Bg() }}>6</li>
              <li style={{ background: Bg() }}>7</li>
              <li style={{ background: Bg() }}>8</li>
              <li style={{ background: Bg() }}>9</li>
              <li style={{ background: Bg() }}>10</li>
              <li style={{ background: Bg() }}>11</li>
              <li style={{ background: Bg() }}>12</li>
            </ul>
            <div className="flex flex-col justify-center items-center gap-2 w-1/2">
              <input style={{ background: Bg(), borderColor: Primary() }} type="text" className="rounded-xl h-10   w-full" />
              <div style={{ color: Primary() }} className="">
                <SquarePlus size={24} strokeWidth={2} className="cursor-pointer hover:scale-105 duration-150 " />
              </div>
            </div>
          </div>
        </div>
      </li>
      <li style={{ background: SecondaryGradientExist() }} className=" bg-red-500 p-[5px] rounded-2xl">
        <div className="rounded-2xl overflow-hidden">
          <div
            style={{
              background: SecondaryGradientExist(),
              color: Primary() === '#000000' ? '#ffffff' : '#000000',
            }}
            className="pl-2 "
          >
            Organizations
          </div>
          <div style={{ background: BgDarker() }} className="flex gap-4  p-2">
            <ul style={{ color: SecondaryTextExist() }} className="grid grid-cols-4 w-1/2 gap-2">
              <li style={{ background: Bg() }}>1</li>
              <li style={{ background: Bg() }}>2</li>
              <li style={{ background: Bg() }}>3</li>
              <li style={{ background: Bg() }}>4</li>
              <li style={{ background: Bg() }}>5</li>
              <li style={{ background: Bg() }}>6</li>
              <li style={{ background: Bg() }}>7</li>
              <li style={{ background: Bg() }}>8</li>
              <li style={{ background: Bg() }}>9</li>
              <li style={{ background: Bg() }}>10</li>
              <li style={{ background: Bg() }}>11</li>
              <li style={{ background: Bg() }}>12</li>
            </ul>
            <div className="flex flex-col justify-center items-center gap-2 w-1/2">
              <input style={{ background: Bg(), borderColor: Primary() }} type="text" className="rounded-xl h-10   w-full" />
              <div style={{ color: Primary() }} className="">
                <SquarePlus size={24} strokeWidth={2} className="cursor-pointer hover:scale-105 duration-150 " />
              </div>
            </div>
          </div>
        </div>
      </li>
      <li style={{ background: SecondaryGradientExist() }} className=" bg-red-500 p-[5px] rounded-2xl">
        <div className="rounded-2xl overflow-hidden">
          <div
            style={{
              background: SecondaryGradientExist(),
              color: Primary() === '#000000' ? '#ffffff' : '#000000',
            }}
            className="pl-2 "
          >
            Branch
          </div>
          <div style={{ background: BgDarker() }} className="flex gap-4  p-2">
            <ul style={{ color: SecondaryTextExist() }} className="grid grid-cols-4 w-1/2 gap-2">
              <li style={{ background: Bg() }}>1</li>
              <li style={{ background: Bg() }}>2</li>
              <li style={{ background: Bg() }}>3</li>
              <li style={{ background: Bg() }}>4</li>
              <li style={{ background: Bg() }}>5</li>
              <li style={{ background: Bg() }}>6</li>
              <li style={{ background: Bg() }}>7</li>
              <li style={{ background: Bg() }}>8</li>
              <li style={{ background: Bg() }}>9</li>
              <li style={{ background: Bg() }}>10</li>
              <li style={{ background: Bg() }}>11</li>
              <li style={{ background: Bg() }}>12</li>
            </ul>
            <div className="flex flex-col justify-center items-center gap-2 w-1/2">
              <input style={{ background: Bg(), borderColor: Primary() }} type="text" className="rounded-xl h-10   w-full" />
              <div style={{ color: Primary() }} className="">
                <SquarePlus size={24} strokeWidth={2} className="cursor-pointer hover:scale-105 duration-150 " />
              </div>
            </div>
          </div>
        </div>
      </li>
      <li style={{ background: SecondaryGradientExist() }} className=" bg-red-500 p-[5px] rounded-2xl">
        <div className="rounded-2xl overflow-hidden">
          <div
            style={{
              background: SecondaryGradientExist(),
              color: Primary() === '#000000' ? '#ffffff' : '#000000',
            }}
            className="pl-2 "
          >
            Department
          </div>
          <div style={{ background: BgDarker() }} className="flex gap-4  p-2">
            <ul style={{ color: SecondaryTextExist() }} className="grid grid-cols-4 w-1/2 gap-2">
              <li style={{ background: Bg() }}>1</li>
              <li style={{ background: Bg() }}>2</li>
              <li style={{ background: Bg() }}>3</li>
              <li style={{ background: Bg() }}>4</li>
              <li style={{ background: Bg() }}>5</li>
              <li style={{ background: Bg() }}>6</li>
              <li style={{ background: Bg() }}>7</li>
              <li style={{ background: Bg() }}>8</li>
              <li style={{ background: Bg() }}>9</li>
              <li style={{ background: Bg() }}>10</li>
              <li style={{ background: Bg() }}>11</li>
              <li style={{ background: Bg() }}>12</li>
            </ul>
            <div className="flex flex-col justify-center items-center gap-2 w-1/2">
              <input style={{ background: Bg(), borderColor: Primary() }} type="text" className="rounded-xl h-10   w-full" />
              <div style={{ color: Primary() }} className="">
                <SquarePlus size={24} strokeWidth={2} className="cursor-pointer hover:scale-105 duration-150 " />
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  )
}
export default Administration2Folders
