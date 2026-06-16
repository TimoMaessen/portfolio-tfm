// src/components/Bottom.jsx
import React from 'react';
import './Bottom.css';

export default function Bottom() {
  return (
    <section className="bottom-section-wrapper">
      <div className="bottom-main-container">
        
        {/* LINKERKOLOM: GEKOPPELD EN INTERN GECENTREERD */}
        <div className="bottom-text-housing">
          <h1>Hi, let's collaborate and bring about positive change in healthcare using playful innovations.</h1>
          <p className="p-white-bottom">
            t.f.m.maessen@student.tue.nl
          </p>

          {/* SOCIALS DIRECT HIERONDER MEE-GECENTREERD */}
          <div className="bottom-social-row">
            <a 
              href="https://www.linkedin.com/in/timomaessen/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bottom-social-icon"
              aria-label="LinkedIn"
            >
              <svg viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>

            <a 
              href="https://www.youtube.com/channel/UCNB_BAnbo0ZmGM1eK4d0TDA/videos" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bottom-social-icon"
              aria-label="YouTube"
            >
              <svg viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* RECHTERKOLOM: AFBEELDING APART RECHTS GEANCKERD */}
        <div className="bottom-visual-wrapper">
          <img src="Images/Bottom/bottom_pic.png" alt="Timo graduation closure" className="bottom-main-img" />
        </div>

      </div>
    </section>
  );
}