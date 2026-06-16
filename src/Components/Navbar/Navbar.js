// src/components/Navbar.jsx
import React, { useEffect, useState, useRef } from 'react';
import './Navbar.css';

const sectionColors = {
  hi: '#9FCCD1',
  vision: '#EE9CA9',
  past: '#F4C98B',
  present: '#B5D7B4',
  showcase: '#D0A9CF',
  future: '#F6B793'
};

const menuItems = [
  { name: 'Hi!', id: 'hi', colorKey: 'hi' },
  { name: 'Vision & identity', id: 'visionidentity', colorKey: 'vision' },
  { name: 'Past', id: 'past', colorKey: 'past' },
  { name: 'Present', id: 'present', colorKey: 'present' },
  { name: 'Showcase', id: 'showcase', colorKey: 'showcase' },
  { name: 'Future', id: 'future', colorKey: 'future' }
];

export default function Navbar() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('hi');
  const [pathLength, setPathLength] = useState(0);
  const pathRef = useRef(null);

  useEffect(() => {
    if (pathRef.current) {
      setPathLength(pathRef.current.getTotalLength());
    }

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          // 1. MECHANISME VOOR DE INTERACTIEVE LIJN-LENGTE
          const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
          if (totalHeight > 0) {
            setScrollProgress(window.scrollY / totalHeight);
          }

          // 2. FINE-TUNING VAN DE TRANSITIE-MOMENTEN (PER SECTIE)
          const vh = window.innerHeight;
          
          const customThresholds = {
            hi: vh * 0.5,
            visionidentity: vh * 0.35, // LATER: Moet verder omhoog scrollen (35% vanaf top)
            past: vh * 0.5,            // STANDAARD: Schakelt exact in het midden van het scherm
            present: vh * 0.5,         // STANDAARD: Schakelt exact in het midden van het scherm
            showcase: vh * 0.65,       // EERDER: Schakelt al zodra hij onderin beeld verschijnt (65% vanaf top)
            future: vh * 0.70          // EERDER: Schakelt direct in bij nadering (70% vanaf top)
          };

          let currentActive = 'hi';
          
          // We lopen van onder naar boven door de pagina-volgorde heen
          const checkOrder = ['future', 'showcase', 'present', 'past', 'visionidentity', 'hi'];
          
          for (const id of checkOrder) {
            const el = document.getElementById(id);
            if (el) {
              const rect = el.getBoundingClientRect();
              const triggerPoint = customThresholds[id] || (vh * 0.5);
              
              // Zodra de bovenkant van de sectie de custom drempel passeert, activeren we hem direct
              if (rect.top <= triggerPoint) {
                const matched = menuItems.find(item => item.id === id);
                if (matched) {
                  currentActive = matched.colorKey;
                  break; // Actieve sectie gevonden, breek uit de loop
                }
              }
            }
          }
          
          setActiveSection(currentActive);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentOffset = pathLength - (scrollProgress * pathLength);
  const currentActiveColor = sectionColors[activeSection] || '#1a1a1a';

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="navbar-fixed-header-container">
      <div className="navbar-inner-550">
        
        {/* DYNAMISCHE SCRIBBLER SVG */}
        <svg className="navbar-scribble-svg" viewBox="0 0 550 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            ref={pathRef}
            className="navbar-scribble-path"
            d="M 8,48 
               C -15,15 48,5 42,42 
               C 35,72 -5,68 18,52
               C 40,35 60,20 110,20 
               C 165,20 170,55 210,55
               C 225,55 224,30 242,30
               C 262,30 266,58 248,58
               C 230,58 234,30 262,30
               C 292,30 300,58 340,58
               C 385,58 390,15 440,15
               C 485,15 482,68 442,68
               C 412,68 425,25 465,25
               C 505,25 548,22 532,48
               C 515,70 488,48 545,46"
            stroke={currentActiveColor}
            strokeWidth="2.3"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              strokeDasharray: pathLength,
              strokeDashoffset: currentOffset,
            }}
          />
        </svg>

        {/* INTERACTIEVE LINKS LAAG */}
        <nav className="navbar-links-layer">
          {menuItems.map((item) => {
            const isSelected = activeSection === item.colorKey;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`nav-item ${isSelected ? 'is-active' : ''}`}
                style={isSelected ? { color: item.colorKey === 'hi' ? '#55B947' : currentActiveColor } : {}}
              >
                {item.name}
              </button>
            );
          })}
        </nav>

      </div>
    </header>
  );
}