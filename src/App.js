import Home from "./components/Home";
import News from "./components/News";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path='/News' element={< News />} />
      </Routes>
    </div>
  );
}

export default App;
