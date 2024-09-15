import { DrawCanvas } from "./drawCanvas";
import { DrawEditorProvider } from "../providers/drawEditorProvider";
import { TopCommands } from "./topCommands";
import { PaletteBar } from "./paletteBar";
import { PenAndEraserBar } from "./penAndEraserBar";
import { useLetMeGuess } from "../providers/letMeGuessProvider";
import { TopChrome } from "./topChrome";

export function LetMeGuess() {
  const { setCurrentImage } = useLetMeGuess();
  return (
    <>
      <DrawEditorProvider>
        <DrawCanvas onImageChange={setCurrentImage} />
        <TopCommands />
        <PaletteBar />
        <PenAndEraserBar />
      </DrawEditorProvider>
      <TopChrome />
    </>
  );
}
