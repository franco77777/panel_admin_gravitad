import type { modalGlobalAdmin3Options } from '@/types/globalAdmin'

const ModalParagraphOption = ({ modalPageOptions: handleCanvas, mouseLeave, mouseOver }: modalGlobalAdmin3Options) => {
  const disableEslint = () => {}
  return (
    <div
      onFocus={disableEslint}
      onKeyDown={disableEslint}
      onMouseLeave={(e) => mouseLeave(e)}
      onMouseOver={(e) => mouseOver(e)}
      onClick={() => handleCanvas('paragraph')}
      className="py-1 w-full rounded flex gap-2 cursor-pointer hover:scale-105 duration-150"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 16 16"
        preserveAspectRatio="xMidYMid meet"
        className="w-5 h-5 pointer-events-none"
        width="18"
        height="18"
      >
        <title>image</title>
        <path
          fill="currentColor"
          d="M2 1.4a.6.6 0 0 0 0 1.2h12a.6.6 0 1 0 0-1.2H2ZM2 13.4a.6.6 0 0 0 0 1.2h7a.6.6 0 1 0 0-1.2H2ZM1.4 10a.6.6 0 0 1 .6-.6h12a.6.6 0 1 1 0 1.2H2a.6.6 0 0 1-.6-.6ZM2 5.4a.6.6 0 0 0 0 1.2h12a.6.6 0 1 0 0-1.2H2Z"
        />
      </svg>
      <div className="pointer-events-none">Paragraph</div>
    </div>
  )
}
export default ModalParagraphOption
