import { Link, Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="flex items-center justify-center">
      <div className="flex-auto"></div>
      <div className="font-serif selection:bg-lew-blue selection:text-lew-yellow h-screen w-5/12 shrink-0 mt-24">
        <div className="text-lew-blue text-5xl flex items-center justify-center font-bold">
          Luke&nbsp;Johnson
        </div>
        <nav className="flex items-center justify-center mt-6">
          <a href="https://twitter.com/lukeedwardjo">twitter</a>
          &nbsp;&nbsp;|&nbsp;&nbsp;
          <a href="https://lukejo.substack.com/p/coming-soon?showWelcome=true&utm_source=url">
            blog
          </a>
          &nbsp;&nbsp;|&nbsp; <Link to="/about">about</Link>
        </nav>
        <Outlet />
      </div>
      <div className="flex-auto"></div>
    </div>
  );
}

export default App;
