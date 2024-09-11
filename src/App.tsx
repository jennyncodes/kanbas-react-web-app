import React from 'react';
import Labs from "./Labs";
import Kanbas from "./Kanbas";
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";

import './App.css';

export default function App() {
  return (
    <HashRouter>
    <div>
      <Routes>
      <Route path="/" element={<Navigate to="Labs" />} />
      <Route path="/Labs/*" element={<Labs />} />
      <Route path="/Kanbas/*" element={<Kanbas />} />
      </Routes>
     
    </div>
    </HashRouter>
  );
}


//export default App;
