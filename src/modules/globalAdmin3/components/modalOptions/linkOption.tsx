import type { modalGlobalAdmin3Options } from '@/types/globalAdmin'

const LinkOption = ({ modalPageOptions, mouseLeave, mouseOver }: modalGlobalAdmin3Options) => {
  const disableEslint = () => {}
  return (
    <div
      onFocus={disableEslint}
      onKeyDown={disableEslint}
      onMouseLeave={(e) => mouseLeave(e)}
      onMouseOver={(e) => mouseOver(e)}
      onClick={() => modalPageOptions('link')}
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
        <g fill="currentColor" clipPath="url(#ExternalLink_svg__a)">
          <path d="M7 .9a.6.6 0 1 1 0 1.2H3.5a1.4 1.4 0 0 0-1.4 1.4v9a1.4 1.4 0 0 0 1.4 1.4h9a1.4 1.4 0 0 0 1.4-1.4V9a.6.6 0 1 1 1.2 0v3.5a2.6 2.6 0 0 1-2.6 2.6h-9a2.6 2.6 0 0 1-2.6-2.6v-9A2.6 2.6 0 0 1 3.5.9H7Z" />
          <path d="M9.9 1.5a.6.6 0 0 0 .6.6h2.552L9.076 6.076a.6.6 0 0 0 .848.848L13.9 2.95V5.5a.6.6 0 1 0 1.2 0v-4a.6.6 0 0 0-.6-.6h-4a.6.6 0 0 0-.6.6Z" />
        </g>
        <defs>
          <clipPath id="ExternalLink_svg__a">
            <path fill="#fff" d="M0 0h16v16H0z" />
          </clipPath>
        </defs>
      </svg>

      <div className="pointer-events-none">Url</div>
    </div>
  )
}
export default LinkOption
