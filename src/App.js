import Home from "./components/Home";
import News from "./components/News";
import Reddit from "./components/Reddit";
import Wikipedia from "./components/Wikipedia";
import Crypto from "./components/Crypto";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path='/News' element={<News />} />
        <Route exact path='/Reddit' element={<Reddit />} />
        <Route exact path='/Wikipedia' element={<Wikipedia />} />
        <Route exact path='/Crypto' element={<Crypto />} />
      </Routes>
    </div>
  );
}

export default App;
