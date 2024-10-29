import { Link } from "react-router-dom";
import { ChevronRight, Pencil, Brain, Users } from "lucide-react";
import Navigation from "./navigation";

export default function LandingPage() {
  return (
    <div className="min-h-screen pt-16 bg-black text-white">
      <Navigation />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-20 text-center">
          <h1 className="text-6xl font-bold mb-6">Draw, Guess, Play with AI</h1>
          <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
            Experience the future of Pictionary with GROQ's advanced AI. Draw
            anything and watch the AI guess in real-time, or challenge yourself
            to guess what the AI draws.
          </p>
          <Link
            to="/play"
            className="inline-flex items-center px-8 py-4 text-lg font-medium text-black bg-white rounded-lg hover:bg-white/90"
          >
            Start Playing <ChevronRight className="ml-2" />
          </Link>
        </div>

        <div className="py-16">
          <h2 className="text-4xl font-bold mb-12 text-center">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 border border-white/10 rounded-lg">
              <Pencil className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-2">
                Interactive Drawing Board
              </h3>
              <p className="text-white/70">
                A user-friendly canvas where you can let your creativity flow.
              </p>
            </div>
            <div className="p-6 border border-white/10 rounded-lg">
              <Brain className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-2">AI-Powered Guessing</h3>
              <p className="text-white/70">
                Advanced models tries to guess what you're drawing in real-time.
              </p>
            </div>
            <div className="p-6 border border-white/10 rounded-lg">
              <Users className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-2">
                Secure API Key Management
              </h3>
              <p className="text-white/70">
                API keys are securely stored locally on your device and
                encrypted.
              </p>
            </div>
            <div className="p-6 border border-white/10 rounded-lg">
              <Users className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-2">Responsive Design</h3>
              <p className="text-white/70">
                Play on any device - desktop, tablet, or mobile.
              </p>
            </div>
          </div>
        </div>

        <div className="py-16">
          <h2 className="text-4xl font-bold mb-12 text-center">
            AI Capabilities
          </h2>
          <div className="space-y-12 text-center">
            <div>
              <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center font-bold text-xl mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold mb-2">Real-Time Recognition</h3>
              <p className="text-white/70 max-w-md mx-auto">
                Our AI can recognize your drawings as you create them.
              </p>
            </div>
            <div>
              <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center font-bold text-xl mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold mb-2">High Accuracy</h3>
              <p className="text-white/70 max-w-md mx-auto">
                Achieve high accuracy in guessing and recognition.
              </p>
            </div>
            <div>
              <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center font-bold text-xl mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold mb-2">Continuous Learning</h3>
              <p className="text-white/70 max-w-md mx-auto">
                Our AI continuously learns and improves with every interaction.
              </p>
            </div>
          </div>
        </div>

        <div className="py-16">
          <h2 className="text-4xl font-bold mb-12 text-center">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border border-white/10 rounded-lg">
              <p className="text-white/70">
                "This game is so much fun! The AI is surprisingly accurate and
                the community is great."
              </p>
              <p className="text-sm text-white/70 mt-4">- Jane Doe</p>
            </div>
            <div className="p-6 border border-white/10 rounded-lg">
              <p className="text-white/70">
                "I love how the AI keeps getting better. It's a great way to
                spend time with friends."
              </p>
              <p className="text-sm text-white/70 mt-4">- John Smith</p>
            </div>
            <div className="p-6 border border-white/10 rounded-lg">
              <p className="text-white/70">
                "The drawing tools are intuitive and the game is very engaging.
                Highly recommend!"
              </p>
              <p className="text-sm text-white/70 mt-4">- Alice Johnson</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
