import { Bg, BgDarker, Primary, SecondaryGradientExist, SecondaryTextExist } from '@/theme/theming'
import { Link, useNavigate } from 'react-router-dom'

const GlobalAdmin2 = () => {
  const navigate = useNavigate()
  const disableEslint = () => {}
  return (
    <div
      style={{
        backgroundColor: Bg(),
        color: SecondaryTextExist(),
      }}
      className="w-full min-h-screen h-full p-4 flex gap-4"
    >
      <section
        style={{
          backgroundColor: BgDarker(),
        }}
        className="bg-red-500 w-1/4 rounded-2xl"
      >
        <div>section 1</div>
      </section>
      <div className="flex flex-col gap-4 w-full">
        <section className=" w-full rounded-2xl  ">
          <div
            style={{
              //backgroundColor: BgDarker(),
              background: SecondaryGradientExist(),
            }}
            className="rounded-2xl overflow-hidden"
          >
            <div className=" w-[calc(100%-6px)] h-[calc(100%-6px)] rounded-2xl  my-[3px] ml-[3px] ">
              <div
                style={{
                  backgroundColor: Primary(),
                  backgroundImage: SecondaryGradientExist(),
                  color: Primary() === '#000000' ? '#ffffff' : '#000000',
                }}
                className="text-2xl font-semibold text-center "
              >
                Projects
              </div>
              <ul
                style={{ background: BgDarker() }}
                className=" rounded-xl p-2 grid grid-cols-[repeat(auto-fit,minmax(min(100%,150px),1fr))] auto-rows-[150px] gap-2"
              >
                <li
                  style={{
                    backgroundColor: Bg(),
                    borderColor: Primary(),
                  }}
                  className="bg-blue-500 rounded-xl w-full h-full border-[1px] p-2 break-words"
                >
                  organization example
                </li>
                <li
                  style={{
                    backgroundColor: Bg(),
                    borderColor: Primary(),
                  }}
                  className="bg-blue-500 rounded-xl w-full h-full border-[1px] p-2 break-words"
                >
                  organizationdddddddd example
                </li>
                <li
                  style={{
                    backgroundColor: Bg(),
                    borderColor: Primary(),
                  }}
                  className="bg-blue-500 rounded-xl w-full h-full border-[1px] p-2 break-words"
                >
                  organizationdddddddd example
                </li>
                <li
                  style={{
                    backgroundColor: Bg(),
                    borderColor: Primary(),
                  }}
                  className="bg-blue-500 rounded-xl w-full h-full border-[1px] p-2 break-words"
                >
                  organizationdddddddd example
                </li>
                <li
                  style={{
                    backgroundColor: Bg(),
                    borderColor: Primary(),
                  }}
                  className="bg-blue-500 rounded-xl w-full h-full border-[1px] p-2 break-words"
                >
                  organizationdddddddd example
                </li>
                <li
                  style={{
                    backgroundColor: Bg(),
                    borderColor: Primary(),
                  }}
                  className="bg-blue-500 rounded-xl w-full h-full border-[1px] p-2 break-words"
                >
                  organizationdddddddd example
                </li>

                <li
                  style={{
                    backgroundColor: Bg(),
                    borderColor: Primary(),
                  }}
                  className=" rounded-xl w-full h-full border-[1px] p-2 break-words"
                >
                  <Link className="w-full h-full flex justify-center items-center" to={'/global-admin-3'}>
                    + add
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className=" w-full rounded-2xl  ">
          <div
            style={{
              //backgroundColor: BgDarker(),
              background: SecondaryGradientExist(),
            }}
            className="rounded-2xl overflow-hidden"
          >
            <div className=" w-[calc(100%-6px)] h-[calc(100%-6px)] rounded-2xl  my-[3px] ml-[3px] ">
              <div
                style={{
                  backgroundColor: Primary(),
                  backgroundImage: SecondaryGradientExist(),
                  color: Primary() === '#000000' ? '#ffffff' : '#000000',
                }}
                className="text-2xl font-semibold text-center "
              >
                Teams
              </div>
              <ul
                style={{ background: BgDarker() }}
                className=" rounded-xl p-2 grid grid-cols-[repeat(auto-fit,minmax(min(100%,150px),1fr))] auto-rows-[150px] gap-2"
              >
                <li
                  style={{
                    backgroundColor: Bg(),
                    borderColor: Primary(),
                  }}
                  className=" rounded-xl w-full h-full border-[1px] p-2 break-words"
                >
                  organization example
                </li>
                <li
                  style={{
                    backgroundColor: Bg(),
                    borderColor: Primary(),
                  }}
                  className="bg-blue-500 rounded-xl w-full h-full border-[1px] p-2 break-words"
                >
                  organizationdddddddd example
                </li>
                <li
                  style={{
                    backgroundColor: Bg(),
                    borderColor: Primary(),
                  }}
                  className="bg-blue-500 rounded-xl w-full h-full border-[1px] p-2 break-words"
                >
                  organizationdddddddd example
                </li>
                <li
                  style={{
                    backgroundColor: Bg(),
                    borderColor: Primary(),
                  }}
                  className="bg-blue-500 rounded-xl w-full h-full border-[1px] p-2 break-words"
                >
                  organizationdddddddd example
                </li>
                <li
                  style={{
                    backgroundColor: Bg(),
                    borderColor: Primary(),
                  }}
                  className="bg-blue-500 rounded-xl w-full h-full border-[1px] p-2 break-words"
                >
                  organizationdddddddd example
                </li>
                <li
                  style={{
                    backgroundColor: Bg(),
                    borderColor: Primary(),
                  }}
                  className="bg-blue-500 rounded-xl w-full h-full border-[1px] p-2 break-words"
                >
                  organizationdddddddd example
                </li>

                <li
                  onKeyDown={disableEslint}
                  onClick={() => navigate('/global-admin-4')}
                  style={{
                    backgroundColor: Bg(),
                    borderColor: Primary(),
                  }}
                  className="cursor-pointer flex justify-center items-center bg-blue-500 rounded-xl w-full h-full border-[1px] p-2 break-words"
                >
                  + add
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
export default GlobalAdmin2
