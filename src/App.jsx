import React from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Productlist from './components/productlist';
import Productdetails from './components/productdetails';
import'./App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>simple E-Commerce Website</h1>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Productlist/>}/>
            <Route path="/products/:id" element={<Productdetails/>}/>
          </Routes>

        </main>
      </div>
    </Router>
    
    
  );
};

export default App;
