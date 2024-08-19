import type { modalGlobalAdmin3Options } from '@/types/globalAdmin'

const CodeOption = ({ modalPageOptions: handleCanvas, mouseLeave, mouseOver }: modalGlobalAdmin3Options) => {
  const disableEslint = () => {}
  return (
    <div
      onFocus={disableEslint}
      onKeyDown={disableEslint}
      onMouseLeave={(e) => mouseLeave(e)}
      onMouseOver={(e) => mouseOver(e)}
      onClick={() => handleCanvas('code')}
      className="py-1 w-full rounded flex gap-2 cursor-pointer hover:scale-105 duration-150"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 16 16"
        preserveAspectRatio="xMidYMid meet"
        className=" w-5 h-5 pointer-events-none"
      >
        <title>image</title>
        <path
          fill="currentColor"
          d="M9.098 2.554a.6.6 0 1 0-1.196-.108l-1 11a.6.6 0 1 0 1.196.108l1-11ZM4.924 11.924a.6.6 0 0 1-.848 0l-3.5-3.5a.6.6 0 0 1 0-.848l3.5-3.5a.6.6 0 0 1 .848.848L1.85 8l3.075 3.076a.6.6 0 0 1 0 .848ZM11.076 11.924a.6.6 0 0 0 .848 0l3.5-3.5a.6.6 0 0 0 0-.848l-3.5-3.5a.6.6 0 1 0-.848.848L14.15 8l-3.075 3.076a.6.6 0 0 0 0 .848Z"
        />
      </svg>

      <div className="pointer-events-none">Code Block</div>
    </div>
  )
}
export default CodeOption
