import { Link } from "react-router-dom";
import { Button } from "../common/button";
import { Separator } from "../common/separator";
import { useDrawEditor } from "../providers/drawEditorProvider";
import { FileIcon, Home, Undo } from "lucide-react";

export function TopCommands() {
  const { clear, undoStack, undo } = useDrawEditor();
  return (
    <div className="fixed top-0 left-0 w-full z-20">
      <Link to="/" className="flex items-center justify-center">
        <Button variant={"outline"} size={"icon"}>
          <Home size={16}>
            <title>home</title>
          </Home>
        </Button>
      </Link>
      <div className="m-1 flex gap-2">
        <Button
          variant={"outline"}
          size={"icon"}
          onClick={clear}
          disabled={undoStack.length === 0}
        >
          <FileIcon size={16}>
            <title>clear</title>
          </FileIcon>
        </Button>
        <Separator orientation="vertical" className="h-10 hidden" />

        <div className="flex-1" />
        <Button
          title="undo"
          variant={"outline"}
          size={"icon"}
          onClick={undo}
          disabled={undoStack.length === 0}
        >
          <Undo>
            <title>undo</title>
          </Undo>
        </Button>
      </div>
    </div>
  );
}
