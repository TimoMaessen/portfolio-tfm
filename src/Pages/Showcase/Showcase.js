// src/components/Showcase.jsx
import React from 'react';
import './Showcase.css';

export default function Showcase() {
  return (
    <div id="showcase" className="showcase-bg-wrapper">
      <div className="showcase-container">
        
        {/* HOOFDTITEL BOVENAAN DE GRIDS */}
        <h1 className="showcase-main-title">...glad you made it, check these out!</h1>

        {/* ================= SECTIE 1: GRADUATION PROJECTS ================= */}
        <div className="showcase-row-group">
          <h2 className="showcase-row-heading">graduation projects</h2>
          <div className="showcase-row">
            
            {/* OverDeTop */}
            <div className="showcase-card showcase-card-425">
              <div className="showcase-img-inner-wrapper">
                <img src="Images/showcase/showcase_overdetop.png" alt="OverDeTop Portfolio" className="showcase-card-img" />
              </div>
              <div className="showcase-blue-overlay-box">
                <h3 className="h3-white">FINAL MASTER PROJECT | 2026</h3>
                <h2 className="h2-white">OverDeTop</h2>
                <p className="p-white">The interactive staircase that turns the pediatric hospital room into a playground</p>
              </div>
            </div>

            {/* Kiko de Kikker */}
            <div className="showcase-card showcase-card-425">
              <div className="showcase-img-inner-wrapper">
                <img src="Images/showcase/showcase_kiko.png" alt="Kiko de Kikker Portfolio" className="showcase-card-img" />
              </div>
              <div className="showcase-blue-overlay-box">
                <h3 className="h3-white">PREPARATION FINAL MASTER PROJECT | 2025-2026</h3>
                <h2 className="h2-white">Kiko de Kikker</h2>
                <p className="p-white">Lowering the barrier for early mobilization among hospitalized pediatric patients</p>
              </div>
            </div>

          </div>
        </div>

        {/* ================= SECTIE 2: RELEVANT PROJECTS ================= */}
        <div className="showcase-row-group">
          <h2 className="showcase-row-heading">relevant projects</h2>
          <div className="showcase-row">
            
            {/* Physi */}
            <div className="showcase-card showcase-card-280">
              <div className="showcase-img-inner-wrapper">
                <img src="Images/showcase/showcase_physi.png" alt="Physi Project" className="showcase-card-img" />
              </div>
              <div className="showcase-blue-overlay-box">
                <h3 className="h3-white">M1.1 DESIGN PROJECT | 2023 - 2024</h3>
                <h2 className="h2-white">Physi</h2>
                <p className="p-white">A playful add-on for data-informed pediatric physiotherapy</p>
              </div>
            </div>

            {/* Crowdcollab */}
            <div className="showcase-card showcase-card-280">
              <div className="showcase-img-inner-wrapper">
                <img src="Images/showcase/showcase_crowdcollab.png" alt="Crowdcollab Platform" className="showcase-card-img" />
              </div>
              <div className="showcase-blue-overlay-box">
                <h3 className="h3-white">DUIET | 2023 - 2024</h3>
                <h2 className="h2-white">Crowdcollab</h2>
                <p className="p-white">Collaborative sense-making for crowd management teams</p>
              </div>
            </div>

            {/* Torque */}
            <div className="showcase-card showcase-card-280">
              <div className="showcase-img-inner-wrapper">
                <img src="Images/showcase/showcase_torque.png" alt="Torque Robot Research" className="showcase-card-img" />
              </div>
              <div className="showcase-blue-overlay-box">
                <h3 className="h3-white">M1.2 RESEARCH PROJECT | 2024</h3>
                <h2 className="h2-white">TORQUE</h2>
                <p className="p-white">Researching haptic feedback strategies for robotic teleoperation</p>
              </div>
            </div>

          </div>
        </div>

        {/* ================= SECTIE 3: EXTRACURRICULAR ACTIVITIES (BREAKOUT) ================= */}
        <div className="showcase-row-group" style={{ marginBottom: '20px' }}>
          <h2 className="showcase-row-heading">extracurricular activities</h2>
          <div className="showcase-row-breakout">
            
            {/* Hajraa Outdoor */}
            <div className="showcase-card showcase-card-340">
              <div className="showcase-img-inner-wrapper">
                <img src="Images/showcase/showcase_buto.png" alt="Hajraa Festival Leadership" className="showcase-card-img" />
              </div>
              <div className="showcase-blue-overlay-box">
                <h3 className="h3-white">HAJRAA OUTDOOR | 2024 - 2025</h3>
                <h2 className="h2-white">PR Responsible</h2>
                <p className="p-white">Organizing Europe’s largest outdoor volleyball tournament and festival.</p>
              </div>
            </div>

            {/* TU/e Contest */}
            <div className="showcase-card showcase-card-340">
              <div className="showcase-img-inner-wrapper">
                <img src="Images/showcase/showcase_contest.png" alt="TU/e Contest Venture" className="showcase-card-img" />
              </div>
              <div className="showcase-blue-overlay-box">
                <h3 className="h3-white">TU/E CONTEST | 2026</h3>
                <h2 className="h2-white">Securing two awards</h2>
                <p className="p-white">A contest for aspiring students to develop their ideas from a business perspective.</p>
              </div>
            </div>

            {/* Team IGNITE */}
            <div className="showcase-card showcase-card-340">
              <div className="showcase-img-inner-wrapper">
                <img src="Images/showcase/showcase_ignite.png" alt="Team IGNITE GLOW" className="showcase-card-img" />
              </div>
              <div className="showcase-blue-overlay-box">
                <h3 className="h3-white">TEAM IGNITE | 2024</h3>
                <h2 className="h2-white">Technology Designer</h2>
                <p className="p-white">Designing a large-scale interactive light installation for GLOW Eindhoven.</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}