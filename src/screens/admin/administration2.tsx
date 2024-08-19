import Administration2Folders from '@/modules/administration/components/folders'
import Administration2InputDrag from '@/modules/administration/components/InputDrag'
import Administration2Table from '@/modules/administration/components/table'
import { storeAdministration } from '@/store/administration/administrationStore'

import { SecondaryGradientExist, Bg, BgDarker, Primary } from '@/theme/theming'

const Administration2 = () => {
  const AdministrationName = storeAdministration((state) => state.name)
  return (
    <div className="font-normal   w-full px-[4vw] py-[4vw] bg-primary min-h-screen">
      <header
        style={{ color: Primary(), backgroundColor: BgDarker() }}
        className="  w-full h-14 md:h-16 xl:h-20 bg-tertiary flex items-center  rounded-2xl px-[2vw] relative"
      >
        <div
          style={{
            backgroundImage: SecondaryGradientExist(),
          }}
          className=" gradient-text   font-semibold absolute top-[50%] left-[2vw] translate-y-[-50%]  text-[clamp(2rem,3cqw,5rem)] "
        >
          {AdministrationName}
        </div>
        <input
          style={{
            borderColor: Primary(),
            backgroundColor: Bg(),
          }}
          type="text"
          className="rounded-xl h-[60%] md:h-10 sm:mx-auto ml-auto "
        />
      </header>
      <section className="grid gap-8 grid-cols-[repeat(auto-fit,minmax(min(100%,500px),1fr))] mt-[2vw]">
        <Administration2InputDrag />
        <Administration2Folders />
      </section>
      <section className=" w-full overflow-x-auto rounded mt-8">
        <Administration2Table />
      </section>
    </div>
  )
}
export default Administration2
