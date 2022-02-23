import "./App.css";

function App() {
  return (
    <div className="flex">
      <div className="flex-auto"></div>
      <div className="font-serif selection:bg-lew-blue selection:text-lew-yellow h-screen w-64 shrink-0">
        <div className="text-lew-blue text-2xl">Luke Johnson</div>
        <ul className="list-disc text-black">
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
