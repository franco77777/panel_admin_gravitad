import type { modalGlobalAdmin3Options } from '@/types/globalAdmin'

const ModalHeading2Option = ({ modalPageOptions: handleCanvas, mouseLeave, mouseOver }: modalGlobalAdmin3Options) => {
  const disableEslint = () => {}
  return (
    <div
      onFocus={disableEslint}
      onKeyDown={disableEslint}
      onMouseLeave={(e) => mouseLeave(e)}
      onMouseOver={(e) => mouseOver(e)}
      onClick={() => handleCanvas('heading2')}
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
          d="M1.6 2.5a.6.6 0 1 0-1.2 0v11a.6.6 0 1 0 1.2 0V8.457h6.3V13.5a.6.6 0 1 0 1.2 0v-11a.6.6 0 1 0-1.2 0v4.757H1.6V2.5ZM12.75 6.4a2.35 2.35 0 0 0-2.35 2.35V9a.6.6 0 0 0 1.2 0v-.25a1.15 1.15 0 0 1 2.3 0v.422a1.4 1.4 0 0 1-.41.99l-2.914 2.914A.6.6 0 0 0 11 14.1h3.5a.6.6 0 1 0 0-1.2h-2.051l1.89-1.89a2.6 2.6 0 0 0 .761-1.838V8.75a2.35 2.35 0 0 0-2.35-2.35Z"
        />
      </svg>

      <div className="pointer-events-none">Heading 2</div>
    </div>
  )
}
export default ModalHeading2Option
