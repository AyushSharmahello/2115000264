import "./style.css";
import {BrowserRouter, Route, Routes } from "react-router-dom";
import allProducts from "./views/allProducts";
import singleProduct from "./views/singleProduct";

const App = () => {
    return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<allProducts />} />
            <Route path="/product/:id" element={<singleProduct/>} />
          </Routes>
        </BrowserRouter>
      </div>
    );
}

export default App;