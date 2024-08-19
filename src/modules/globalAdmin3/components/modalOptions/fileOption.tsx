import type { modalGlobalAdmin3Options } from '@/types/globalAdmin'

const FileOption = ({ modalPageOptions, mouseLeave, mouseOver }: modalGlobalAdmin3Options) => {
  const disableEslint = () => {}
  return (
    <div
      onFocus={disableEslint}
      onKeyDown={disableEslint}
      onMouseLeave={(e) => mouseLeave(e)}
      onMouseOver={(e) => mouseOver(e)}
      onClick={() => modalPageOptions('file')}
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
        <g clipPath="url(#Files_svg__a)">
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M2.4 2.5A1.6 1.6 0 0 1 4 .9h8a1.6 1.6 0 0 1 1.6 1.6v.516a1.6 1.6 0 0 1 1 1.484v1.016A1.6 1.6 0 0 1 15.6 7v5.5a2.6 2.6 0 0 1-2.6 2.6H3a2.6 2.6 0 0 1-2.6-2.6V7a1.6 1.6 0 0 1 1-1.484V4.5a1.6 1.6 0 0 1 1-1.484V2.5Zm1.2.4h8.8v-.4a.4.4 0 0 0-.4-.4H4a.4.4 0 0 0-.4.4v.4Zm-1 2.5h1.759a1.6 1.6 0 0 1 1.124.461L8 8.345l2.517-2.484a1.6 1.6 0 0 1 1.124-.461H13.4v-.9a.4.4 0 0 0-.4-.4H3a.4.4 0 0 0-.4.4v.9Zm-1 7.1A1.4 1.4 0 0 0 3 13.9h10a1.4 1.4 0 0 0 1.4-1.4V7a.4.4 0 0 0-.4-.4h-2.359a.4.4 0 0 0-.28.115l-2.94 2.9a.6.6 0 0 1-.842 0l-2.94-2.9a.4.4 0 0 0-.28-.115H2a.4.4 0 0 0-.4.4v5.5Z"
            clipRule="evenodd"
          />
        </g>
        <defs>
          <clipPath id="Files_svg__a">
            <path fill="#fff" d="M0 0h16v16H0z" />
          </clipPath>
        </defs>
      </svg>

      <div className="pointer-events-none">Insert File</div>
    </div>
  )
}
export default FileOption
