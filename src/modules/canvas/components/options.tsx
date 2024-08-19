import type { toolProps } from '@/types/canvasTypes'

const Options = ({ tool }: toolProps) => {
  return (
    <>
      <div
        className={`${
          tool === 'selection' ? 'top-0' : '-top-10'
        } h-10 w-[90%] absolute -z-10  duration-300 ease-in-out rounded-t-lg left-1/2 -translate-x-1/2 bg-[#1E1E1E]`}
      />
    </>
  )
}
export default Options
