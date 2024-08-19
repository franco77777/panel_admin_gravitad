import type { modalGlobalAdmin3Options } from '@/types/globalAdmin'

const ImageOption = ({ modalPageOptions, mouseLeave, mouseOver }: modalGlobalAdmin3Options) => {
  const disableEslint = () => {}
  return (
    <div
      onFocus={disableEslint}
      onKeyDown={disableEslint}
      onMouseLeave={(e) => mouseLeave(e)}
      onMouseOver={(e) => mouseOver(e)}
      onClick={() => modalPageOptions('image')}
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
        <g fill="currentColor" fillRule="evenodd" clipPath="url(#Image_svg__a)" clipRule="evenodd">
          <path d="M6 2.9a2.6 2.6 0 1 0 0 5.2 2.6 2.6 0 0 0 0-5.2ZM4.6 5.5a1.4 1.4 0 1 1 2.8 0 1.4 1.4 0 0 1-2.8 0Z" />
          <path d="M3 .9A2.6 2.6 0 0 0 .4 3.5v9A2.6 2.6 0 0 0 3 15.1h10a2.6 2.6 0 0 0 2.6-2.6v-9A2.6 2.6 0 0 0 13 .9H3ZM1.6 3.5A1.4 1.4 0 0 1 3 2.1h10a1.4 1.4 0 0 1 1.4 1.4v6.88l-1.189-1.932c-1.014-1.648-3.41-1.65-4.426-.003l-1.559 2.523-.175-.233a2.6 2.6 0 0 0-4.132-.036L1.6 12.394V3.5Zm.564 10.123c.234.174.523.277.836.277h2.415l1.134-1.835-.458-.61a1.4 1.4 0 0 0-2.225-.02l-1.702 2.188Zm4.662.277H13a1.4 1.4 0 0 0 1.391-1.244L12.19 9.077a1.4 1.4 0 0 0-2.383-.002L6.826 13.9Z" />
        </g>
        <defs>
          <clipPath id="Image_svg__a">
            <path fill="#fff" d="M0 0h16v16H0z" />
          </clipPath>
        </defs>
      </svg>

      <div className="pointer-events-none">Image</div>
    </div>
  )
}
export default ImageOption
