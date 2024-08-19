import type { toolProps } from '@/types/canvasTypes'

const Shape = ({ setTool, tool }: toolProps) => {
  const disableEslint = () => {}
  return (
    <>
      <div
        onKeyDown={disableEslint}
        className={`${
          tool === 'rectangle' ? 'text-blue-500 scale-110' : 'text-[#FFDF6B] hover:scale-110'
        } relative w-24 h-full   duration-300 ease-in-out cursor-pointer`}
        onClick={() => setTool('rectangle')}
      >
        <svg
          width="66"
          height="66"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute -bottom-[30px] left-1/2 -translate-x-1/2"
        >
          <title>image</title>
          <rect stroke="inherit" width="100" y="20" height="80" fill="currentColor" />
        </svg>
        <svg
          width="45"
          height="45"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute right-2 -bottom-[10px]"
        >
          <title>image</title>
          <circle stroke="inherit" cx="50" cy="50" r="50" fill="currentColor" />
        </svg>
        <svg
          width="45"
          height="45"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute left-2 -bottom-[10px]"
        >
          <title>image</title>
          <polygon stroke="inherit" points="50,0 100,100 0,100" fill="currentColor" />
        </svg>
      </div>
    </>
  )
}
export default Shape
