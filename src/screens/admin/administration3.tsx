import Administration2Table from '@/modules/administration/components/table'
import { SecondaryGradientExist, SecondaryTextExist, BgDarker, Primary, Bg } from '@/theme/theming'
import { CircleUserRound } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const Administration3 = () => {
  const navigate = useNavigate()
  const handlePage = () => {
    navigate('/administration-4')
  }
  const disableEslint = () => {}
  return (
    <div style={{ background: Bg() }} className=" font-normal min-h-screen bg-primary px-[4vw] py-[4vw] w-full">
      {/* <div className="text-secondary w-full h-12 md:h-14 xl:h-16 bg-tertiary rounded bg  flex items-center justify-between px-[2vw]">
        <div>user name </div>
        <div>user image</div>
      </div> */}
      <header
        style={{
          color: SecondaryTextExist(),
          backgroundColor: BgDarker(),
        }}
        className=" w-full h-12 md:h-14 xl:h-16  rounded-2xl bg  flex items-center justify-between px-[2vw] "
      >
        <div
          className=" font-semibold gradient-text text-[clamp(2rem,3cqw,5rem)]"
          style={{
            backgroundImage: SecondaryGradientExist(),
          }}
        >
          User Name
        </div>
        <div className="cursor-pointer hover:scale-105 duration-100">
          <CircleUserRound size={40} strokeWidth={2} />
        </div>
      </header>
      <div className=" overflow-x-auto rounded mt-8">
        <Administration2Table />
      </div>

      <button
        type="button"
        onKeyDown={disableEslint}
        style={{
          background: SecondaryTextExist(),
          color: Primary() === '#000000' ? '#ffffff' : '#000000',
        }}
        onClick={handlePage}
        className="block mt-4 p-2 rounded-xl w-fit cursor-pointer ml-auto text-base  hover:scale-105 duration-150 "
      >
        Add Organization
      </button>
    </div>
  )
}
export default Administration3
