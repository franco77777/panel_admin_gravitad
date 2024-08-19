import { useState } from 'react'
import TrafficLight from './trafficLight'
import './excalidrawFiles.css'
import { SecondaryGradientExist, BgDarker, Primary } from '@/theme/theming'

const FirstFiles = () => {
  const [color, setColor] = useState('green')
  console.log(setColor)
  return (
    <div className="grid md:grid-cols-3 grid-cols-1  gap-4   mt-8 text-base font-mono">
      <div className=" rounded-2xl w-full flex justify-center items-center flex-col gap-2 relative">
        <TrafficLight color={color} />
        <div
          style={{
            background: SecondaryGradientExist(),
          }}
          className="   rounded-2xl  w-full h-full p-[3px] overflow-hidden"
        >
          <div
            style={
              {
                //backgroundColor: BgDarker(),
              }
            }
            className=" w-full h-full rounded-b-xl overflow-hidden   flex flex-col "
          >
            <div
              style={{
                color: Primary() === '#000000' ? '#ffffff' : '#000000',
                background: SecondaryGradientExist(),
              }}
              className=" text-2xl font-semibold w-full text-center"
            >
              Front End
            </div>
            <div
              style={{ background: BgDarker() }}
              className="font-normal  flex items-center justify-center h-full p-3  rounded-2xl"
            >
              <div className="rounded-lg">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis perspiciatis, quisquam omnis doloremque fuga
                molestias placeat atque sunt quae. Numquam sed itaque accusantium tenetur voluptates eius neque nostrum quis
                quidem.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" rounded-2xl w-full flex justify-center items-center flex-col gap-2 relative">
        <TrafficLight color={color} />
        <div
          style={{
            background: SecondaryGradientExist(),
          }}
          className="   rounded-2xl  w-full h-full p-[3px] overflow-hidden"
        >
          <div
            style={
              {
                //backgroundColor: BgDarker(),
              }
            }
            className=" w-full h-full rounded-b-xl overflow-hidden   flex flex-col "
          >
            <div
              style={{
                color: Primary() === '#000000' ? '#ffffff' : '#000000',
                background: SecondaryGradientExist(),
              }}
              className=" text-2xl font-semibold w-full text-center"
            >
              Back End
            </div>
            <div
              style={{ background: BgDarker() }}
              className="font-normal  flex items-center justify-center h-full p-3  rounded-2xl"
            >
              <div className="rounded-lg">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis perspiciatis, quisquam omnis doloremque fuga
                molestias placeat atque sunt quae. Numquam sed itaque accusantium tenetur voluptates eius neque nostrum quis
                quidem.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" rounded-2xl w-full flex justify-center items-center flex-col gap-2 relative">
        <TrafficLight color={color} />
        <div
          style={{
            background: SecondaryGradientExist(),
          }}
          className="   rounded-2xl  w-full h-full p-[3px] overflow-hidden"
        >
          <div
            style={
              {
                //backgroundColor: BgDarker(),
              }
            }
            className=" w-full h-full rounded-b-xl overflow-hidden   flex flex-col "
          >
            <div
              style={{
                color: Primary() === '#000000' ? '#ffffff' : '#000000',
                background: SecondaryGradientExist(),
              }}
              className=" text-2xl font-semibold w-full text-center"
            >
              IA
            </div>
            <div
              style={{ background: BgDarker() }}
              className="font-normal  flex items-center justify-center h-full p-3  rounded-2xl"
            >
              <div className="rounded-lg">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis perspiciatis, quisquam omnis doloremque fuga
                molestias placeat atque sunt quae. Numquam sed itaque accusantium tenetur voluptates eius neque nostrum quis
                quidem.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ borderColor: Primary(), background: BgDarker() }} className="border-2  rounded-2xl  p-4">
        Figma
      </div>
      <div style={{ borderColor: Primary(), background: BgDarker() }} className="border-2  rounded-2xl p-4">
        Excalidraw
      </div>
      <div style={{ borderColor: Primary(), background: BgDarker() }} className="border-2  rounded-2xl  p-4">
        Documento de Analisis
      </div>
    </div>
  )
}

export default FirstFiles
