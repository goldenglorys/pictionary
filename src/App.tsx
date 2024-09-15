import { useState, useEffect } from "react";
import { KeysProvider } from "./providers/keysProvider";
import { LetMeGuessProvider } from "./providers/letMeGuessProvider";
import { EnterKey } from "./components/enterKey";
import { LetMeGuess } from "./components/letMeGuess";
import { Button } from "./common/button";
import { LogOut } from "lucide-react";
import { useKeys } from "./providers/keysProvider";
import { createGridTile } from "./lib/utils";
import "./App.css";

const GRID_TILE = createGridTile(10, 10);

function App() {
  const { keys, setKeys } = useKeys();
  const [inited, setInited] = useState(false);

  useEffect(() => {
    if (inited) return;
    setInited(true);
  }, [inited]);

  if (!inited) {
    return (
      <main className="w-full h-svh flex items-center justify-center">
        Loading...
      </main>
    );
  }

  if (!keys) {
    return <EnterKey onSuccess={(k) => setKeys(k)} />;
  }

  return (
    <>
      <main className="h-svh" style={{ backgroundImage: `url(${GRID_TILE})` }}>
        <LetMeGuessProvider>
          <LetMeGuess />
        </LetMeGuessProvider>
        <Button
          className="fixed bottom-1 right-1"
          size={"icon"}
          variant={"ghost"}
          onClick={() => setKeys(null)}
        >
          <LogOut>
            <title>logout</title>
          </LogOut>
        </Button>
      </main>
    </>
  );
}

export default function RootLayout() {
  return (
    <div className={"overflow-hidden"}>
      <KeysProvider>
        <App />
      </KeysProvider>
    </div>
  );
}
