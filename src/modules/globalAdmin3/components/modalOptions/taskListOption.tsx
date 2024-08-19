import type { modalGlobalAdmin3Options } from '@/types/globalAdmin'

const ModalTaskList = ({ modalPageOptions: handleCanvas, mouseLeave, mouseOver }: modalGlobalAdmin3Options) => {
  const disableEslint = () => {}
  return (
    <div
      onFocus={disableEslint}
      onKeyDown={disableEslint}
      onMouseLeave={(e) => mouseLeave(e)}
      onMouseOver={(e) => mouseOver(e)}
      onClick={() => handleCanvas('taskList')}
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
          d="M2.5 2a.5.5 0 0 1 .5.5V6h.5a.5.5 0 1 1 0 1h-2a.5.5 0 0 1 0-1H2V4.077h-.5a.5.5 0 1 1 0-1H2V2.5a.5.5 0 0 1 .5-.5ZM1 10.5a1.5 1.5 0 1 1 3 0v.326c0 .46-.174.904-.488 1.242L2.647 13H3.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.366-.84l1.645-1.773A.826.826 0 0 0 3 10.826V10.5a.5.5 0 0 0-1 0v.23a.5.5 0 0 1-1 0v-.23ZM5.9 3a.6.6 0 0 1 .6-.6h8a.6.6 0 1 1 0 1.2h-8a.6.6 0 0 1-.6-.6ZM5.9 13a.6.6 0 0 1 .6-.6h8a.6.6 0 1 1 0 1.2h-8a.6.6 0 0 1-.6-.6ZM5.9 8a.6.6 0 0 1 .6-.6h8a.6.6 0 1 1 0 1.2h-8a.6.6 0 0 1-.6-.6Z"
        />
      </svg>

      <div className="pointer-events-none">Task List</div>
    </div>
  )
}
export default ModalTaskList
