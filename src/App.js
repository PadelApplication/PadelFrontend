import './App.css';
import Events from "./Pages/Events/Events";
import Navbar from "./Components/Navigation/Navbar";
import {Navigate, Route, Routes} from "react-router-dom";
import CreateEvent from "./Pages/Events/CreateEvent";

function App() {
  return (
    <div className="App">
      <div className="App-header">
          <Navbar/>
          <Routes>
              <Route path="*" element={<Navigate to="/events" />} />
              <Route exact path="/events" element={<Events/>} />
              <Route exact path="/create" element={<CreateEvent/>} />
          </Routes>
      </div>
    </div>
  );
}

export default App;
