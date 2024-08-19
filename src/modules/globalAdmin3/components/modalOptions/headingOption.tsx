import type { modalGlobalAdmin3Options } from '@/types/globalAdmin'

const ModalHeadingOption = ({ modalPageOptions: handleCanvas, mouseLeave, mouseOver }: modalGlobalAdmin3Options) => {
  const disableEslint = () => {}
  return (
    <div
      onFocus={disableEslint}
      onKeyDown={disableEslint}
      onMouseLeave={(e) => mouseLeave(e)}
      onMouseOver={(e) => mouseOver(e)}
      onClick={() => handleCanvas('heading')}
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
          d="M1.6 2.5a.6.6 0 1 0-1.2 0v11a.6.6 0 1 0 1.2 0V8.457h6.3V13.5a.6.6 0 1 0 1.2 0v-11a.6.6 0 0 0-1.2 0v4.757H1.6V2.5ZM13.6 7a.6.6 0 1 0-1.2 0v.75a.4.4 0 0 1-.4.4h-.75a.6.6 0 0 0 0 1.2H12c.138 0 .272-.017.4-.05v3.6h-1.15a.6.6 0 0 0 0 1.2h3.5a.6.6 0 1 0 0-1.2H13.6V7Z"
        />
      </svg>

      <div className="pointer-events-none">Heading 1</div>
    </div>
  )
}
export default ModalHeadingOption
