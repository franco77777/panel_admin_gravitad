import type { modalGlobalAdmin3Options } from '@/types/globalAdmin'

const ModalDrawningOption = ({ modalPageOptions: handleCanvas, mouseLeave, mouseOver }: modalGlobalAdmin3Options) => {
  const disableEslint = () => {}
  return (
    <div
      onFocus={disableEslint}
      onKeyDown={disableEslint}
      onMouseLeave={(e) => mouseLeave(e)}
      onMouseOver={(e) => mouseOver(e)}
      onClick={() => handleCanvas('drawning')}
      className="py-1 w-full rounded flex gap-2 cursor-pointer hover:scale-105 duration-150"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 16 16"
        preserveAspectRatio="xMidYMid meet"
        className="w-5 h-5 pointer-events-none"
      >
        <title>image</title>
        <g fill="currentColor" clipPath="url(#EditDrawing_svg__a)">
          <path
            fillRule="evenodd"
            d="M14.032.98a2.6 2.6 0 0 0-3.552.952L5.953 9.774a2.6 2.6 0 0 0-.342 1.482l.239 3.401a.6.6 0 0 0 .861.498l3.066-1.494a2.6 2.6 0 0 0 1.112-1.037l4.528-7.842a2.6 2.6 0 0 0-.952-3.552l-.433-.25ZM11.52 2.532a1.4 1.4 0 0 1 1.912-.512l.433.25a1.4 1.4 0 0 1 .512 1.912l-4.2 7.275-2.857-1.65 4.2-7.275Zm-4.705 8.37c-.01.089-.013.18-.007.27l.177 2.515 2.266-1.105c.082-.04.159-.087.23-.141L6.816 10.9Z"
            clipRule="evenodd"
          />
          <path d="M5.085 14.02a.6.6 0 0 1-.718.453A5.103 5.103 0 0 1 .4 9.5v-.003c0-.335.033-.668.098-.992a.6.6 0 1 1 1.177.234c-.05.249-.075.504-.075.761v.003a3.9 3.9 0 0 0 3.033 3.8.6.6 0 0 1 .452.718ZM5.5 5.6a.6.6 0 1 0 0-1.2 5.1 5.1 0 0 0-.995.098.6.6 0 0 0 .234 1.177c.249-.05.504-.075.761-.075ZM3.333 6.257a.6.6 0 0 0-.666-.998A5.098 5.098 0 0 0 1.26 6.667a.6.6 0 1 0 .997.666 3.899 3.899 0 0 1 1.076-1.076Z" />
        </g>
        <defs>
          <clipPath id="EditDrawing_svg__a">
            <path fill="#fff" d="M0 0h16v16H0z" />
          </clipPath>
        </defs>
      </svg>
      <div className="pointer-events-none">Drawning</div>
    </div>
  )
}
export default ModalDrawningOption
