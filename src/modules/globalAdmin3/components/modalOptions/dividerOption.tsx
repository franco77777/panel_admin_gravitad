import type { modalGlobalAdmin3Options } from '@/types/globalAdmin'

const ModalDivider = ({ modalPageOptions: handleCanvas, mouseLeave, mouseOver }: modalGlobalAdmin3Options) => {
  const disableEslint = () => {}
  return (
    <div
      onFocus={disableEslint}
      onKeyDown={disableEslint}
      onMouseLeave={(e) => mouseLeave(e)}
      onMouseOver={(e) => mouseOver(e)}
      onClick={() => handleCanvas('divider')}
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
          d="M2.6 1a.6.6 0 0 0-1.2 0v2A2.6 2.6 0 0 0 4 5.6h8A2.6 2.6 0 0 0 14.6 3V1a.6.6 0 1 0-1.2 0v2A1.4 1.4 0 0 1 12 4.4H4A1.4 1.4 0 0 1 2.6 3V1ZM4 10.4A2.6 2.6 0 0 0 1.4 13v2a.6.6 0 1 0 1.2 0v-2A1.4 1.4 0 0 1 4 11.6h8a1.4 1.4 0 0 1 1.4 1.4v2a.6.6 0 1 0 1.2 0v-2a2.6 2.6 0 0 0-2.6-2.6H4ZM2 7.1a.9.9 0 1 1 0 1.8.9.9 0 0 1 0-1.8ZM6 7.1a.9.9 0 1 1 0 1.8.9.9 0 0 1 0-1.8ZM10.9 8a.9.9 0 1 0-1.8 0 .9.9 0 0 0 1.8 0ZM14 7.1a.9.9 0 1 1 0 1.8.9.9 0 0 1 0-1.8Z"
        />
      </svg>

      <div className="pointer-events-none">Divider</div>
    </div>
  )
}
export default ModalDivider
