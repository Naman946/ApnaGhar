import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./Component/Header";
import Home from "./Component/Home";
import Service from "./Component/Service"
import About from "./Component/About/About";

function App() {
  return (
    <>

      <Router>
       <Header/>
    
        <Routes>
          
          <Route path="/" element={<Home/>} />
          <Route path="About" element={<About/>} />

          <Route path="Service" element={<Service/>} />
        </Routes>

      </Router>
    </>
  );
}

export default App;
