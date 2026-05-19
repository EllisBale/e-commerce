import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Phones from "./pages/Phones";

function App() {

  return (
    <>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/phones" element={ <Phones />} />
        </Routes>
    </>
  )
}

export default App;
