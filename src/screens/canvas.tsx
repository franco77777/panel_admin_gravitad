import {
  adjustElementCoordinates,
  cursorForPosition,
  getSvgPathFromStroke,
  inputDivText,
  positionWithinElement,
  resizedCoordinates,
  usePressedKeys,
} from "@/modules/canvas/utils/canvasServices";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import getStroke from "perfect-freehand";
//npm install @typescript-eslint/eslint-plugin --save-dev
//npm install @typescript-eslint/parser --save-dev
import type {
  canvas,
  coordinates,
  Point,
  SelectedElement,
} from "@/types/canvasTypes";
import { useHistory } from "@/modules/canvas/hooks/canvasHooks";
import Select from "@/modules/canvas/components/select";
import Line from "@/modules/canvas/components/line";
import Pencil from "@/modules/canvas/components/pencil";
import Eraser from "@/modules/canvas/components/eraser";
import Shape from "@/modules/canvas/components/shape";
import Text from "@/modules/canvas/components/text";
import ImageBar from "@/modules/canvas/components/image";
import { pageStore } from "@/store/administration/pageStore";
import type { PageElement } from "@/store/administration/pageStore";
import LineOptions from "@/modules/canvas/components/lineOptions";
import PencilOptions from "@/modules/canvas/components/pencilOptions";
import ShapeOptions from "@/modules/canvas/components/shapeOptions";
import TextOptions from "@/modules/canvas/components/textOptions";

