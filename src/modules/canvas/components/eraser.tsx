import type { toolProps } from '@/types/canvasTypes'

const Eraser = ({ setTool, tool }: toolProps) => {
  const disableEslint = () => {}
  return (
    <>
      <div
        onKeyDown={disableEslint}
        onClick={() => setTool('eraser')}
        className={`${
          tool === 'eraser' ? 'mt-0 text-blue-500' : 'mt-6 text-white'
        } duration-300 ease-in-out cursor-pointer hover:mt-0  `}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="54" height="72" viewBox="0 0 54 52" fill="none" id="edgeless-eraser-icon">
          <title>image</title>
          <g filter="url(#filter0_d_8344_9244)">
            <rect
              x="10.575"
              y="4.575"
              width="33.35"
              height="57.5"
              rx="5.175"
              fill={`${tool === 'eraser' ? 'rgb(59 130 246)' : '#F1F1F1'} `}
              stroke="#DDDDDD"
              strokeWidth="1.15"
            />
            <g filter="url(#filter1_f_8344_9244)">
              <rect x="42.2" y="7.45001" width="18.4" height="3.45" rx="1.725" transform="rotate(90 42.2 7.45001)" fill="white" />
            </g>
            <g filter="url(#filter2_f_8344_9244)">
              <rect width="32.2" height="5.75" transform="matrix(1 0 0 -1 11.15 25.85)" fill="#AFAFAF" />
            </g>
            <path
              d="M21.5 18.375H22.075V18.95V62.65V63.225H21.5H10H9.425V62.65V40.8V29.875V24.4125V23.0013C9.425 21.9592 10.1672 21.0649 11.1915 20.8728C11.5816 20.7997 11.8933 20.506 11.9896 20.121L12.0015 20.0733L12.5593 20.2128L12.0015 20.0733C12.251 19.0752 13.1478 18.375 14.1767 18.375H15.75H21.5Z"
              fill="#173654"
            />
            <path
              d="M21.5 18.375H22.075V18.95V62.65V63.225H21.5H10H9.425V62.65V40.8V29.875V24.4125V23.0013C9.425 21.9592 10.1672 21.0649 11.1915 20.8728C11.5816 20.7997 11.8933 20.506 11.9896 20.121L12.0015 20.0733L12.5593 20.2128L12.0015 20.0733C12.251 19.0752 13.1478 18.375 14.1767 18.375H15.75H21.5Z"
              fill="url(#paint0_linear_8344_9244)"
              fillOpacity="0.2"
            />
            <path
              d="M21.5 18.375H22.075V18.95V62.65V63.225H21.5H10H9.425V62.65V40.8V29.875V24.4125V23.0013C9.425 21.9592 10.1672 21.0649 11.1915 20.8728C11.5816 20.7997 11.8933 20.506 11.9896 20.121L12.0015 20.0733L12.5593 20.2128L12.0015 20.0733C12.251 19.0752 13.1478 18.375 14.1767 18.375H15.75H21.5Z"
              stroke="#E0E0E0"
              strokeWidth="1.15"
            />
            <path
              d="M33 18.375H32.425V18.95V62.65V63.225H33H44.5H45.075V62.65V40.8V29.875V24.4125V23.0013C45.075 21.9592 44.3328 21.0649 43.3085 20.8728C42.9184 20.7997 42.6067 20.506 42.5104 20.121L42.4985 20.0733L41.9407 20.2128L42.4985 20.0733C42.249 19.0752 41.3522 18.375 40.3233 18.375H38.75H33Z"
              fill="#1E96EB"
            />
            <path
              d="M33 18.375H32.425V18.95V62.65V63.225H33H44.5H45.075V62.65V40.8V29.875V24.4125V23.0013C45.075 21.9592 44.3328 21.0649 43.3085 20.8728C42.9184 20.7997 42.6067 20.506 42.5104 20.121L42.4985 20.0733L41.9407 20.2128L42.4985 20.0733C42.249 19.0752 41.3522 18.375 40.3233 18.375H38.75H33Z"
              fill="url(#paint1_linear_8344_9244)"
              fillOpacity="0.2"
            />
            <path
              d="M33 18.375H32.425V18.95V62.65V63.225H33H44.5H45.075V62.65V40.8V29.875V24.4125V23.0013C45.075 21.9592 44.3328 21.0649 43.3085 20.8728C42.9184 20.7997 42.6067 20.506 42.5104 20.121L42.4985 20.0733L41.9407 20.2128L42.4985 20.0733C42.249 19.0752 41.3522 18.375 40.3233 18.375H38.75H33Z"
              stroke="#E0E0E0"
              strokeWidth="1.15"
            />
            <rect x="0.575" y="-0.575" width="12.65" height="44.85" transform="matrix(-1 0 0 1 34.15 18.95)" fill="#EFFAFF" />
            <rect
              x="0.575"
              y="-0.575"
              width="12.65"
              height="44.85"
              transform="matrix(-1 0 0 1 34.15 18.95)"
              fill="url(#paint2_linear_8344_9244)"
              fillOpacity="0.2"
            />
            <rect
              x="0.575"
              y="-0.575"
              width="12.65"
              height="44.85"
              transform="matrix(-1 0 0 1 34.15 18.95)"
              stroke="#E0E0E0"
              strokeWidth="1.15"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_8344_9244"
              x="0"
              y="0"
              width="54"
              height="75.8"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="4" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_8344_9244" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_8344_9244" result="shape" />
            </filter>
            <filter
              id="filter1_f_8344_9244"
              x="36.45"
              y="5.15001"
              width="8.05001"
              height="23"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="1.15" result="effect1_foregroundBlur_8344_9244" />
            </filter>
            <filter
              id="filter2_f_8344_9244"
              x="6.54999"
              y="15.5"
              width="41.4"
              height="14.95"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="2.3" result="effect1_foregroundBlur_8344_9244" />
            </filter>
            <linearGradient
              id="paint0_linear_8344_9244"
              x1="15.75"
              y1="18.95"
              x2="15.75"
              y2="62.65"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopOpacity="0" />
              <stop offset="1" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_8344_9244"
              x1="38.75"
              y1="18.95"
              x2="38.75"
              y2="62.65"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" />
              <stop offset="1" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="paint2_linear_8344_9244" x1="5.75" y1="0" x2="5.75" y2="43.7" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FFF8F8" stopOpacity="0" />
              <stop offset="1" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </>
  )
}
export default Eraser
