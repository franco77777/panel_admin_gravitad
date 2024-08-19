import type { modalGlobalAdmin3Options } from '@/types/globalAdmin'

const ModalHeading3Option = ({ modalPageOptions: handleCanvas, mouseLeave, mouseOver }: modalGlobalAdmin3Options) => {
  const disableEslint = () => {}
  return (
    <div
      onFocus={disableEslint}
      onKeyDown={disableEslint}
      onMouseLeave={(e) => mouseLeave(e)}
      onMouseOver={(e) => mouseOver(e)}
      onClick={() => handleCanvas('heading3')}
      className="py-1 w-full rounded flex gap-2 cursor-pointer hover:scale-105 duration-150"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 16 16"
        preserveAspectRatio="xMidYMid meet"
        className="ml-[1px] w-5 h-5 pointer-events-none"
      >
        <title>image</title>
        <path
          fill="currentColor"
          d="M1.6 2.5a.6.6 0 1 0-1.2 0v11a.6.6 0 1 0 1.2 0V8.457h6.3V13.5a.6.6 0 1 0 1.2 0v-11a.6.6 0 0 0-1.2 0v4.757H1.6V2.5ZM11 6.4a.6.6 0 0 0 0 1.2h2.052l-1.476 1.476A.6.6 0 0 0 12 10.1h1a.9.9 0 0 1 .9.9v.75a1.15 1.15 0 1 1-2.3 0v-.25a.6.6 0 0 0-1.2 0v.25a2.35 2.35 0 0 0 4.7 0V11a2.1 2.1 0 0 0-1.691-2.06l1.515-1.516A.6.6 0 0 0 14.5 6.4H11Z"
        />
      </svg>

      <div className="pointer-events-none">Heading 3</div>
    </div>
  )
}
export default ModalHeading3Option
