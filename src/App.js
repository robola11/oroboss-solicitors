import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Article from "./routes/Article";
import Practice from "./routes/Practice";

export default function App() {
  return (
    <div className="App">
      < BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/practice" element={<Practice />} />
        <Route path="/article" element={<Article />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}
