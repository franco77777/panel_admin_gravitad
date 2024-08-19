import { Link, useNavigate } from 'react-router-dom'
import { SecondaryGradientExist, SecondaryTextExist, Bg, BgDarker, Primary } from '@/theme/theming'

import { storeTheme } from '@/store/theme/theme'

import { useState } from 'react'
import { CircleUserRound } from 'lucide-react'
import { storeAdministration } from '@/store/administration/administrationStore'
import ModalTheming from '@/modules/administration/components/modalTheming'

const Administration = () => {
  const SetAdministrationName = storeAdministration((state) => state.setName)
  const Theme = storeTheme((state) => state.primary)

  const [handleModal, setHandleModal] = useState(false)
  const navigate = useNavigate()
  const handleAdministration2 = (value: string) => {
    SetAdministrationName(value)
    if (value === 'Organizations') {
      navigate('/administration-3')
      return
    }

    navigate('/administration-2')
  }
  const HandleProfile = () => {
    navigate('/user-profile')
  }

  const handleTest = () => {
    navigate('/excalidrawFiles2/section')
  }

  const color = 'text-red-500'
  const disableEslint = () => {}
  return (
    <div
      style={{
        backgroundColor: Bg(),
      }}
      className="font-normal w-full px-[4vw] py-[4vw]  min-h-screen relative"
    >
      {handleModal ? <ModalTheming /> : ''}

      <header
        style={{
          color: Primary(),
          backgroundColor: BgDarker(),
        }}
        className=" w-full h-12 md:h-14 xl:h-16  rounded-2xl bg  flex items-center justify-between px-[2vw] "
      >
        <div
          onKeyDown={disableEslint}
          onClick={() => setHandleModal(!handleModal)}
          className=" font-semibold gradient-text text-[clamp(1.8rem,3cqw,2.5rem)]"
          style={{
            backgroundImage: SecondaryGradientExist(),
          }}
        >
          User Name
        </div>

        <Link to={'/global-admin'}>
          <div
            //onClick={() => setHandleModal(!handleModal)}

            //className=" font-semibold gradient-text text-[clamp(1.8rem,3cqw,2.5rem)]"
            className={`${color} font-semibold text-[clamp(1.8rem,3cqw,2.5rem)]`}
            style={{
              backgroundImage: SecondaryGradientExist(),
            }}
          >
            User Name
          </div>
        </Link>
        <div
          onKeyDown={disableEslint}
          style={{ color: SecondaryTextExist() }}
          onClick={() => HandleProfile()}
          className="cursor-pointer hover:scale-105 duration-100"
        >
          <CircleUserRound size={40} strokeWidth={2} />
        </div>
      </header>
      <div
        style={{
          color: Primary(),
          backgroundColor: BgDarker(),
        }}
        className="  w-full h-14 md:h-16 xl:h-20  flex  items-center mt-[2vw] rounded-2xl px-[2vw] relative "
      >
        <div
          onKeyDown={disableEslint}
          //onClick={() => setColor("text-blue-500")}
          onClick={handleTest}
          style={{
            backgroundImage: SecondaryGradientExist(),
          }}
          className="text-[clamp(2rem,3cqw,3rem)] absolute top-[50%] left-[2vw] translate-y-[-50%] gradient-text font-bold"
        >
          Gravitad
        </div>
        <input
          style={{
            color: SecondaryTextExist(),
            backgroundColor: Bg(),
            borderColor: Primary(),
          }}
          type="text"
          className="rounded-2xl h-[60%] ml-auto md:mx-auto text-[clamp(1rem,3cqw,2rem)]"
        />
      </div>
      <section className="grid gap-[1vw] grid-cols-[repeat(auto-fit,minmax(min(100%,400px),1fr))] 2xl:grid-cols-3 mt-[2vw]">
        <div
          onKeyDown={disableEslint}
          style={{
            //backgroundColor: BgDarker(),
            background: SecondaryGradientExist(),
          }}
          onClick={() => handleAdministration2('Organizations')}
          className="    rounded-2xl     "
        >
          <div
            style={{
              //backgroundColor: BgDarker(),
              backgroundColor: BgDarker(),
            }}
            className="w-[calc(100%-10px)] h-[calc(100%-10px)] rounded-2xl  my-[5px] ml-[5px] "
          >
            <div
              style={{
                backgroundColor: Primary(),
                backgroundImage: SecondaryGradientExist(),
                color: Primary() === '#000000' ? '#ffffff' : '#000000',
              }}
              className="text-2xl font-semibold "
            >
              Organizations
            </div>
            <ul style={{ color: SecondaryTextExist() }} className="grid gap-3 grid-cols-3 grid-rows-2 p-3">
              <li
                style={{
                  backgroundColor: Bg(),
                }}
                className="   rounded"
              >
                1
              </li>
              <li
                style={{
                  borderColor: Primary(),

                  backgroundColor: Bg(),
                }}
                className="  "
              >
                2
              </li>
              <li
                style={{
                  borderColor: Primary(),

                  backgroundColor: Bg(),
                }}
                className="   rounded"
              >
                3
              </li>
              <li
                style={{
                  borderColor: Primary(),

                  backgroundColor: Bg(),
                }}
                className="  "
              >
                4
              </li>
              <li
                style={{
                  borderColor: Primary(),

                  backgroundColor: Bg(),
                }}
                className="   rounded"
              >
                5
              </li>
              <li
                style={{
                  borderColor: Primary(),

                  backgroundColor: Bg(),
                }}
                className="   rounded"
              >
                6
              </li>
            </ul>
          </div>
        </div>
        <div
          onKeyDown={disableEslint}
          style={{
            background: SecondaryGradientExist(),
          }}
          onClick={() => handleAdministration2('Structure')}
          className="   rounded-2xl "
        >
          <div
            style={{
              //backgroundColor: BgDarker(),
              backgroundColor: BgDarker(),
            }}
            className="w-[calc(100%-10px)] h-[calc(100%-10px)] rounded-b-xl overflow-hidden  my-[5px] ml-[5px] flex flex-col "
          >
            <div
              style={{
                color: Primary() === '#000000' ? '#ffffff' : '#000000',
                background: SecondaryGradientExist(),
              }}
              className=" text-2xl font-semibold "
            >
              Structure
            </div>
            <div
              style={{
                backgroundColor: Bg(),
              }}
              className="  flex items-center justify-center h-full m-3 rounded"
            >
              <div className={` ${Theme ? `text-[${Primary()}]` : ''}`}>IMAGE FILE</div>
            </div>
          </div>
        </div>
        <div
          onKeyDown={disableEslint}
          style={{
            background: SecondaryGradientExist(),
          }}
          onClick={() => handleAdministration2('Structure')}
          className="   rounded-2xl "
        >
          <div
            style={{
              //backgroundColor: BgDarker(),
              backgroundColor: BgDarker(),
            }}
            className="w-[calc(100%-10px)] h-[calc(100%-10px)] rounded-b-xl overflow-hidden  my-[5px] ml-[5px] flex flex-col "
          >
            <div
              style={{
                color: Primary() === '#000000' ? '#ffffff' : '#000000',
                background: SecondaryGradientExist(),
              }}
              className=" text-2xl font-semibold "
            >
              Documents
            </div>
            <div
              style={{
                backgroundColor: Bg(),
              }}
              className="  flex items-center justify-center h-full m-3 rounded"
            >
              <div className={` ${Theme ? `text-[${Primary()}]` : ''}`}>IMAGE FILE</div>
            </div>
          </div>
        </div>
        <div
          onKeyDown={disableEslint}
          style={{
            //backgroundColor: BgDarker(),
            background: SecondaryGradientExist(),
          }}
          onClick={() => handleAdministration2('Organizations')}
          className="    rounded-2xl     "
        >
          <div
            style={{
              //backgroundColor: BgDarker(),
              backgroundColor: BgDarker(),
            }}
            className="w-[calc(100%-10px)] h-[calc(100%-10px)] rounded-2xl  my-[5px] ml-[5px] "
          >
            <div
              style={{
                backgroundColor: Primary(),
                backgroundImage: SecondaryGradientExist(),
                color: Primary() === '#000000' ? '#ffffff' : '#000000',
              }}
              className="text-2xl font-semibold "
            >
              Api Tools
            </div>
            <ul style={{ color: SecondaryTextExist() }} className="grid gap-3 grid-cols-3 grid-rows-2 p-3">
              <li
                style={{
                  backgroundColor: Bg(),
                }}
                className="   rounded"
              >
                1
              </li>
              <li
                style={{
                  borderColor: Primary(),

                  backgroundColor: Bg(),
                }}
                className="  "
              >
                2
              </li>
              <li
                style={{
                  borderColor: Primary(),

                  backgroundColor: Bg(),
                }}
                className="   rounded"
              >
                3
              </li>
              <li
                style={{
                  borderColor: Primary(),

                  backgroundColor: Bg(),
                }}
                className="  "
              >
                4
              </li>
              <li
                style={{
                  borderColor: Primary(),

                  backgroundColor: Bg(),
                }}
                className="   rounded"
              >
                5
              </li>
              <li
                style={{
                  borderColor: Primary(),

                  backgroundColor: Bg(),
                }}
                className="   rounded"
              >
                6
              </li>
            </ul>
          </div>
        </div>
        <div
          onKeyDown={disableEslint}
          style={{
            //backgroundColor: BgDarker(),
            background: SecondaryGradientExist(),
          }}
          onClick={() => handleAdministration2('Organizations')}
          className="    rounded-2xl     "
        >
          <div
            style={{
              //backgroundColor: BgDarker(),
              backgroundColor: BgDarker(),
            }}
            className="w-[calc(100%-10px)] h-[calc(100%-10px)] rounded-2xl  my-[5px] ml-[5px] "
          >
            <div
              style={{
                backgroundColor: Primary(),
                backgroundImage: SecondaryGradientExist(),
                color: Primary() === '#000000' ? '#ffffff' : '#000000',
              }}
              className="text-2xl font-semibold "
            >
              Staff
            </div>
            <ul style={{ color: SecondaryTextExist() }} className="grid gap-3 grid-cols-3 grid-rows-2 p-3">
              <li
                style={{
                  backgroundColor: Bg(),
                }}
                className="   rounded"
              >
                1
              </li>
              <li
                style={{
                  borderColor: Primary(),

                  backgroundColor: Bg(),
                }}
                className="  "
              >
                2
              </li>
              <li
                style={{
                  borderColor: Primary(),

                  backgroundColor: Bg(),
                }}
                className="   rounded"
              >
                3
              </li>
              <li
                style={{
                  borderColor: Primary(),

                  backgroundColor: Bg(),
                }}
                className="  "
              >
                4
              </li>
              <li
                style={{
                  borderColor: Primary(),

                  backgroundColor: Bg(),
                }}
                className="   rounded"
              >
                5
              </li>
              <li
                style={{
                  borderColor: Primary(),

                  backgroundColor: Bg(),
                }}
                className="   rounded"
              >
                6
              </li>
            </ul>
          </div>
        </div>
        <div
          onKeyDown={disableEslint}
          style={{
            //backgroundColor: BgDarker(),
            background: SecondaryGradientExist(),
          }}
          onClick={() => handleAdministration2('Organizations')}
          className="    rounded-2xl     "
        >
          <div
            style={{
              //backgroundColor: BgDarker(),
              backgroundColor: BgDarker(),
            }}
            className="w-[calc(100%-10px)] h-[calc(100%-10px)] rounded-2xl  my-[5px] ml-[5px] "
          >
            <div
              style={{
                backgroundColor: Primary(),
                backgroundImage: SecondaryGradientExist(),
                color: Primary() === '#000000' ? '#ffffff' : '#000000',
              }}
              className="text-2xl font-semibold "
            >
              Tools
            </div>
            <ul style={{ color: SecondaryTextExist() }} className="grid gap-3 grid-cols-3 grid-rows-2 p-3">
              <li
                style={{
                  backgroundColor: Bg(),
                }}
                className="   rounded"
              >
                1
              </li>
              <li
                style={{
                  borderColor: Primary(),

                  backgroundColor: Bg(),
                }}
                className="  "
              >
                2
              </li>
              <li
                style={{
                  borderColor: Primary(),

                  backgroundColor: Bg(),
                }}
                className="   rounded"
              >
                3
              </li>
              <li
                style={{
                  borderColor: Primary(),

                  backgroundColor: Bg(),
                }}
                className="  "
              >
                4
              </li>
              <li
                style={{
                  borderColor: Primary(),

                  backgroundColor: Bg(),
                }}
                className="   rounded"
              >
                5
              </li>
              <li
                style={{
                  borderColor: Primary(),

                  backgroundColor: Bg(),
                }}
                className="   rounded"
              >
                6
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
export default Administration
