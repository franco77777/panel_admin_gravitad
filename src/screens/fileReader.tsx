import { codeListState } from "@/modules/globalAdmin/utils/GAStates";
import { globalAdminStore } from "@/store/administration/globalAdminStore";
import { pageStore } from "@/store/administration/pageStore";
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import "@cyntler/react-doc-viewer/dist/index.css";
import { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-synthwave84.css";
import "prismjs-components-importer/esm";
import { BgDarker } from "@/theme/theming";
import { storeTask } from "@/store/globalAdmin3/taskStore";
const FileReader = () => {
  const tasks = storeTask((state) => state.tasks);
  const taskSelected = storeTask((state) => state.taskSelected);

  const getIdFileStore = globalAdminStore((state) => state.idFile);

  //const current = getPageStore.find((e) => e.id === getIdFileStore)
  const excel =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
  const task = tasks.find((e) => e.id === taskSelected?.id);
  const current = task?.page.find((e) => e.id === getIdFileStore);

  useEffect(() => {
    Prism.highlightAll();
  }, []);
  if (!current) return <div>File not found</div>;
  console.log("filetype", current.fileType);
  const typeSplit = current.fileName?.split(".");
  if (typeSplit?.length && current.fileText) {
    const type = typeSplit[typeSplit.length - 1];
    const isFile = codeListState.find((e) => e.code === type);
    if (type !== "xlsx" && isFile) {
      return (
        <pre
          className="p-2 scrollbar z-0"
          style={{
            backgroundColor: BgDarker(),
            padding: "0px",
            margin: "0px",
            fontSize: "16px",
          }}
        >
          <code
            style={{
              backgroundColor: BgDarker(),
            }}
            className={`language-${type} font-thin text-sm `}
          >
            {current.fileText}
          </code>
        </pre>
      );
    }
  }

  if (current.fileType === excel && current.html) {
    console.log("exceltype");
    useEffect(() => {
      if (current.html) {
        const excelDiv = document.getElementById("excelDiv") as HTMLElement;
        excelDiv.append(current.html);
      }
    }, [current.html]);

    return <div id="excelDiv" />;
  }
  const docs = [
    { uri: current.url as string, fileName: current.fileName }, // Remote file
    //{ uri: require("./example-files/pdf.pdf") }, // Local File
  ];
  return (
    <div>
      <DocViewer documents={docs} pluginRenderers={DocViewerRenderers} />
    </div>
  );
};
export default FileReader;
