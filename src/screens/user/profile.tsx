import UserProfileAddress from '@/modules/users/components/adress'
import UserProfileAssignedProjects from '@/modules/users/components/assignedProjects'
import UserProfileContact from '@/modules/users/components/contact'
import UserProfileFiles from '@/modules/users/components/files'
import UserProfileOrganizations from '@/modules/users/components/organizations'
import PersonalInformation from '@/modules/users/components/personalInformation'
import UserProfileWallet from '@/modules/users/components/wallet'
import { SecondaryGradientExist, SecondaryTextExist, Bg, BgDarker, Primary } from '@/theme/theming'

import { CircleUserRound, Settings, UsersRound } from 'lucide-react'

const Profile = () => {
  return (
    <div style={{ background: Bg() }} className="font-normal text-base   w-full px-[4vw] py-[4vw] bg-primary min-h-screen">
      <header
        style={{
          color: Primary(),
          backgroundColor: BgDarker(),
        }}
        className=" w-full h-12 md:h-14 xl:h-16  rounded-2xl bg  flex items-center justify-between px-[2vw] "
      >
        <div
          className=" font-semibold gradient-text text-[clamp(1.5rem,3cqw,2.5rem)]"
          style={{
            backgroundImage: SecondaryGradientExist(),
          }}
        >
          User Name
        </div>

        {/* <Link to={"/administration"}>
          <div
            className=" font-semibold gradient-text text-[clamp(1.5rem,3cqw,2.5rem)]"
            style={{
              backgroundImage: SecondaryExist(),
            }}
          >
            User Name
          </div>
        </Link> */}
        <div style={{ color: SecondaryTextExist() }} className="cursor-pointer hover:scale-105 duration-100">
          <CircleUserRound size={40} strokeWidth={2} />
        </div>
      </header>
      {/* <section className="text-secondary w-full h-16 md:h-20 xl:h-24 bg-tertiary flex items-center justify-between rounded px-[2vw] mt-4">
        <div className="text-[clamp(1.25rem,3cqw,2.5rem)]">Gravitad</div>
        <input
          type="text"
          className="rounded h-10 bg-primary border-secondary lg:w-[300px]"
        />
        <div className="flex gap-2">
          <UsersRound size={40} strokeWidth={2} />
          <UsersRound size={40} strokeWidth={2} />
          <Settings size={40} strokeWidth={2} />
        </div>
      </section> */}
      <div
        style={{
          color: Primary(),
          backgroundColor: BgDarker(),
        }}
        className="  w-full h-14 md:h-16 xl:h-20  flex  justify-between items-center mt-[2vw] rounded-2xl px-[2vw]  "
      >
        <div
          style={{
            backgroundImage: SecondaryGradientExist(),
          }}
          className="text-[clamp(1.5rem,3cqw,3rem)] gradient-text font-bold leading-normal "
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
          className="rounded-2xl   text-[clamp(1rem,3cqw,1.5rem)]"
        />
        <div style={{ color: SecondaryTextExist() }} className="flex gap-2 items-center">
          <UsersRound strokeWidth={2} className="w-[clamp(30px,3cqw,40px)] h-[clamp(30px,3cqw,40px)]" />
          <UsersRound strokeWidth={2} className="w-[clamp(30px,3cqw,40px)] h-[clamp(30px,3cqw,40px)]" />
          <Settings strokeWidth={2} className="w-[clamp(30px,3cqw,40px)] h-[clamp(30px,3cqw,40px)]" />
        </div>
      </div>
      <section className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,500px),1fr))] lg:grid-cols-2 gap-4 mt-8">
        <PersonalInformation />
        <div className="flex flex-col gap-2">
          <UserProfileAddress />
          <UserProfileFiles />
        </div>
        <UserProfileWallet />
        <UserProfileContact />
      </section>
      <section>
        <UserProfileAssignedProjects />
      </section>
      <section>
        <UserProfileOrganizations />
      </section>
    </div>
  )
}
export default Profile
