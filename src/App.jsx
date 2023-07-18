import "./App.css";

import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Currencies from "./pages/Currencies";
import Price from "./pages/Price";
import Nav from "./components/Nav";

function App() {
  return (
    <div>
      <Nav />
      <Routes className="App">
        <Route path="/" element={<Main />} />
        <Route path="/currencies" element={<Currencies />} />
        <Route //it doesn't matter what i name symbol part
          path="/price/:symbol"
          element={<Price />}
        />
      </Routes>
    </div>
  );
}

export default App;
