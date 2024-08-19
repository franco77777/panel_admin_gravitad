import { SecondaryTextExist, BgDarker, Primary } from '@/theme/theming'

const UserProfileAddress = () => {
  return (
    <div
      style={{
        background: BgDarker(),
        color: SecondaryTextExist(),
        borderColor: Primary(),
      }}
      className="flex flex-col gap-2   border-2  rounded-2xl p-4"
    >
      <div>Adress:</div>
      <div>av bolivar, el carrizal, casa 3-563b, Venezuela edo. Merida codigo postal 5101.</div>
    </div>
  )
}
export default UserProfileAddress
