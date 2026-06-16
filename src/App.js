// src/App.jsx
import React from 'react';
import './index.css';
import Navbar from './Components/Navbar/Navbar';
import Hi from './Pages/Hi/Hi';
import PIV from './Pages/PIV/PIV';
import Past from './Pages/Past/Past';
import Present from './Pages/Present/Present';
import Showcase from './Pages/Showcase/Showcase';
import Future from './Pages/Future/Future';
import Bottom from './Pages/Bottom/Bottom';

export default function App() {
  return (
    <div className="canvas-wrapper">
      <Navbar />
      <Hi />
      <PIV />
      <Past />
      <Present />
      <Showcase />
      <Future />
      <Bottom />
    </div>
  );
}