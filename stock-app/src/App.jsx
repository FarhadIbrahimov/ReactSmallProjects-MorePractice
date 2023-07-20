import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage";
import Stock from "./components/Stock";
import Dashboard from "./components/Dashboard";
import Nav from "./components/Nav";
import About from "./components/About";
import MyStocks from "./components/MyStocks";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/stocks" element={<Dashboard />} />
        <Route path="/stocks/:symbol" element={<Stock />} />
        <Route path="/my-stocks" element={<MyStocks />} />
      </Routes>
    </div>
  );
}
export default App;
