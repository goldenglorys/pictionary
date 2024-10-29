import { useKeys } from "../providers/keysProvider";
import { Button } from "../common/button";
import Navigation from "./navigation";
export default function SettingsPage() {
  const { keys, setKeys } = useKeys();

  const handleClearKey = () => {
    setKeys(null);
  };

  return (
    <div className="min-h-screen pt-24 pb-16 bg-black text-white">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Settings</h1>

        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-bold mb-4">API Key Management</h2>
            {keys ? (
              <div>
                <p className="text-white/70">API Key is present.</p>
                <Button onClick={handleClearKey} className="mt-4">
                  Clear API Key
                </Button>
              </div>
            ) : (
              <p className="text-white/70">No API Key is present.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
