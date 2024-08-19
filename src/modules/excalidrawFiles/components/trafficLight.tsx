import './excalidrawFiles.css'
export interface props {
  color: string
  //styles: string;
}
const TrafficLight = ({ color }: props) => {
  return (
    <div
      //style={styles}
      className="bg-black w-28 h-10 rounded-lg flex justify-center items-center gap-2"
    >
      <div className={`${color === 'green' ? 'bg-[#16FF00]' : 'bg-gray-700'} rounded-full  w-6 h-6 `} />
      <div className={`${color === 'yellow' ? 'bg-[#FAEF5D]' : 'bg-gray-700'} rounded-full  w-6 h-6 `} />
      <div className={`${color === 'red' ? 'bg-red-600' : 'bg-gray-700'} rounded-full  w-6 h-6 `} />
    </div>
  )
}
export default TrafficLight
