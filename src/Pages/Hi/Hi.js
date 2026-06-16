// src/components/Hi.jsx
import React from 'react';
import './Hi.css'; // Importeert de zojuist gemaakte lay-out CSS

export default function Hi() {
  return (
    <section id="hi" className="standard-section">
      
      {/* INTRODUCTIEBLOK */}
      <div className="hi-flex-row">
        
        {/* LINKS: Profielfoto */}
        <div className="profile-img-container">
          <img src="Images/hi/hi_profile.png" alt="Timo Profile" className="profile-img" />
        </div>

        {/* RECHTS: Titel, Tagline & Actieknop */}
        <div className="headline-content-container">
          <h1 className="hi-main-title">
            Hi! I am Timo, and I love <span className="p-blue-alt">making</span> things that make <span className="p-blue-alt">people smile</span>!
          </h1>

          <img 
            src="Images/hi/hi_button.png" 
            alt="Want to see what I can do?" 
            className="action-btn-img"
            onClick={() => document.getElementById('showcase').scrollIntoView({ behavior: 'smooth' })}
          />
        </div>

      </div>

      {/* GELAAGDE PASVORM ONDERTIJD (BEGRENSD OP DEZELFDE 950PX AS) */}
      <div className="hi-bottom-graphic-container">
        
        {/* Jouw samengevoegde/grouped PNG uit Figma */}
        <img 
          src="Images/hi/hi_staircase_overview.png" 
          alt="OverDeTop Showcase Group" 
          className="hi-bottom-group-img" 
        />
        
        {/* HET WITTE OVERLAY STICKER-KAARTJE */}
        <div className="hi-image-text-overlay-card">
          <h3 className="hi-card-h3">FINAL MASTER PROJECT</h3>
          <h1 className="hi-card-h1">OverDeTop</h1>
          <p className="hi-card-p">
            The interactive staircase lowers the barrier of entry for hospitalized pediatric patients (ages 6-12) to engage in early mobilization
          </p>
        </div>

      </div>

    </section>
  );
}