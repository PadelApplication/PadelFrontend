import './App.css';
import Events from "./Pages/Events/Events";
import Navbar from "./Components/Navigation/Navbar";
import {Navigate, Route, Routes} from "react-router-dom";
import CreateEvent from "./Pages/Events/CreateEvent";
import About from "./Pages/About/About";

function App() {
  return (
    <div className="App">
      <div className="App-header">
          <Navbar/>
          <Routes>
              <Route path="*" element={<Navigate to="/events" />} />
              <Route exact path="/events" element={<Events/>} />
              <Route exact path="/create" element={<CreateEvent/>} />
              <Route exact path="/about" element={<About/>} />
          </Routes>
      </div>
    </div>
  );
}

export default App;
