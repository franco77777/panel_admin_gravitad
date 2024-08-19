import { Link } from 'react-router-dom'
import './excalidrawFiles.css'
import TrafficLight from './trafficLight'
import { SecondaryGradientExist, Bg, BgDarker, Primary } from '@/theme/theming'
export interface prop {
  title: string
}
const Process = ({ title }: prop) => {
  return (
    <div
      style={{ background: SecondaryGradientExist(), borderColor: Primary() }}
      className="w-full  rounded-2xl mt-10 font-mono  overflow-x-auto p-[3px] "
    >
      <h4 style={{ color: Primary() === '#000000' ? '#ffffff' : '#000000' }} className="text-2xl font-semibold pl-2">
        {title}
      </h4>
      <div style={{ background: Bg() }} className=" w-full  gridProcess  gap-4 text-base p-4 rounded-2xl">
        <div style={{ background: BgDarker(), borderColor: Primary() }} className="border-2 rounded-xl process1">
          <Link to={'/excalidrawFiles/section'}>
            <div className="w-full h-full">UI_UX</div>
          </Link>
        </div>
        <div style={{ background: BgDarker(), borderColor: Primary() }} className="border-2 rounded-xl process2">
          <Link to={'/excalidrawFiles/section'}>
            <div className="w-full h-full">IA</div>
          </Link>
        </div>
        <div style={{ background: BgDarker(), borderColor: Primary() }} className="border-2 rounded-xl process3">
          <Link to={'/excalidrawFiles/section'}>
            <div className="w-full h-full">Front End</div>
          </Link>
        </div>
        <div style={{ background: BgDarker(), borderColor: Primary() }} className="border-2 rounded-xl process4">
          <Link to={'/excalidrawFiles/section'}>
            <div className="w-full h-full">Back End</div>
          </Link>
        </div>
        <div style={{ background: BgDarker(), borderColor: Primary() }} className="border-2 rounded-xl process5">
          <Link to={'/excalidrawFiles/section'}>
            <div className="w-full h-full">Devops</div>
          </Link>
        </div>
        <div style={{ background: BgDarker(), borderColor: Primary() }} className="border-2 rounded-xl process6">
          <Link to={'/excalidrawFiles/section'}>
            <div className="w-full h-full">QA</div>
          </Link>
        </div>
        <div style={{ background: BgDarker(), borderColor: Primary() }} className="border-2 rounded-xl process7">
          <Link to={'/excalidrawFiles/section'}>
            <div className="w-full h-full">Marketing</div>
          </Link>
        </div>
        <div style={{ background: BgDarker(), borderColor: Primary() }} className="border-2 rounded-xl process8">
          <Link to={'/excalidrawFiles/section'}>
            <div className="w-full h-full">Documents</div>
          </Link>
        </div>
        <div className=" rounded-xl  flex flex-col justify-center  items-center gap-2   process9">
          <TrafficLight color={'green'} />
          <div style={{ background: BgDarker(), borderColor: Primary() }} className="  rounded-xl p-4 border-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quis eligendi nemo sapiente adipisci vitae dolorem
            id, similique quas! Ex quidem quis ad dolorum dolore corrupti distinctio voluptate eveniet eos.
          </div>
        </div>
      </div>
    </div>
  )
}

export default Process
