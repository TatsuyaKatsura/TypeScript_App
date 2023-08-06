import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './Home/components/Home';
import MemoApp from './make_Memo/components/Memo';
import Header from './Home/components/Header';




const App: React.FC = () => {
  return (
    <Router>
      <Header/>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/memo" element={<MemoApp />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
