import "./index.css";
import Header from "./components/Header.js";
import Menu from "./components/Menu.js";
import Footer from "./components/Footer.js";

export default function App() {
  return (
    <div className="container">
      <h1>Hello React</h1>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
