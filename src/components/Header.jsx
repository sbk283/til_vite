import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="sticky top-0 z-10 backdrop-blur-md bg-white/80 border-b border-neutral-200/50 dark:bg-neutral-900/80 dark:border-neutral-700/50">
      <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-sm shadow-sm">
            ✓
          </div>
          <NavLink
            to="/"
            className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent"
          >
            할일 앱 서비스
          </NavLink>
        </div>
        <nav className="flex items-center gap-2 text-sm">
          <NavLink to="/">🌞Home</NavLink>
          <NavLink to="/todos/write">✍️Todo Write</NavLink>
          <NavLink to="/todos">📋Todo List</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
