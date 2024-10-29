import { Link, useLocation } from "react-router-dom";

export default function Navigation() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 w-full bg-black border-b border-white/10 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <svg className="w-8 h-8" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M20.71 7.04c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.37-.39-1.02-.39-1.41 0l-1.84 1.83 3.75 3.75M3 17.25V21h3.75L17.81 9.93l-3.75-3.75L3 17.25z"
              />
            </svg>
            <span className="text-xl font-bold">Pictionary</span>
          </Link>

          <div className="flex space-x-4">
            <Link
              to="/play"
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                isActive("/play")
                  ? "bg-white text-black"
                  : "text-white hover:bg-white/10"
              }`}
            >
              Play
            </Link>
            <Link
              to="/how-to-play"
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                isActive("/how-to-play")
                  ? "bg-white text-black"
                  : "text-white hover:bg-white/10"
              }`}
            >
              How to Play
            </Link>
            <Link
              to="/settings"
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                isActive("/settings")
                  ? "bg-white text-black"
                  : "text-white hover:bg-white/10"
              }`}
            >
              Settings
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
