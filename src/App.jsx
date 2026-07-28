import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Programme from "./pages/Programme";
import Science from "./pages/Science";
import People from "./pages/People";
import Explore from "./pages/Explore";
import GetInvolved from "./pages/GetInvolved";
import Contact from "./pages/Contact";
import Research from "./pages/Research";
import Challenge from "./pages/Challenge";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/programme" element={<Programme />} />
            <Route path="/science" element={<Science />} />
            <Route path="/people" element={<People />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/get-involved" element={<GetInvolved />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/research" element={<Research />} />
            <Route path="/challenge" element={<Challenge />} />
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
