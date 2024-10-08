import { SliderVertical } from "../common/sliderVertical";
import { Button } from "../common/button";
import { cn } from "../lib/utils";
import { useDrawEditor } from "../providers/drawEditorProvider";
import { Eraser, Pen } from "lucide-react";
import { useEffect, useState } from "react";

export function PenAndEraserBar() {
  const { tool, setTool, lineSize, setLineSize, selectedColor } =
    useDrawEditor();
  const [showStroke, setShowStroke] = useState(false);

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    setShowStroke(true);
    const timer = setTimeout(() => {
      setShowStroke(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [lineSize]);

  return (
    <div className="fixed right-1 flex flex-col items-center gap-1 top-1/2 -translate-y-1/2">
      <Button
        title="pen"
        variant={tool === "pen" ? "default" : "outline"}
        size={"icon"}
        onClick={() => setTool("pen")}
      >
        <Pen size={16} />
      </Button>

      <SliderVertical
        value={[lineSize]}
        onValueChange={(value) => setLineSize(value[0])}
        max={100}
        min={1}
        step={1}
        className="h-[200px]"
        title="slider"
      />
      <Button
        title="eraser"
        variant={tool === "eraser" ? "default" : "outline"}
        size={"icon"}
        onClick={() => setTool("eraser")}
      >
        <Eraser size={16} />
      </Button>
      <div
        className={cn(
          "bg-red-500  absolute right-[30px] top-1/2 -translate-y-1/2 rounded-full",
          !showStroke && "!hidden"
        )}
        style={{
          width: `${lineSize}px`,
          height: `${lineSize}px`,
          backgroundColor: selectedColor,
        }}
      />
    </div>
  );
}
