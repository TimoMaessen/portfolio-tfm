// src/components/Past.jsx
import React from 'react';
import './Past.css';

export default function Past() {
  return (
    <div id="past" className="past-section-wrapper">
      <div className="past-main-container">
        
        <div className="past-header-block">
          <img src="Images/past/past_title.png" alt="Past Trajectory" className="past-title-img" />
        </div>

        {/* ================= NODE 1: GRANDFATHER & LEGO ================= */}
        <div className="past-timeline-row-left">
          <div className="past-text-housing-550">
            <h3 className="h3-style">GRANDFATHER & LEGO MACHINES</h3>
            <h1 className="h1-style">where the journey began</h1>
            <p className="p-style">
              My journey as a maker began in my grandfather’s garage, where we wired my first electronics circuit. I was immediately captivated by that tiny illumination, which sparked a lifelong interest in technology. Later, I began constructing complex LEGO contraptions which already had a high level of aesthetic finish and mechatronics. Engineering these machines already made me develop a strong sense of embedded spatial thinking, mechanical sequencing and programmming. Similarly, observing my family engage with these machines and burst out in laughter or competition taught me a crucial thing, which is still part of my identity today: technology is most powerful when it facilitates moments of joy. This still guides me to this day: to design for and with fun.
            </p>
          </div>
          <div className="past-graphic-container-wrapper">
            <img src="Images/past/past_lego.png" alt="Early Mechatronics Foundations" className="past-project-fluid-img" />
          </div>
        </div>

        {/* ================= NODE 2: BACHELOR (TEXT RIGHT, VISUAL LEFT) ================= */}
        <div className="past-timeline-row-right">
          <div className="past-text-housing-550">
            <h3 className="h3-style">INDUSTRIAL DESIGN - BACHELOR</h3>
            <h1 className="h1-style">towards embodied play</h1>
            <p className="p-style">
              Driven by an interest in open-ended digital and physical experiences, my Bachelor’s projecs, UrbanAR (B2.1) and De Bouwplaats (FBP, in collaboration with Municipality of Eindhoven), investigated how XR technologies could facilitate citizen participation in urban design. UrbanAR marked my first deliberate attempt of using of play as a core mechanism to make abstract processes more tangible and engaging, and my FBP gave me my first real experience collaborating with external institutional stakeholders.
            </p>
            <p className="p-style" style={{ marginTop: '12px' }}>
              However, this same development also sparked a friction in my professional identity. During my FBP and subsquent role in student team ShapeReality, I struggled with the more bureaucratic nature of urban design and the inherent intagible nature of software-only systems. I felt a dissconnection between a user’s engagement and a direct observable impact of that input. I realized that the programming isolated me from the real making process and therewith the lived experiences of the user. To rediscover my initial pation for tangible technologies, I joined student team IGNITE. Inventing new mechanical parts and working with custom LED strips immediately felt motivating again. The rapid prototyping skills established a launching pad for my master’s trajectory.
            </p>
          </div>
          <div className="past-graphic-container-wrapper" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <img src="Images/past/past_bouwplaats.png" alt="FBP De Bouwplaats Project" className="past-project-fluid-img" />
            <img src="Images/past/past_ignite.png" alt="IGNITE Prototyping Ecosystem" className="past-project-fluid-img" />
          </div>
        </div>

        {/* ================= NODE 3: MASTER TRAJECTORY (TEXT LEFT, NESTED VISUALS RIGHT) ================= */}
        <div className="past-timeline-row-left">
          <div className="past-text-housing-550">
            <h3 className="h3-style">INDUSTRIAL DESIGN - MASTER</h3>
            <h1 className="h1-style">navigating healthcare & stakeholder ecosystems</h1>
            <p className="p-style">
              The Master’s program marked a major maturity shift in my practice. I moved away from a sole-tech push approach, and perceiving the user as just another source of data. I started to value the user as an invaluable asset in shaping a project’s vision and outcomes and to strategically adapt theoretical frameworks in an effort to develop a technology that suits the context and its user.
            </p>

            {/* Sub-Node A: Physi */}
            <div className="past-master-sub-node">
              <h2>M1.1 Physi: Embracing the healthcare context</h2>
              <p className="p-style">
                This was my first encounter with a project within the healthcare context and I was inspired. We devleoped an interactive add-on for the Bosu balance trainer for the context of pediatric rehabilitation. Initially, I was hesitant to enter the healthcare domain out of fear its sterile image would restrict my expressive and more playful vision. This project, however, reshaped that perception. By witnessing the patients and parents smile during the final evaluation, I realized that the medical setting is not a constraint. Its sterility demands the intervention of tangible play to deliver impact. Similarly, I found this ecosystem to be inherently human-centred.
              </p>
            </div>

            {/* Sub-Node B: Hajraa */}
            <div className="past-master-sub-node">
              <h2>PR responsible at Hajraa Outdoor 2025: Multi-stakeholder engagement</h2>
              <p className="p-style">
                Between my two years of Master eductation, I took on the role of PR responsible for Hajraa Outdoor 2025, Europe’s largest outdoor volleyball tournament and festival. This experience significantly boosted my comfort in pitching and handling a multi-stakeholder process. I discovered that my enthusiastic nature provides an authentic approach in convincing stakeholders and building trust, which would prove useful during my graduation year.
              </p>
            </div>

            {/* Sub-Node C: Kiko */}
            <div className="past-master-sub-node">
              <h2>M2.1 Kiko de Kikker: The origin of the interactive staircase</h2>
              <p className="p-style">
                For my preperatory FMP semester, I partnered with Go Wonder and collaborated with both the Mosakids Pediatric Hospital and Groene Hart Hospital. The crucial learning insight was the effective and continuous inclusion of users and experts in an effort to combat my tendency for a tech-push approach. Instead of aiming at a final prototype only, I deployed various low-fidelity prototypes and validated these with medical experts, leading to a more refined concept.
              </p>
            </div>
          </div>

          {/* Master Visual Layout stack */}
          <div className="past-graphic-container-wrapper" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <img src="Images/past/past_physi.png" alt="Physi Project Asset" className="past-project-fluid-img" />
            <img src="Images/past/past_buto.png" alt="Hajraa Multi-stakeholder Pitching" className="past-project-fluid-img" />
            <img src="Images/past/past_kiko.png" alt="Kiko de Kikker Prototype" className="past-project-fluid-img" />
          </div>
        </div>

        {/* ================= NEW NODE 4: EXPERTISE AREAS (FULL 950PX BREEDBAND) ================= */}
        <div className="past-full-width-text-block">
          <h1 className="h1-style">expertise areas</h1>
          <p className="p-style" >
            Over the course of my Master’s, I greatly and equally developed over 5 areas of expertise through diverse courses, projects and extracurricular activities. Figure X shows a comprehensive overview of the development of my personal perspectives and approaches in the areas and how these are interconnected in my practices. Whereas the areas of Technology & Realization and User & Society are often a goal by themselves, the other areas are more supportive in nature.
          </p>
        </div>

        {/* ================= CORE COMPETENCE DIAGRAM SUMMATION ================= */}
        <div className="past-bottom-schematic-block">
          <img src="Images/past/past_eas.png" alt="Master Expertise Area Interconnection Map" className="past-eas-full-width-img" />
        </div>

      </div>
    </div>
  );
}