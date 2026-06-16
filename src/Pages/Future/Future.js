// src/components/Future.jsx
import React from 'react';
import './Future.css';

export default function Future() {
  return (
    <section id="future" className="future-section-wrapper">
      <div className="future-main-container">
        
        {/* ================= OUT-OF-BOUNDS TITEL ================= */}
        <div className="future-header-block">
          <img src="Images/future/future_title.png" alt="Future Vision" className="future-title-img" />
        </div>

        {/* ================= CONTENT FLEX ROW ================= */}
        <div className="future-content-flex">
          
          {/* LINKERKOLOM: De Startup-visie tekst */}
          <div className="future-text-housing-550">
            <h3 className="h3-style">A STARTUP ROADMAP</h3>
            <h1 className="h1-style">from academic potential to real-world implementation</h1>
            
            <p className="p-style" style={{ marginTop: '15px' }}>
              I find designing and engineering for the pediatric healthcare context incredibly rewarding. It sits at the intersection of my passion for bringing about immediate, positive human impact with the personal intellectual challenge of navigating a complex network of stakeholders.
            </p>

            <p className="p-style" style={{ marginTop: '12px' }}>
              After graduation, I will turn my design vision into action by transitioning OverDeTop into an innovative MKB startup. The momentum generated during my FMP has already laid the groundwork. The Mosakids Pediatric Hospital namely already expressed an interest in becoming our first customer once the manufacturing has started. 
            </p>

            <p className="p-style" style={{ marginTop: '12px' }}>
              Through personal networking and the TU/e contest, I have already secured partnerships with the TU/e Knowledge Transfer Office (KTO), and VieCuri, with whom I’ll be looking into funding, (potential) patenting and additional validations. Furthermore, initial connections have been made with industry leaders like Unitron, Achmea and Zumtobel to provide consultancies and refine the technological infrastructure and component selection.
            </p>

            <p className="p-style" style={{ marginTop: '12px' }}>
              The immediate future will therefore focus on extended clinical trials and optimizing the mechanical assembly process, aiming at scalability. By early 2027, I will aim to deploy OverDeTop with various specialized pediatric hospitals in The Netherlands (beachhead market). Plans have been made to, thereafter, scale towards adjacent sectors such as geriatric and special needs care.
            </p>
          </div>

          {/* RECHTERKOLOM: future_pic.png */}
          <div className="future-visual-wrapper">
            <img src="Images/future/future_pic.png" alt="Timo pitching OverDeTop Future" className="future-main-img" />
          </div>

        </div>

      </div>
    </section>
  );
}