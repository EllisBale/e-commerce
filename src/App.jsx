import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Phones from "./pages/Phones";
import Details from "./pages/Details";


function App() {

  return (
    <>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/phones" element={ <Phones />} />
          <Route path="/phones/:id" element={<Details />}/>
        </Routes>
    </>
  )
}

export default App;
