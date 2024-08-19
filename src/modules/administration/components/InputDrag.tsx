import { SecondaryGradientExist, SecondaryTextExist, Bg, BgDarker, Primary } from '@/theme/theming'
import { CloudUpload } from 'lucide-react'
import { useState } from 'react'

export interface Image {
  name: string
  url: string
}

const Administration2InputDrag = () => {
  const [images, setImages] = useState<Image[]>([])
  const [isDragging, setIsDragging] = useState(false)

  const onFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log('soy images', images)
    const files = event.target.files
    if (files) {
      if (files.length === 0) return
      for (let i = 0; i < files.length; i++) {
        if (files[i].type.split('/')[0] !== 'image') continue
        if (!images.some((e) => e.name === files[i].name)) {
          setImages((prevImages) => [
            ...prevImages,
            {
              name: files[i].name,
              url: URL.createObjectURL(files[i]),
            },
          ])
        }
      }
    }
  }

  const OpenInput = () => {
    const Input = document.querySelector('[data-administration=input]') as HTMLInputElement

    if (Input) Input.click()
  }

  const deleteImage = (index: number) => {
    const newImages = [...images.filter((_, i) => i !== index)]
    setImages(newImages)
  }

  const onDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    //setIsDragging(true);
    if (event.dataTransfer) event.dataTransfer.dropEffect = 'copy'
  }
  const onDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    //setIsDragging(false);
  }

  const onDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    setIsDragging(false)
    if (event.dataTransfer) {
      const files = event.dataTransfer.files

      if (files.length === 0) return
      for (let i = 0; i < files.length; i++) {
        if (files[i].type.split('/')[0] !== 'image') continue
        if (!images.some((e) => e.name === files[i].name)) {
          setImages((prevImages) => [
            ...prevImages,
            {
              name: files[i].name,
              url: URL.createObjectURL(files[i]),
            },
          ])
        }
      }
    }
  }
  const DragEnter = (e: DragEvent) => {
    setIsDragging(true)
    e.preventDefault()
    //const id = (e.target as HTMLDivElement).id;
    const dragTarget = e.target as HTMLElement | null
    if (dragTarget?.getAttribute('data-drag') !== 'dragzone') {
      if (!e.dataTransfer) return

      e.dataTransfer.effectAllowed = 'none'
      e.dataTransfer.dropEffect = 'none'
    }
  }

  window.addEventListener('dragenter', DragEnter)

  const DragOver = (e: DragEvent) => {
    console.log('dragin over')
    e.preventDefault()
    e.stopPropagation()
    const dragTarget = e.target as HTMLElement | null

    if (dragTarget?.getAttribute('data-drag') !== 'dragzone') {
      if (!e.dataTransfer) return
    }
  }

  window.addEventListener('dragover', DragOver)

  const DragDrop = (e: DragEvent) => {
    e.preventDefault()
    console.log('droping1')

    //setIsDragging(false);
    const dragTarget = e.target as HTMLElement | null

    if (dragTarget?.getAttribute('data-drag') !== 'dragzone') {
      console.log('droping2')
      setIsDragging(false)
      if (!e.dataTransfer) return
      e.dataTransfer.effectAllowed = 'none'
      e.dataTransfer.dropEffect = 'none'
    }
  }

  window.addEventListener('drop', DragDrop)

  const DragEnd = () => {
    console.log('drag end')
  }

  window.addEventListener('dragend', DragEnd)

  const MouseEnter = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    console.log('entrando red')

    const target = e.target as HTMLElement
    console.log(target)
    target.style.background = SecondaryGradientExist()
    //setRendering({ background: "blue" });
  }

  const MouseLeave = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    console.log('saliendo blue')

    const target = e.target as HTMLElement
    console.log(target)
    target.style.background = 'none'
    //setRendering({ background: "red" });
  }

  const disableEslint = () => {}

  return (
    <div style={{ background: SecondaryGradientExist() }} className="  flex flex-col rounded-2xl ">
      <div
        style={{
          //backgroundColor: UseBgDarker(),
          backgroundColor: BgDarker(),
        }}
        className="w-[calc(100%-10px)] h-[calc(100%-10px)] rounded-2xl overflow-hidden  my-[5px] ml-[5px] flex flex-col "
      >
        <div
          style={{
            color: Primary() === '#000000' ? '#ffffff' : '#000000',
            background: SecondaryGradientExist(),
          }}
          className=" font-semibold  md:text-2xl text-base"
        >
          Files
        </div>
        <div
          onDragOver={onDragOver}
          onDragLeave={onDragLeave}
          onDrop={onDrop}
          style={{ background: BgDarker() }}
          className="mx-auto  w-full h-full p-4 "
        >
          <div
            onKeyDown={disableEslint}
            data-drag="dragzone"
            onClick={OpenInput}
            className="w-full h-full   py-4 rounded cursor-pointer active-animation flex items-center justify-center duration-500"
            style={{
              backgroundColor: Bg(),
              backgroundImage: `${
                isDragging
                  ? `linear-gradient(90deg,${SecondaryTextExist()} 50% , transparent 50%), linear-gradient(90deg, ${SecondaryTextExist()} 50%, transparent 50%), linear-gradient(0deg, ${SecondaryTextExist()} 50%, transparent 50%), linear-gradient(0deg, ${SecondaryTextExist()} 50%, transparent 50%)`
                  : ''
              }
              `,
            }}
          >
            <div>
              <CloudUpload
                style={{
                  color: Primary(),
                }}
                data-drag="dragzone"
                className="mx-auto h-32 w-32 "
              />
              {isDragging ? (
                <div
                  data-drag="dragzone"
                  className=" text-center mx-auto gradient-text font-semibold"
                  style={{
                    backgroundImage: SecondaryGradientExist(),
                  }}
                >
                  drop here
                </div>
              ) : (
                <div
                  data-drag="dragzone"
                  className=" text-center mx-auto gradient-text font-semibold text-[clamp(1.5rem,3cqw,2rem)]"
                  style={{
                    backgroundImage: SecondaryGradientExist(),
                  }}
                >
                  click to upload
                </div>
              )}

              <p data-drag="dragzone" className="text-xs  mx-auto w-fit" style={{ color: Primary() }}>
                SVG, PNG, JPG or GIF (MAX. 800x400px)
              </p>
              <input
                onDragEnd={() => console.log('dragend2')}
                data-drag="dragzone"
                type="file"
                className="hidden"
                data-administration="input"
                multiple
                onChange={(e) => onFileSelect(e)}
                id="testinput"
              />
            </div>
          </div>
        </div>

        <div
          className={`w-full grid grid-cols-[repeat(auto-fill,minmax(125px,1fr))] auto-rows-[minmax(125px,1fr)] gap-4 duration-500 ease-in-out px-4  ${
            images.length ? 'h-auto pb-4' : 'h-0 pb-0'
          }`}
        >
          {images.length !== 0 &&
            images.map((images, index) => (
              <div
                onKeyDown={disableEslint}
                onMouseEnter={(e) => MouseEnter(e)}
                onMouseLeave={(e) => MouseLeave(e)}
                onClick={() => deleteImage(index)}
                key={images.name}
                className="rounded-xl cursor-pointer hover:scale-105 duration-150 ease-in-out  grid place-items-center"
              >
                <div
                  style={{
                    //backgroundColor: UseBgDarker(),
                    backgroundColor: BgDarker(),
                  }}
                  className="w-[calc(100%-7px)] h-[calc(100%-7px)] rounded-xl overflow-hidden  pointer-events-none   "
                >
                  <img src={images.url} alt={images.name} className="h-full w-full rounded pointer-events-none " />
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}
export default Administration2InputDrag
