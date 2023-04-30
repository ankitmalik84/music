import { Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Route } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";

function App() {
  AOS.init();
  return (
    <>
      <div className='content'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/blog' element={<Blog />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
