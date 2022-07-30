import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import Receipt from "./pages/Receipt"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/receipt" element={<Receipt />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;