import type { modalGlobalAdmin3Options } from '@/types/globalAdmin'

const ModalUnorderedList = ({ modalPageOptions: handleCanvas, mouseLeave, mouseOver }: modalGlobalAdmin3Options) => {
  const disableEslint = () => {}
  return (
    <div
      onFocus={disableEslint}
      onKeyDown={disableEslint}
      onMouseLeave={(e) => mouseLeave(e)}
      onMouseOver={(e) => mouseOver(e)}
      onClick={() => handleCanvas('unorderedList')}
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
          d="M2.5 2.1a.9.9 0 1 0 0 1.8.9.9 0 0 0 0-1.8ZM2.5 7.1a.9.9 0 1 0 0 1.8.9.9 0 0 0 0-1.8ZM1.6 13a.9.9 0 1 1 1.8 0 .9.9 0 0 1-1.8 0ZM6 2.4a.6.6 0 0 0 0 1.2h8.5a.6.6 0 1 0 0-1.2H6ZM6 7.4a.6.6 0 0 0 0 1.2h8.5a.6.6 0 1 0 0-1.2H6ZM6 13.6h8.5a.6.6 0 0 0 0-1.2H6a.6.6 0 1 0 0 1.2Z"
        />
      </svg>

      <div className="pointer-events-none">Unordered List</div>
    </div>
  )
}
export default ModalUnorderedList