function Canvas() {
  const [elements, setElements, undo, redo] = useHistory([]);
  const [action, setAction] = useState("none");
  const [tool, setTool] = useState("selection");
  const [selectedElement, setSelectedElement] =
    useState<SelectedElement | null>(null);
  const [panOffset, setPanOffset] = useState({ x: 0, y: 0 });
  const [startPanMousePosition, setStartPanMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const textAreaRef = useRef<HTMLDivElement | null>(null);
  const pressedKeys = usePressedKeys();
  const [scale, setScale] = useState(1);
  const [scaleOffset, setScaleOffset] = useState({ x: 0, y: 0 });
  const [imageUrl, setImageUrl] = useState("");

  const [colorLine, setColorLine] = useState("rgb(255 255 255)");
  const [lineWidth, setLineWidth] = useState(1);
  const [pencilWidth, setPencilWidth] = useState(10);
  const [colorPencil, setColorPencil] = useState("rgb(255 255 255)");
  const [colorShape, setColorShape] = useState("rgb(255 255 255)");
  const [colorText, setColorText] = useState("rgb(255 255 255)");
  const [textSize, setTextSize] = useState(24);
  const [fillStyle, setFillStyle] = useState(false);
  const handleReturn = useRef(false);
  const valueRef = useRef<canvas[]>(elements);
  const canvasRef = useRef<HTMLCanvasElement>();

  const setCanvases = pageStore((state) => state.setPage);
  const canvases = pageStore((state) => state.page);
  const pageIdStore = pageStore((state) => state.id);
  const insertStore = pageStore((state) => state.insert);
  const setInsertStore = pageStore((state) => state.setInsert);
  const setPageIdStore = pageStore((state) => state.setId);
  console.log("elements", elements);
  console.log("selectedElement", selectedElement);

  useLayoutEffect(() => {
    const textLists = document.querySelectorAll("[data-text=textList]");
    const canvas = document.getElementById("canvas") as HTMLCanvasElement;
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

    const scaleHeight = canvas.height * scale;
    const scaleWidth = canvas.width * scale;
    // 559 908
    const scaleOffsetX = (scaleWidth - canvas.width) / 2; //454
    const scaleOffsetY = (scaleHeight - canvas.height) / 2; //280

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (const i of textLists) {
      i.remove();
    }
    ctx.lineWidth = 2;

    //change the size of one rectangle, then redraw both of them

    setScaleOffset({ x: scaleOffsetX, y: scaleOffsetY });
    ctx.save();
    ctx.translate(
      panOffset.x * scale - scaleOffsetX,
      panOffset.y * scale - scaleOffsetY
    );
    ctx.scale(scale, scale);
    for (const e of elements) {
      if (
        action === "writing" &&
        selectedElement &&
        selectedElement.id === e.id
      )
        return;
      createElement(e);
    }

    ctx.restore();
    if (action === "writing2" && selectedElement) {
      const divText = document.getElementById(
        selectedElement.id.toString()
      ) as HTMLElement;
      divText.contentEditable = "true";
      const selection = document.getSelection();
      const range = document.createRange();
      //const contenteditable=document.querySelector('div[contenteditable="true"]');

      if (divText.lastChild && divText.lastChild.nodeType === 3) {
        range.setStart(divText.lastChild, 1);
      } else {
        range.setStart(divText, divText.childNodes.length);
      }
      selection?.removeAllRanges();
      selection?.addRange(range);

      divText.focus();
    }
  }, [elements, action, selectedElement, panOffset, scale]);
  useEffect(() => {
    const canvas = document.getElementById("canvas") as HTMLCanvasElement;
    valueRef.current = elements;
    canvasRef.current = canvas;
  }, [elements]);
  // biome-ignore lint/correctness/useExhaustiveDependencies(canvases): <explanation>
  // useEffect(() => {
  //   return () => {
  //     setTimeout(() => {
  //       if (handleReturn.current) {
  //         const canvasesCopy = [...canvases]
  //         const canvas = canvasRef.current as HTMLCanvasElement
  //         const ctx = canvas.getContext('2d') as CanvasRenderingContext2D
  //         ctx.translate(0, 0)

  //         const url = canvas.toDataURL() as string
  //         for (const e of valueRef.current) {
  //           e.focus = false
  //         }
  //         console.log('pageIDstore', pageIdStore)

  //         if (insertStore && pageIdStore !== null) {
  //           const newCanvas = {
  //             id: canvases.length,
  //             canvas: valueRef.current,
  //             url,
  //             type: 'drawning',
  //           }
  //           const index = canvasesCopy.findIndex((e) => e.id === pageIdStore)
  //           console.log('index', index)

  //           canvasesCopy.splice(index + 1, 0, newCanvas)
  //           setCanvases(canvasesCopy)
  //           setPageIdStore(null)
  //           setInsertStore(false)
  //           handleReturn.current = false
  //           return
  //         }
  //         if (pageIdStore !== null) {
  //           const current = canvasesCopy.find((e) => e.id === pageIdStore) as PageElement

  //           current.canvas = valueRef.current
  //           current.url = url
  //         } else {
  //           const newCanvas = {
  //             id: canvases.length,
  //             canvas: valueRef.current,
  //             url,
  //             type: 'drawning',
  //           }
  //           canvasesCopy.push(newCanvas)
  //         }

  //         setCanvases(canvasesCopy)
  //         setPageIdStore(null)
  //         setInsertStore(false)
  //         handleReturn.current = false
  //       }
  //     }, 0)
  //   }
  // }, [])
  useEffect(() => {
    const undoRedoFunction = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key === "z") {
        undo();
      }
      if ((event.metaKey || event.ctrlKey) && event.key === "y") {
        redo();
      }
    };

    document.addEventListener("keydown", undoRedoFunction);
    return () => {
      document.removeEventListener("keydown", undoRedoFunction);
    };
  }, [undo, redo]);
  useEffect(() => {
    const textArea = textAreaRef.current;
    if (action === "writing") {
      setTimeout(() => {
        if (textArea && selectedElement) {
          textArea.innerText = selectedElement.text as string;

          const selection = document.getSelection();
          const range = document.createRange();
          //const contenteditable=document.querySelector('div[contenteditable="true"]');

          if (textArea.lastChild && textArea.lastChild.nodeType === 5) {
            range.setStart(textArea.lastChild, 1);
          } else {
            range.setStart(textArea, textArea.childNodes.length);
          }
          selection?.removeAllRanges();
          selection?.addRange(range);

          textArea.focus();
        }
      }, 0);
    }
  }, [action, selectedElement]);
  useEffect(() => {
    const focusElement = elements.some((e) => e.focus === true);
    if (
      pressedKeys.has("Delete") &&
      focusElement &&
      action !== "writing2" &&
      action !== "writing"
    ) {
      const ElementsCopy = [...elements];
      const newElements = ElementsCopy.filter((e) => e.focus === false);
      console.log("newElements9999999999999", newElements);

      setElements(newElements);
    }
    const canvas = document.getElementById("canvas") as HTMLCanvasElement;
    const panOrZoomFunction = (event: WheelEventInit) => {
      const deltaX = event.deltaX as number;
      const deltaY = event.deltaY as number;

      if (pressedKeys.has("Meta") || pressedKeys.has("Control")) {
        onZoom(deltaY * -0.01);
      } else {
        setPanOffset((prevState) => ({
          x: prevState.x - deltaX,
          y: prevState.y - deltaY,
        }));
      }
    };

    canvas.addEventListener("wheel", panOrZoomFunction);
    return () => {
      canvas.removeEventListener("wheel", panOrZoomFunction);
    };
  }, [pressedKeys]);

  useEffect(() => {
    const canvasesCopy = [...canvases];
    console.log("pageidSotre", pageIdStore);
    console.log("insertStore", insertStore);

    if (pageIdStore !== null && !insertStore) {
      const exists = canvasesCopy.find((e) => e.id === pageIdStore);
      console.log("exists", exists);

      setElements(exists?.canvas as canvas[], true);
    }

    //setElements(test, true);
  }, [canvases, insertStore, pageIdStore, setElements]);
  // useEffect(() => {
  //   handleReturn.current = true;
  //   console.log(elements);
  // }, [elements]);

  console.log("tool", tool);
  const blurTextList = (e: FocusEvent) => {
    if (selectedElement) {
      const diveTextFalse = document.getElementById(
        "divTextFalse"
      ) as HTMLElement;
      diveTextFalse?.classList.remove("hidden");
      diveTextFalse.style.fontSize = "16px";
      diveTextFalse.style.lineHeight = "1.5rem";
      const Target = e.target as HTMLElement;
      const idArea = Target.parentElement?.children[0] as HTMLElement;
      const value = Target.innerHTML;
      const copyElements = [...elements];
      const width = diveTextFalse.offsetWidth;
      const height = diveTextFalse.offsetHeight;
      const index = copyElements.findIndex((e) => e.id === selectedElement.id);
      const updateElement = {
        focus: false,
        id: selectedElement.id,
        type: selectedElement.type,
        text: value,
        text2: idArea.innerHTML,
        x1: selectedElement.x1,
        y1: selectedElement.y1,
        x2: selectedElement.x1 + width + 16.8,
        y2: selectedElement.y1 + height,
      };

      copyElements[index] = updateElement;
      console.log("copyElements9", copyElements);

      setElements(copyElements);
      setSelectedElement(null);
      setTool("selection");
      diveTextFalse?.classList.add("hidden");
    }
  };

  const createElement = async (element: canvas) => {
    const canvas = document.getElementById("canvas") as HTMLCanvasElement;
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    const minX = Math.min(element.x1, element.x2);
    const maxX = Math.max(element.x1, element.x2);
    const minY = Math.min(element.y1, element.y2);
    const maxY = Math.max(element.y1, element.y2);
    const width = maxX - minX;
    const height = maxY - minY;
    const centerX = minX + width / 2;
    const centerY = minY + height / 2;
    const focus = (value = true) => {
      if (element.focus) {
        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.moveTo(minX, minY);
        ctx.lineTo(maxX, minY);
        ctx.lineTo(maxX, maxY);
        ctx.lineTo(minX, maxY);
        ctx.lineTo(minX, minY);
        ctx.strokeStyle = "#3FA2F6";
        ctx.stroke();
        if (value) {
          ctx.beginPath();

          ctx.arc(minX, minY, 5, 0, 2 * Math.PI);
          ctx.fillStyle = "white";
          ctx.fill();
          ctx.stroke();
          ctx.beginPath();
          ctx.arc(maxX, minY, 5, 0, 2 * Math.PI);
          ctx.fillStyle = "white";
          ctx.fill();
          ctx.stroke();
          ctx.beginPath();
          ctx.arc(maxX, maxY, 5, 0, 2 * Math.PI);
          ctx.fillStyle = "white";
          ctx.fill();
          ctx.stroke();
          ctx.beginPath();
          ctx.arc(minX, maxY, 5, 0, 2 * Math.PI);
          ctx.fillStyle = "white";
          ctx.fill();
          ctx.stroke();
        }
      }
    };
    switch (element.type) {
      case "textList": {
        focus(false);
        const canvasContainer = document.getElementById("canvasContainer");

        const divTextContainer = document.createElement("div");
        const divNumeration = document.createElement("div");
        const divText = document.createElement("div") as HTMLElement;
        const divNumber1 = document.createElement("div");
        const divTextContainerClasses =
          "z-30 p-4 flex gap-2 absolute bg-gray-800 rounded-lg text-white text-base";
        const divNumerationClasses = "flex flex-col";
        const divTextClasses = "h-fit outline-none";
        divNumber1.append("1");
        divNumeration.appendChild(divNumber1);

        divText.addEventListener("blur", blurTextList);
        divText.addEventListener("input", inputDivText);
        divText.setAttribute("id", element.id.toString());
        divText.contentEditable = `${tool === "selection" ? "false" : "true"}`;
        // if (action === "writing2") {
        //   divText.contentEditable = "true";
        // }
        if (element.text2) divNumeration.innerHTML = element.text2;
        if (element.text) divText.innerHTML = element.text;
        divTextContainer.appendChild(divNumeration);
        divTextContainer.appendChild(divText);
        divTextContainer.setAttribute("data-text", "textList");

        for (const i of divTextContainerClasses.split(" ")) {
          divTextContainer.classList.add(i);
        }
        for (const i of divNumerationClasses.split(" ")) {
          divNumeration.classList.add(i);
        }
        for (const i of divTextClasses.split(" ")) {
          divText.classList.add(i);
        }
        divTextContainer.style.left = `${
          element.x1 * scale + panOffset.x * scale - scaleOffset.x
        }px`;
        divTextContainer.style.top = `${
          element.y1 * scale + panOffset.y * scale - scaleOffset.y
        }px`;
        // divTextContainer.style.top = `${element.y1 - 48}px`;
        // divTextContainer.style.left = `${element.x1 - 48}px`;

        canvasContainer?.appendChild(divTextContainer);

        //console.log("elementid", element);
        //console.log("selectedElement", selectedElement);
        if (selectedElement && selectedElement.id === element.id) {
          setTimeout(() => {
            divText.focus();
          }, 0);
        }

        break;
      }
      case "triangle": {
        focus();
        if (element.color) {
          ctx.beginPath();
          ctx.moveTo(centerX, minY);
          ctx.lineTo(maxX, maxY);
          ctx.lineTo(minX, maxY);
          ctx.lineTo(centerX, minY);
          ctx.lineWidth = 3;
          ctx.strokeStyle = element.color;
          if (element.fillStyle) {
            ctx.fillStyle = element.color;

            ctx.fill();
          }
          ctx.stroke();
          ctx.closePath();
        }

        break;
      }
      case "circle": {
        if (element.color) {
          focus();
          ctx.beginPath();
          ctx.fillStyle = "";
          ctx.lineWidth = 3;
          ctx.ellipse(
            centerX,
            centerY,
            width / 2,
            height / 2,
            Math.PI / 180,
            0,
            2 * Math.PI
          );
          if (element.fillStyle) {
            ctx.fillStyle = element.color;
            ctx.strokeStyle = "transparent";
            ctx.fill();
            ctx.stroke();
            break;
          }
          ctx.strokeStyle = element.color;
          ctx.stroke();
          break;
        }
        return;
      }

      case "line":
        if (element.color && element.lineWidth) {
          if (element.focus) {
            ctx.beginPath();
            ctx.lineWidth = 2;

            ctx.strokeStyle = "#3FA2F6";
            ctx.arc(element.x1, element.y1, 5, 0, 2 * Math.PI);
            ctx.fillStyle = "white";
            ctx.fill();
            ctx.stroke();
            ctx.beginPath();
            ctx.arc(element.x2, element.y2, 5, 0, 2 * Math.PI);
            ctx.fillStyle = "white";
            ctx.fill();
            ctx.stroke();
            ctx.stroke();
          }
          ctx.beginPath();
          ctx.strokeStyle = element.color;
          ctx.lineWidth = element.lineWidth;
          ctx.moveTo(element.x1, element.y1);
          ctx.lineTo(element.x2, element.y2);
          ctx.stroke();
        }
        break;
      case "rectangle":
        focus();
        if (element.color) {
          if (element.fillStyle) {
            ctx.beginPath();

            ctx.rect(
              element.x1,
              element.y1,
              element.x2 - element.x1,
              element.y2 - element.y1
            );
            ctx.fillStyle = element.color;
            ctx.fill();
          } else {
            ctx.beginPath();
            ctx.lineWidth = 3;
            ctx.strokeStyle = element.color;
            ctx.strokeRect(
              element.x1,
              element.y1,
              element.x2 - element.x1,
              element.y2 - element.y1
            );
          }
        }

        break;
      case "pencil":
        {
          if (element.points) {
            const stroke = getSvgPathFromStroke(
              getStroke(element.points, {
                size: element.pencilWidth,
              })
            );
            ctx.fillStyle = element.colorPencil as string;
            ctx.fill(new Path2D(stroke));
          }
        }
        break;
      case "text":
        {
          let lineHeight = 0;
          switch (element.size as number) {
            case 34:
              lineHeight = 38;
              break;
            case 30:
              lineHeight = 34;
              break;
            case 24:
              lineHeight = 29;
              break;
            case 20:
              lineHeight = 23;
              break;
            case 14:
              lineHeight = 15;
              break;
            case 10:
              lineHeight = 11;
              break;

            default:
              break;
          }
          focus(false);
          ctx.beginPath();
          ctx.fillStyle = element.color as string;
          ctx.textBaseline = "top";
          ctx.font = `${element.size as number}px sans-serif`;
          const lines = element.text?.split("\n") as string[];

          for (let i = 0; i < lines.length; i++) {
            ctx.fillText(
              lines[i],
              element.x1 as number,
              (element.y1 as number) + i * lineHeight
            );
          }
        }
        break;
      case "image":
        {
          const image = new Image();
          image.src = element.src as string;

          ctx.drawImage(
            image,
            element.x1,
            element.y1,
            element.x2 - element.x1,
            element.y2 - element.y1
          );
          focus();
        }
        break;
      default:
        break;
    }
  };

  const getElementAtPosition = (
    clientX: number,
    clientY: number,
    elements: canvas[]
  ) => {
    return elements
      .map((element) => ({
        ...element,
        position: positionWithinElement(clientX, clientY, element),
      }))
      .find((element) => element.position !== null);
  };
  const generateElementType = (clientX: number, clientY: number) => {
    let id: number;
    if (elements.length !== 0) {
      id = elements[elements.length - 1].id + 1;
    } else {
      id = 1;
    }
    switch (tool) {
      case "triangle":
      case "rectangle":
      case "circle": {
        const newElement = {
          fillStyle,
          focus: false,
          color: colorShape,
          x1: clientX,
          y1: clientY,
          x2: clientX,
          y2: clientY,
          type: tool,
          id: id,
        };
        return newElement;
      }
      case "line": {
        const newElement = {
          focus: false,
          lineWidth,
          color: colorLine,
          x1: clientX,
          y1: clientY,
          x2: clientX,
          y2: clientY,
          type: tool,
          id: id,
        };
        return newElement;
      }
      case "pencil": {
        const newElement = {
          focus: false,
          colorPencil,
          pencilWidth,
          points: [{ x: clientX, y: clientY }],
          type: tool,
          id: id,
        };
        return newElement;
      }
      case "text":
      case "textList": {
        const newElement = {
          focus: false,
          x1: clientX,
          y1: clientY,
          color: colorText,
          size: textSize,
          text: "",
          type: tool,
          id: id,
        };
        return newElement;
      }
      case "image": {
        if (!imageUrl) return "";
        const cursorImage = document.getElementById(
          "cursorImage"
        ) as HTMLImageElement;
        const img = document.getElementById("img") as HTMLImageElement;
        const body = document.body;
        const input = document.getElementById("inputFile") as HTMLInputElement;
        input.value = "";
        let divider = 0;
        cursorImage.classList.remove("hidden");
        const width = img.naturalWidth;
        const height = img.naturalHeight;
        if (width > 500 || height > 500) divider = 2;
        if (width > 1000 || height > 1000) divider = 3;
        if (width > 1500 || height > 1500) divider = 4;
        if (width > 2000 || height > 2000) divider = 5;
        const X = divider ? width / divider : width;
        const Y = divider ? height / divider : height;
        const offsetX = X / 2;
        const offsetY = Y / 2;

        img.src = "";
        const newElement = {
          focus: true,
          x1: clientX - offsetX,
          y1: clientY - offsetY,
          x2: clientX + offsetX,
          y2: clientY + offsetY,
          src: imageUrl,
          type: tool,
          id: id,
        };
        cursorImage.classList.add("hidden");
        cursorImage.src = "";
        body.style.cursor = "auto";
        return newElement;
      }
      default:
        break;
    }
  };

  const getMouseCoordinates = (
    event: React.MouseEvent<HTMLCanvasElement, MouseEvent>
  ) => {
    const clientX =
      (event.clientX - panOffset.x * scale + scaleOffset.x) / scale;
    const clientY =
      (event.clientY - panOffset.y * scale + scaleOffset.y) / scale;
    return { clientX, clientY };
  };
  useEffect(() => {
    const canvas = document.getElementById("canvas") as HTMLElement;
    switch (tool) {
      case "line":
      case "pencil":
      case "rectangle":
      case "triangle":
      case "circle":
        canvas.style.cursor = "crosshair";
        break;
      case "eraser":
        canvas.style.cursor = "no-drop";
        break;
      case "text":
        canvas.style.cursor = "text";
        break;
      case "image":
        break;
      default:
        //canvas.style.cursor = "auto";
        break;
    }
  }, [tool]);
  //console.log("selectedElement", selectedElement);

  const handleMouseDown = (
    e: React.MouseEvent<HTMLCanvasElement, MouseEvent>
  ) => {
    //e.preventDefault();
    if (tool === "none") return;
    if (action === "writing") return;
    if (action === "writing2") return;
    if (action === "textListing") {
      setAction("none");
      return;
    }

    const { clientX, clientY } = getMouseCoordinates(e);

    if (e.button === 1 || pressedKeys.has(" ")) {
      const canvas = document.getElementById("canvas") as HTMLElement;
      canvas.style.cursor = "grab";

      setAction("panning");
      setStartPanMousePosition({ x: clientX, y: clientY });
      return;
    }

    if (tool === "eraser") {
      setAction("erasing");
      return;
    }
    if (tool === "selection") {
      const element = getElementAtPosition(clientX, clientY, elements);

      if (element) {
        if (element.type === "pencil" && element.points) {
          const xOffsets = element.points.map((point) => clientX - point.x);
          const yOffsets = element.points.map((point) => clientY - point.y);

          setSelectedElement({ ...element, xOffsets, yOffsets });
        } else {
          const offsetX = clientX - element.x1;
          const offsetY = clientY - element.y1;

          setSelectedElement({ ...element, offsetX, offsetY });
        }
        const copyElements = [...elements];
        for (const e of copyElements) {
          e.focus = e.id === element.id;
        }

        console.log("copyElements10", copyElements);

        setElements(copyElements, true);

        if (element.position === "inside") {
          setAction("moving");
        } else {
          setAction("resizing");
        }
      } else {
        const copyElements = [...elements];

        for (const e of copyElements) {
          e.focus = false;
        }
        console.log("copyElements", copyElements);
        setElements(copyElements, true);
      }
    } else {
      const newElement = generateElementType(
        clientX,
        clientY
      ) as SelectedElement;

      if (newElement) {
        const canvas = document.getElementById("canvas") as HTMLElement;
        setSelectedElement(newElement);
        const copyElements = [...elements];
        for (const e of copyElements) {
          e.focus = false;
        }

        copyElements.push(newElement);
        console.log("copyElements2", copyElements);
        setElements(copyElements);
        setImageUrl("");
        if (action === "addingImage") {
          canvas.style.cursor = "auto";
          setAction("none");
          setTool("selection");
          return;
        }
        if (tool === "textList") {
          setAction("textListing");
          return;
        }
        setAction(tool === "text" ? "writing" : "drawning");
        console.log("activating textoll");
      }
    }
  };

  const handleMouseMove = (
    e: React.MouseEvent<HTMLCanvasElement, MouseEvent>
  ) => {
    if (tool === "none") return;
    const { clientX, clientY } = getMouseCoordinates(e);
    if (action === "textListing" || action === "writing") {
      return;
    }

    if (action === "panning") {
      const canvas = document.getElementById("canvas") as HTMLElement;
      canvas.style.cursor = "grab";
      const deltaX = clientX - startPanMousePosition.x;
      const deltaY = clientY - startPanMousePosition.y;
      setPanOffset({
        x: panOffset.x + deltaX,
        y: panOffset.y + deltaY,
      });
      if (imageUrl) {
        const cursorImage = document.getElementById(
          "cursorImage"
        ) as HTMLImageElement;
        cursorImage.classList.add("hidden");
      }
      return;
    }
    if (imageUrl && action === "addingImage") {
      const cursorImage = document.getElementById(
        "cursorImage"
      ) as HTMLImageElement;
      const canvas = document.getElementById("canvas") as HTMLElement;
      const img = document.getElementById("img") as HTMLImageElement;
      let divider = 0;
      const width = img.naturalWidth;
      const height = img.naturalHeight;
      if (width > 500 || height > 500) divider = 2;
      if (width > 1000 || height > 1000) divider = 3;
      if (width > 1500 || height > 1500) divider = 4;
      if (width > 2000 || height > 2000) divider = 5;
      const X = divider ? width / divider : width;
      const Y = divider ? height / divider : height;
      const offsetX = X / 2;
      const offsetY = Y / 2;
      canvas.style.cursor = "none";
      cursorImage.classList.remove("hidden");

      cursorImage.style.width = `${X}px`;
      cursorImage.style.height = `${Y}px`;
      cursorImage.style.left = `${
        (clientX - offsetX) * scale + panOffset.x * scale - scaleOffset.x
      }px`;
      cursorImage.style.top = `${
        (clientY - offsetY) * scale + panOffset.y * scale - scaleOffset.y
      }px`;
      cursorImage.src = imageUrl;
    }
    if (action === "addingImage") return;

    const element = getElementAtPosition(clientX, clientY, elements);
    if (tool === "selection") {
      const Target = e.target as HTMLElement;
      Target.style.cursor = element
        ? cursorForPosition(element.position as string)
        : "default";
    }

    if (action === "drawning" && selectedElement) {
      const { type } = selectedElement;
      const elementsCopy = [...elements];
      const currentElement = elementsCopy[elements.length - 1];
      if (type === "pencil") {
        currentElement.points = [
          ...(currentElement.points as Point[]),
          { x: clientX, y: clientY },
        ];
      } else {
        currentElement.x2 = clientX;
        currentElement.y2 = clientY;
      }
      console.log("copyElements4", elementsCopy);
      setElements(elementsCopy, true);
    } else if (action === "moving" && selectedElement) {
      if (selectedElement.type === "pencil" && selectedElement.points) {
        const newPoints = selectedElement.points.map((_, index) => {
          if (selectedElement.xOffsets && selectedElement.yOffsets) {
            const result = {
              x: clientX - selectedElement.xOffsets[index],
              y: clientY - selectedElement.yOffsets[index],
            };
            return result;
          }
        });
        const elementsCopy = [...elements];
        const index = elements.findIndex((e) => e.id === selectedElement.id);
        elementsCopy[index] = {
          ...elementsCopy[index],
          points: newPoints as Point[],
        };
        console.log("elementsCopy5", elementsCopy);

        setElements(elementsCopy, true);
      } else {
        const { id, x1, y1, x2, y2, offsetX, offsetY, text } = selectedElement;
        if (offsetX && offsetY) {
          const width = x2 - x1;
          const height = y2 - y1;
          const nextX1 = clientX - offsetX;
          const nextY1 = clientY - offsetY;

          updateElement(
            id,
            nextX1,
            nextY1,
            nextX1 + width,
            nextY1 + height,
            text
          );
        }
      }
    } else if (action === "resizing") {
      const { id, position, ...coordinates } =
        selectedElement as SelectedElement;

      const { x1, y1, x2, y2 } = resizedCoordinates(
        clientX,
        clientY,
        position as string,
        coordinates
      ) as coordinates;
      updateElement(id, x1, y1, x2, y2);
    } else if (action === "erasing") {
      const canvas = document.getElementById("canvas") as HTMLElement;
      canvas.style.cursor = "no-drop";

      if (element) {
        const { id } = element;
        const ElementsCopy = [...elements];
        const newElements = ElementsCopy.filter((e) => e.id !== id);
        console.log("newElements6", newElements);

        setElements(newElements);
      }
    }
  };

  const updateElement = (
    id: number,
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    text = "null"
  ) => {
    const copyElements = [...elements];
    const elementForUpdate = copyElements.find((e) => e.id === id);
    const index = copyElements.findIndex((e) => e.id === id);
    let newElement = null;
    switch (elementForUpdate?.type) {
      case "rectangle":
      case "triangle":
      case "circle":
      case "line":
        {
          newElement = {
            focus: elementForUpdate.focus,
            fillStyle: elementForUpdate.fillStyle,
            lineWidth: elementForUpdate.lineWidth,
            color: elementForUpdate.color,
            x1,
            y1,
            x2,
            y2,
            type: elementForUpdate.type,
            id,
          };
        }
        break;
      case "image":
        {
          newElement = {
            focus: elementForUpdate.focus,
            x1,
            y1,
            x2,
            y2,
            type: elementForUpdate.type,
            src: elementForUpdate.src,
            id,
          };
        }
        break;
      case "text":
        {
          const ctx = (
            document.getElementById("canvas") as HTMLCanvasElement
          ).getContext("2d") as CanvasRenderingContext2D;
          const divTextFalse = document.getElementById(
            "divTextFalse2"
          ) as HTMLElement;
          const textHeight = elementForUpdate.size as number;
          divTextFalse.classList.remove("hidden");

          divTextFalse.innerText = text;
          divTextFalse.style.font = `${textHeight}px sans-serif`;
          ctx.font = `${textHeight}px sans-serif`;

          let lineHeight = 0;
          switch (textHeight as number) {
            case 34:
              lineHeight = 38;
              break;
            case 30:
              lineHeight = 34;
              break;
            case 24:
              lineHeight = 27;
              break;
            case 20:
              lineHeight = 23;
              break;
            case 14:
              lineHeight = 16;
              break;
            case 10:
              lineHeight = 11.5;
              break;

            default:
              break;
          }
          divTextFalse.style.lineHeight = `${lineHeight}px`;
          const width = divTextFalse.offsetWidth;
          const height = divTextFalse.offsetHeight;

          //const textHeight = ctx.measureText('M').width;

          newElement = {
            focus: elementForUpdate.focus,
            color: elementForUpdate.color,
            size: textHeight,
            x1,
            y1,
            x2: x1 + width,
            y2: y1 + height,

            text,
            type: elementForUpdate.type,
            id,
          };
          divTextFalse.classList.add("hidden");
        }
        break;
      case "textList": {
        newElement = {
          focus: elementForUpdate.focus,
          text: elementForUpdate.text,
          text2: elementForUpdate.text2,
          x1,
          y1,
          x2,
          y2,

          type: elementForUpdate.type,
          id,
        };
        break;
      }
      default:
        break;
    }
    if (newElement) {
      copyElements[index] = newElement;
      console.log("copyElements7", copyElements);

      setElements(copyElements, true);
    }
  };

  const handleMouseUp = (
    e: React.MouseEvent<HTMLCanvasElement, MouseEvent>
  ) => {
    if (tool === "none") return;
    const { clientX, clientY } = getMouseCoordinates(e);
    if (action === "panning") {
      const canvas = document.getElementById("canvas") as HTMLElement;
      canvas.style.cursor = "auto";
    }
    if (selectedElement) {
      if (selectedElement.offsetX && selectedElement.offsetY) {
        if (
          selectedElement.type === "textList" &&
          clientX - selectedElement.offsetX === selectedElement.x1 &&
          clientY - selectedElement.offsetY === selectedElement.y1
        ) {
          setAction("writing2");
          setTool("none");

          return;
        }
        if (
          selectedElement.type === "text" &&
          clientX - selectedElement.offsetX === selectedElement.x1 &&
          clientY - selectedElement.offsetY === selectedElement.y1
        ) {
          setAction("writing");

          return;
        }
      }
      if (action === "drawning" || action === "resizing") {
        const id = selectedElement.id;
        const currentElement = elements.find((e) => e.id === id) as canvas;
        const { x1, y1, x2, y2 } = adjustElementCoordinates(currentElement);
        if (tool !== "pencil" && tool !== "text" && tool !== "image")
          updateElement(id, x1, y1, x2, y2);
        setTool("selection");
        setAction("none");
        setSelectedElement(null);
        return;
      }
      if (action === "writing") return;
    }
    if (action === "textListing") return;

    setAction("none");
    setSelectedElement(null);
  };
  const handleBlur = (
    e: React.FocusEvent<HTMLDivElement, globalThis.Element>
  ) => {
    const { id, x1, y1 } = selectedElement as SelectedElement;
    const Target = e.target as HTMLDivElement;
    const text = Target.innerText;

    if (!text) {
      setAction("none");
      setTool("selection");
      setSelectedElement(null);
      return;
    }

    setAction("none");
    setTool("selection");
    setSelectedElement(null);
    updateElement(id, x1, y1, 0, 0, text);
  };
  const onZoom = (e: number) => {
    setScale((state) => Math.min(Math.max(state + e, 0.1), 20));
  };

  const onFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const files = event.target.files;
    if (files) {
      const img = document.getElementById("img") as HTMLImageElement;

      if (files.length === 0) return;
      if (files[0].type.split("/")[0] !== "image") return;
      const imageUrl = URL.createObjectURL(files[0]);
      img.src = imageUrl;
      setAction("addingImage");
      setTool("image");
      setImageUrl(imageUrl);
    }
  };

  const ChangeSize = () => {
    if (selectedElement?.size === 34) return 5.2;
    if (selectedElement?.size === 30) return 3.4;
    if (selectedElement?.size === 24) return 3;
    if (selectedElement?.size === 20) return 2;
    if (selectedElement?.size === 14) return 1.9;
    if (selectedElement?.size === 10) return 0.7;
    return 0;
  };
  const disableEslint = () => {};
  return (
    <div
      id="canvasContainer"
      className="font-normal text-base bg-[#141414] min-w-screen min-h-screen h-full w-full overflow-hidden relative"
    >
      <img
        src=""
        alt="imageHidden"
        className="hidden pointer-events-none outline-none"
        id="img"
      />
      <section className=" fixed bottom-2 left-1/2 -translate-x-1/2 z-50 bg-transparent">
        <div className="overflow-hidden flex gap-4 p-4 text-white z-50 w-full bg-black border-gray-500 border-[1px] h-14 rounded-2xl">
          <div className="flex gap-1 items-center">
            <button type="button" onClick={() => onZoom(-0.1)}>
              -
            </button>
            <span onKeyDown={disableEslint} onClick={() => setScale(1)}>
              {new Intl.NumberFormat("en-GB", { style: "percent" }).format(
                scale
              )}
            </span>
            <button type="button" onClick={() => onZoom(+0.1)}>
              +
            </button>
          </div>
          <div className="flex gap-1 items-center ">
            <Select tool={tool} setTool={setTool} />
            <Line tool={tool} setTool={setTool} />
            <Pencil tool={tool} setTool={setTool} />
            <Eraser tool={tool} setTool={setTool} />
            <Shape tool={tool} setTool={setTool} />
            <Text tool={tool} setTool={setTool} />
            <ImageBar setTool={setTool} />
            <input
              type="file"
              className="hidden"
              id="inputFile"
              onChange={onFileSelect}
            />
          </div>
        </div>
        <LineOptions
          tool={tool}
          colorLine={colorLine}
          setColorLine={setColorLine}
          setLineWidth={setLineWidth}
        />
        <PencilOptions
          tool={tool}
          colorPencil={colorPencil}
          setColorPencil={setColorPencil}
          setPencilWidth={setPencilWidth}
        />
        <ShapeOptions
          setTool={setTool}
          tool={tool}
          colorShape={colorShape}
          setColorShape={setColorShape}
          setFillStyle={setFillStyle}
          fillStyle={fillStyle}
        />
        <TextOptions
          setTool={setTool}
          tool={tool}
          colorText={colorText}
          setColorText={setColorText}
          setTextSize={setTextSize}
          textSize={textSize}
        />
      </section>
      {action === "writing" && selectedElement ? (
        <div
          contentEditable="true"
          ref={textAreaRef}
          onBlur={(e) => handleBlur(e)}
          style={{
            color: `${selectedElement ? selectedElement.color : colorText}`,
            position: "fixed",
            top:
              (selectedElement.y1 - ChangeSize()) * scale +
              panOffset.y * scale -
              scaleOffset.y,
            left:
              selectedElement.x1 * scale + panOffset.x * scale - scaleOffset.x,

            font: `${
              selectedElement.size ? selectedElement.size * scale : 24 * scale
            }px sans-serif`,
            margin: 0,
            padding: 0,
            border: 0,
            outline: 0,

            whiteSpace: "pre",
            //background: "transparent",
            zIndex: 2,
          }}
          className="text-white w-max overflow-visible "
        />
      ) : null}
      <canvas
        className="test bg-transparent"
        id="canvas"
        width={window.innerWidth}
        height={window.innerHeight}
        onMouseDown={(e) => handleMouseDown(e)}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        style={{ position: "absolute", zIndex: 40 }}
      />
      <div
        id="divTextFalse"
        className="hidden w-fit bg-red-500 ml-2 mt-2 p-4 text-base"
      />
      <div
        id="divTextFalse2"
        className="hidden w-fit bg-blue-500 ml-2 mt-2  "
      />
      <img
        id="cursorImage"
        src=""
        alt="Cursor"
        className="absolute z-[60] hidden pointer-events-none"
      />
    </div>
  );
}

export default Canvas;
