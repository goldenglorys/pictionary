import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import Navigation from "./navigation";

export default function HowToPlayPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 bg-black text-white">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">How to Play</h1>

        <div className="space-y-8 text-center">
          <div className="flex flex-col items-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center font-bold text-xl">
              1
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Enter Your API Key</h3>
              <p className="text-white/70">
                Upon opening the app, you will be prompted to enter your GROQ
                API key. This key is securely stored and used for game features.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center font-bold text-xl">
              2
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Start Playing</h3>
              <p className="text-white/70">
                Once your API key is set, you can start drawing pictures. Use
                the drawing tools provided to create your masterpiece. Watch the
                AI guess as you draw; get creative on the canvas!
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center font-bold text-xl">
              3
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Have Fun</h3>
              <p className="text-white/70">
                Keep playing and see how well you can communicate with the
                machine through drawings!
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center font-bold text-xl">
              4
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Log Out</h3>
              <p className="text-white/70">
                You can log out at any time by clicking the logout button. This
                will clear your securely stored API key from the storage.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/play"
            className="inline-flex items-center px-8 py-4 text-lg font-medium text-black bg-white rounded-lg hover:bg-white/90"
          >
            Start Playing <ChevronRight className="ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}
