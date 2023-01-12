import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Analytics from './pages/Analytics';
import Architecture from './pages/Architecture';
import Digitalcore from './pages/Digitalcore';
import Documentation from './pages/Documentation';
import Team from './pages/Team';
import Search from './pages/Search';



const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Home />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/architecture" element={<Architecture />} />
          <Route path="/digital" element={<Digitalcore />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/team" element={<Team />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;