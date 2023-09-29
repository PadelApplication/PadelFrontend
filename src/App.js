import './App.css';
import Events from "./Pages/Events/Events";
import Navbar from "./Components/Navigation/Navbar";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Navbar/>
        <Events/>
      </div>
    </div>
  );
}

export default App;
