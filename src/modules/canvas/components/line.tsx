import type { toolProps } from '@/types/canvasTypes'

const Line = ({ setTool, tool }: toolProps) => {
  const disableEslint = () => {}
  return (
    <>
      <div
        onKeyDown={disableEslint}
        className={`${tool === 'line' ? 'text-blue-500 scale-125' : 'hover:scale-125'} cursor-pointer  duration-300 ease-in-out`}
        onClick={() => setTool('line')}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <title>image</title>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.25 6.5C14.25 4.70507 15.7051 3.25 17.5 3.25C19.2949 3.25 20.75 4.70507 20.75 6.5C20.75 8.29493 19.2949 9.75 17.5 9.75C16.89 9.75 16.3193 9.58196 15.8316 9.28964L9.28964 15.8316C9.58196 16.3193 9.75 16.89 9.75 17.5C9.75 19.2949 8.29493 20.75 6.5 20.75C4.70507 20.75 3.25 19.2949 3.25 17.5C3.25 15.7051 4.70507 14.25 6.5 14.25C7.14146 14.25 7.73952 14.4358 8.24327 14.7566L14.7566 8.24327C14.4358 7.73952 14.25 7.14146 14.25 6.5ZM17.5 4.75C16.5335 4.75 15.75 5.5335 15.75 6.5C15.75 7.4665 16.5335 8.25 17.5 8.25C18.4665 8.25 19.25 7.4665 19.25 6.5C19.25 5.5335 18.4665 4.75 17.5 4.75ZM6.5 15.75C5.5335 15.75 4.75 16.5335 4.75 17.5C4.75 18.4665 5.5335 19.25 6.5 19.25C7.4665 19.25 8.25 18.4665 8.25 17.5C8.25 16.5335 7.4665 15.75 6.5 15.75Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </>
  )
}
export default Line
