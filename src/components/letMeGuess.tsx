import { DrawCanvas } from "./drawCanvas";
import { DrawEditorProvider } from "../providers/drawEditorProvider";
import { TopCommands } from "./topCommands";
import { PaletteBar } from "./paletteBar";
import { PenAndEraserBar } from "./penAndEraserBar";
import { useLetMeGuess } from "../providers/letMeGuessProvider";
import { TopChrome } from "./topChrome";
import { Button } from "../common/button";
import { LogOut } from "lucide-react";
import { useKeys } from "../providers/keysProvider";

export function LetMeGuess() {
  const { setCurrentImage } = useLetMeGuess();
  const { setKeys } = useKeys();

  return (
    <div className="min-h-screen pt-16">
      <DrawEditorProvider>
        <DrawCanvas onImageChange={setCurrentImage} />
        <TopCommands />
        <PaletteBar />
        <PenAndEraserBar />
      </DrawEditorProvider>
      <TopChrome />
      <Button
        className="fixed bottom-1 right-1"
        size={"icon"}
        variant={"default"}
        onClick={() => setKeys(null)}
      >
        <LogOut>
          <title>logout</title>
        </LogOut>
      </Button>
    </div>
  );
}
