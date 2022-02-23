import "./App.css";

function App() {
  return (
    <div className="flex items-center justify-center">
      <div className="flex-auto"></div>
      <div className="font-serif selection:bg-lew-blue selection:text-lew-yellow h-screen w-64 shrink-0 mt-6">
        <div className="text-lew-blue text-5xl flex items-center justify-center font-bold">
          Luke&nbsp;Johnson
        </div>
        <ul className="list-disc text-black flex items-center justify-center mt-6">
          <li>
            <a href="https://twitter.com/lukeedwardjo">follow me on twitter</a>
          </li>
        </ul>
      </div>
      <div className="flex-auto"></div>
    </div>
  );
}

export default App;
