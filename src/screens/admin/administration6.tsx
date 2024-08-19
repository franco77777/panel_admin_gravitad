import { CreateElement } from '@/services/elementService'
import { storeAdministration6 } from '@/store/administration/administrationStore'

import { SecondaryGradientExist, SecondaryTextExist, Bg, BgDarker, Primary } from '@/theme/theming'
import { AlignJustify, ChevronDown, ChevronRight, CircleX, Folder, SquarePlus } from 'lucide-react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Administration6 = () => {
  const [handleModal, setHandleModal] = useState(false)
  const [structureName, setStructureName] = useState('')
  const [elementForAppend, setElementForAppend] = useState<HTMLElement | null>()
  const SetURL = storeAdministration6((state) => state.setUrl)
  const navigate = useNavigate()

  const CreateStructure = () => {
    const IconFolder = document.querySelector('[data-icon=folder]')
    const IconPlus = document.querySelector('[data-icon=plus]')
    const IconChevron = document.querySelector('[data-icon=chevronR]')
    const IconAlign = document.querySelector('[data-icon=align]')

    if (!structureName) return
    const UlElement = document.querySelector('[data-administration=fileContainer]')
    const ul = CreateElement('ul', 'ml-8')
    const li = CreateElement('li', 'flex flex-col gap-2')
    const div = CreateElement('div', '')
    const divIconPlus = CreateElement('div', 'cursor-pointer hover:scale-105')
    const divIconChevron = CreateElement('div', 'cursor-pointer hover:scale-105')

    div.append(structureName)
    const divContainer = CreateElement('div', 'flex gap-4 flex')

    const IconFolderCloned = IconFolder?.cloneNode(true) as HTMLElement
    IconFolderCloned?.classList.remove('hidden')

    const IconPlusCloned = IconPlus?.cloneNode(true) as HTMLElement
    IconPlusCloned?.classList.remove('hidden')

    const IconChevronCloned = IconChevron?.cloneNode(true) as HTMLElement
    IconChevronCloned?.classList.remove('hidden')

    const IconAlignCloned = IconAlign?.cloneNode(true) as HTMLElement
    IconAlignCloned?.classList.remove('hidden')

    IconAlignCloned.addEventListener('click', NavigateFolder)
    divIconPlus.addEventListener('click', AddFolder)
    divIconPlus.appendChild(IconPlusCloned)
    divIconChevron.addEventListener('click', ShowFolder)
    divIconChevron.appendChild(IconChevronCloned)
    divContainer.appendChild(divIconChevron)
    divContainer.appendChild(IconFolderCloned)
    divContainer.appendChild(div)
    divContainer.appendChild(IconAlignCloned)
    divContainer.appendChild(divIconPlus)
    li.appendChild(divContainer)
    if (elementForAppend) {
      ul.append(li)
      elementForAppend.append(ul)
    } else {
      UlElement?.append(li)
    }

    setStructureName('')
    setElementForAppend(null)
    setHandleModal(!handleModal)
  }

  const NavigateFolder = (e: MouseEvent) => {
    let Switch = false
    const Target = e.target as HTMLElement
    const Text = (Target.previousSibling as HTMLElement).innerHTML

    let Parent = Target.parentElement?.parentElement

    const urlArray = []
    urlArray.push(Text)
    while (!Switch) {
      const data = Parent?.parentElement?.getAttribute('data-administration')
      if (data === 'fileContainer') {
        Switch = true
        break
      }
      Parent = Parent?.parentElement?.parentElement
      const div = Parent?.querySelector('div')
      if (div) {
        const divInsideText = div.children[2].innerHTML

        urlArray.unshift(divInsideText)
      }

      console.log('url', urlArray)
    }
    let url = ''
    for (const i of urlArray) {
      if (url) {
        url += `/${i}`
      } else {
        url = i
      }
    }
    console.log('url', url)
    SetURL(url)
    navigate('/administration-7')
  }

  const ShowFolder = (e: MouseEvent) => {
    const IconChevron = document.querySelector('[data-icon=chevron]') as HTMLElement
    const IconChevronR = document.querySelector('[data-icon=chevronR]') as HTMLElement

    const IconChevronCloned = IconChevron?.cloneNode(true) as HTMLElement
    IconChevronCloned.classList.remove('hidden')

    const IconChevronRCloned = IconChevronR?.cloneNode(true) as HTMLElement
    IconChevronRCloned.classList.remove('hidden')
    const Target = e.target as HTMLElement
    const Data = Target.getAttribute('data-icon')
    const Li = Target.parentElement?.parentElement?.parentElement
    if (Data === 'chevronR') {
      Target?.parentElement?.replaceChild(IconChevronCloned, Target)
    } else {
      Target?.parentElement?.replaceChild(IconChevronRCloned, Target)
    }

    const parent = Li?.querySelectorAll('ul')

    const len = parent?.length
    if (e.target && IconChevron)
      if (len && parent)
        for (const i of parent) {
          i.classList.toggle('hidden')
        }
    // for(var i=0;i<len;i++){
    //   	parent[i].addEventListener('click', function (event) {
    //     if(event.target !== event.currentTarget.children[0].children[0]){
    //         if(event.currentTarget.children[0].style.display === 'block'){
    //           event.currentTarget.children[0].style.display = 'none';
    //         } else {
    //           event.currentTarget.children[0].style.display = 'block';
    //         }
    //      }

    // 	});
    //   }
  }

  const AddFolder = (e: MouseEvent) => {
    setHandleModal((oldVal) => !oldVal)

    const ParentElement = (e.target as HTMLElement).parentElement?.parentElement

    if (ParentElement) setElementForAppend(ParentElement)
  }
  const disableEslint = () => {}
  return (
    <div style={{ background: Bg(), color: SecondaryTextExist() }} className="min-h-screen  p-[4vw]  font-normal relative ">
      <div data-icon="align" className="hidden hover:scale-105 duration-150 cursor-pointer">
        <AlignJustify size={24} strokeWidth={2} className=" pointer-events-none" />
      </div>
      <div data-icon="chevronR" className="hidden">
        <ChevronRight size={24} strokeWidth={2} className=" pointer-events-none" />
      </div>
      <div data-icon="chevron" className="hidden">
        <ChevronDown size={24} strokeWidth={2} className=" pointer-events-none" />
      </div>
      <SquarePlus data-icon="plus" size={24} strokeWidth={2} className=" pointer-events-none hidden" />
      <Folder data-icon="folder" className="hidden" />
      {handleModal && (
        <div
          style={{ background: BgDarker() }}
          className="text-2xl modalAnimation ease-in-out overflow-hidden z-10  rounded absolute top-1/2 left-1/2  "
        >
          <div className="w-full h-full flex flex-col gap-4 relative  p-12 ">
            <div>structure name:</div>
            <input
              style={{ background: Bg(), borderColor: Primary() }}
              value={structureName}
              type="text"
              className="rounded outline-none shadow-none border-[1px]"
              onChange={(e) => setStructureName(e.target.value)}
            />
            <button
              style={{ backgroundImage: SecondaryGradientExist() }}
              type="button"
              onClick={CreateStructure}
              className="  rounded text-black hover:scale-105 duration-150"
            >
              create
            </button>
            <CircleX
              size={32}
              className="absolute top-2 right-2 cursor-pointer hover:scale-105 duration-150"
              onClick={() => setHandleModal(!handleModal)}
            />
          </div>
        </div>
      )}

      {/* <header className=" text-secondary w-full h-14 md:h-16 xl:h-20 bg-tertiary flex items-center  rounded px-[2vw] relative">
        <div className=" absolute top-[50%] left-[2vw] translate-y-[-50%] text-secondary text-[clamp(1.25rem,3cqw,3rem)]">
          Structures
        </div>
        <input
          type="text"
          className="rounded h-[60%] sm:mx-auto ml-auto bg-primary border-secondary"
        />
      </header> */}
      <div
        style={{
          color: Primary(),
          backgroundColor: BgDarker(),
        }}
        className="  w-full h-14 md:h-16 xl:h-20  flex  items-center  rounded-2xl px-[2vw] relative "
      >
        <div
          style={{
            backgroundImage: SecondaryGradientExist(),
          }}
          className="text-[clamp(2rem,3cqw,6rem)] absolute top-[50%] left-[2vw] translate-y-[-50%] gradient-text font-bold"
        >
          Structures
        </div>
        <input
          style={{
            color: SecondaryTextExist(),
            backgroundColor: Bg(),
            borderColor: Primary(),
          }}
          type="text"
          className="rounded-2xl h-[60%] ml-auto md:mx-auto text-[clamp(1rem,3cqw,2rem)]"
        />
      </div>
      <section
        style={{
          background: SecondaryGradientExist(),
          color: SecondaryTextExist(),
        }}
        className="mt-8 text-base rounded-2xl p-[5px] "
      >
        <div style={{ background: BgDarker() }} className="w-full h-full rounded-2xl p-4">
          <div onKeyDown={disableEslint} onClick={() => setHandleModal(!handleModal)} className="flex gap-4">
            <div className="text-xl">add structure</div>
            <SquarePlus size={24} strokeWidth={2} className="cursor-pointer hover:scale-105" />
          </div>
          <ul data-administration="fileContainer" className="flex flex-col gap-8 mt-8" />
        </div>
      </section>
    </div>
  )
}
export default Administration6
