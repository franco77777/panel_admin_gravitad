import {
  Bg,
  SecondaryGradientExist,
  SecondaryTextExist,
} from "@/theme/theming";

import { pageStore } from "@/store/administration/pageStore";
import PageSection from "@/modules/globalAdmin3/components/PageSection";
import Tasks from "@/modules/globalAdmin3/components/tasksBoard";
import Ga3section from "@/modules/globalAdmin3/components/ga3section";
import { KeyboardEvent, useEffect } from "react";

const GlobalAdmin3 = () => {
  //const [modal, setModal] = useState(false);

  //  const [tasks, setTasks] = useState<tasks[]>([]);

  const canvases = pageStore((state) => state.page);
  useEffect(() => {
    const closeModal = (e: globalThis.KeyboardEvent) => {
      if (e.key === "Escape") {
        const ga3page = document.getElementById("ga3page") as HTMLElement;
        if (ga3page.classList.contains("translate-x-0")) {
          ga3page.classList.remove("translate-x-0");
          ga3page.classList.add("translate-x-full");
        }
      }
    };
    document.addEventListener("keydown", closeModal, false);
  }, []);
  console.log("canvases", canvases);

  return (
    <div
      style={{ background: Bg(), color: SecondaryTextExist() }}
      className="flex gap-2 flex-col lg:flex-row p-4 relative"
    >
      <section className="w-full  flex-grow flex flex-col gap-2 h-full">
        <Ga3section />
        {/* <Tasks tasks={tasks} setModal={setModal} modal={modal} /> */}
        <Tasks />
      </section>
      <section
        id="ga3page"
        style={{
          background: SecondaryGradientExist(),
        }}
        className="h-full w-[50%] flex flex-col gap-2  p-[2px] fixed top-0 right-0 translate-x-full rounded-lg 
        duration-150 ease-in-out
        "
      >
        <PageSection />
      </section>

      {/* {modal && <ModalTask setModal={setModal} setTasks={setTasks} />} */}
      {/* {modal && (
        <div
          onKeyDown={disableEslint}
          onClick={() => setModal(false)}
          className="z-10 bg-black opacity-80 fixed min-h-screen min-w-full"
        />
      )} */}
    </div>
  );
};
export default GlobalAdmin3;
