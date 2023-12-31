import Highlights from "./components/Highlights";
import Landing from "./components/Landing";
import Nav from "./components/Nav";
import Featured from "./components/Featured";


function App() {
  return (
    <div className="App">
      <Nav />
      <Landing />
      <Highlights />
      <Featured />
    </div>
  );
}

export default App;
