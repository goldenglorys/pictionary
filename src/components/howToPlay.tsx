import { Link } from "react-router-dom";
import { ChevronRight, Key, Play, Pencil, Smile, Home } from "lucide-react";
import Navigation from "./navigation";

export default function HowToPlayPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 bg-black text-white">
      <Navigation />

      <div className="max-w-3xl mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold mb-8">How to Play</h1>

        <ul className="space-y-12">
          <li>
            <Key size={32} className="text-white/70 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Enter Your API Key</h3>
            <p className="text-white/70">
              Upon clicking "Play," you will be prompted to enter your GROQ API
              key if it is not already present. This key is securely stored and
              encrypted locally on your device.
            </p>
          </li>

          <li>
            <Play size={32} className="text-white/70 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Start Playing</h3>
            <p className="text-white/70">
              Once your API key is set, you can start drawing pictures. Use the
              drawing tools provided to create your masterpiece. Watch the AI
              guess as you draw; get creative on the canvas!
            </p>
          </li>

          <li>
            <Pencil size={32} className="text-white/70 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Canvas Tools</h3>
            <p className="text-white/70">
              Change from pencil to eraser by selecting the eraser tool.
              Increase the size of the tools by adjusting the size slider.
              Change the color of the tools or the pencil by selecting a color
              from the palette.
            </p>
          </li>

          <li>
            <Smile size={32} className="text-white/70 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Have Fun</h3>
            <p className="text-white/70">
              Keep playing and see how well you can communicate with the machine
              through drawings!
            </p>
          </li>

          <li>
            <Home size={32} className="text-white/70 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Go Back Home</h3>
            <p className="text-white/70">
              You can go back to the home page at any time by clicking the
              little home icon on the top center.
            </p>
          </li>
        </ul>

        <div className="mt-12">
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
