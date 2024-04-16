import React from 'react';
import { BrowserRouter as  Routes, Route } from 'react-router-dom';
import Gamse from './Pages/Gamse';

function App() {
    return (
      <BrowserRouter>
        <Routes>
            <Route path="/games" element={<Gamse />} />
        </Routes>
        </BrowserRouter>
      
    );
  }
  export default App;
  
