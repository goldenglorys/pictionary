import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { KeysProvider } from "./providers/keysProvider";
import { LetMeGuessProvider } from "./providers/letMeGuessProvider";
import { EnterKey } from "./components/enterKey";
import { LetMeGuess } from "./components/letMeGuess";
import LandingPage from "./components/LandingPage";
import HowToPlayPage from "./components/howToPlay";
import SettingsPage from "./components/settingsPage";
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
    <div
      className="min-h-screen"
      style={{ backgroundImage: `url(${GRID_TILE})` }}
    >
      <LetMeGuessProvider>
        <LetMeGuess />
      </LetMeGuessProvider>
    </div>
  );
}

export default function RootLayout() {
  return (
    <div className={"overflow-hidden"}>
      <KeysProvider>
        <Router>
          <div className="min-h-screen">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/play" element={<App />} />
              <Route path="/how-to-play" element={<HowToPlayPage />} />
              <Route path="/settings" element={<SettingsPage />} />
            </Routes>
          </div>
        </Router>
      </KeysProvider>
    </div>
  );
}
