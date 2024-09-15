import { useKeyboardShortcut } from "../hooks/useKeyboardShortcut";
import { useViewportSize } from "../hooks/useViewportSize";
import { useDrawEditor } from "../providers/drawEditorProvider";
import { useEffect } from "react";

export function DrawCanvas({
  onImageChange,
}: {
  onImageChange?: (image: string | null) => void;
}) {
  const { canvasRef, image, undo } = useDrawEditor();
  const { width, height } = useViewportSize();

  useKeyboardShortcut({
    char: "z",
    meta: true,
    callback: undo,
  });

  useEffect(() => {
    onImageChange?.(image);
  }, [image, onImageChange]);

  return (
    <>
      <canvas
        ref={canvasRef}
        width={width}
        height={height}
        className="  fixed inset-0 "
      />
    </>
  );
}
