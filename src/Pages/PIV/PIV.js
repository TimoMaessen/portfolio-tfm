// src/components/PIV.jsx
import React from 'react';
import './PIV.css';

export default function PIV() {
  return (
    <div id="visionidentity" className="piv-bg-wrapper">
      <div className="piv-container">
        
        {/* ================= BOVENSTE RIJ: VISION (TEKST LINKS, LOGO'S RECHTS) ================= */}
        <div className="piv-row-left-content">
          
          {/* Tekstblok (550px) */}
          <div className="piv-text-block-550">
            <h3 className="h3-style">VISION</h3>
            <h1>Let’s find each other in the real world...</h1>
            
            <p className="p-style" style={{ marginTop: '15px', letterSpacing: '0.02em'  }}>
              I believe the interaction design community is increasingly concerned with the development of digital solutions that prioritize technical efficiency over the lived experiences they aim to design for. Especially within complex, sensitive domains like healthcare, this techno-solutionist mindset risks perceiving patients as mere data points, further stripping individuals of their autonomy. As Laura Crafton Gilpin (1950–2007) appropriately stated:
            </p>

            <blockquote className="piv-blockquote">
              ”What patients want is not rocket science, which is really unfortunate because if it were rocket science, we would be doing it.”
            </blockquote>

            <p className="p-style">
              Although current trends like ubiquitous computing argue that technology should fade into the background, I argue against it for its consequences of behavioral apathy among users. Therefore, I see untapped potential in the application and interactive tangible devices that support playful engagement in the healthcare ecosystem, for their intuitivity and trigger for usage. Technology should act as a bold and expressive catalyst for wonder through open-ended forms of play that allow users to enact their own rules. Inspiring examples are i.e. the Infuuts [x] and installations by Lappset [x]. These illustrate how simple, unique and joyful things can have a massive physical and emotional impact on its users.
            </p>

            <p className="p-style" style={{ marginTop: '15px' }}>
              Hence I want to stress that designers cannot and should not design impactful and tangible systems if their creative thinking is solely confined to a screen. I namely don’t see technology as inherently meaningful; its value only arises if carefully placed within a context and aligned with real human needs. Therefore, I urge designers to leave their studios and immerse themselves in the context at hand.
            </p>

            <p className="p-style" style={{ marginTop: '15px' }}>
              To clarify, screens are not inherently problematic. They remain highly efficient in connecting us over large distances and unlocking new opportunities for digital creativity. Yet, design must aim to balance this digital convenience with simpler, richer and more dynamic forms of engagement. Ultimately, I see society moving towards a future where users, industries and engineers collaborate to scaffold environments that not merely treat illness, but support the holistic well-being of patients using means in the tangible realm.
            </p>
          </div>

          {/* Logo's Rechts (Philips & Lappset) */}
          <div className="piv-side-logo-grid">
            <div className="piv-logo-container">
              <img src="Images/piv/piv_philips.png" alt="Philips Health" />
            </div>
            <div className="piv-logo-container">
              <img src="Images/piv/piv_lappset.png" alt="Lappset Play" />
            </div>
          </div>

        </div>

        {/* ================= ONDERSTE RIJ: IDENTITY (LOGO'S LINKS, TEKST RECHTS) ================= */}
        <div className="piv-row-right-content">
          
          {/* Tekstblok (550px) */}
          <div className="piv-text-block-550">
            <h3 className="h3-style" style={{ letterSpacing: '0.02em' }}>PROFESSIONAL IDENTITY</h3>
            <h1 >...by balancing user, tech and business</h1>

            <p className="p-style" style={{ marginTop: '15px' }}>
              I am a hands-on, user-centred designer and engineer with an entrepreneurial mindset. I am guided by a deep passion for technology and the belief that play is the ultimate medium for shaping meaningful interactions between people and technology. To me, play is not solely about entertainment. It’s a fruitful design approach in fostering a safe and joyful space for growth, especially for children in healthcare.
            </p>

            <p className="p-style" style={{ marginTop: '15px' }}>
              My technical proficiency allows me to rapidly realise and validate ideas, resulting in a high-paced and iterative design process. Hence, my concepts are highly ambitious and have a high level of aesthetic and experiential qualities. As an example, I developed my own method for creating custom DIY PCB traces, which beyond validating the pressure-sensing technology by itself, served as a clear means in convincing stakeholders of the concept. Since I have the ability to build most of the things I can Imagine, I have the tendency to operate from a premature, yet strong initial personal vision or tech-push approach. Therefore, I sometimes tend to overlook simpler, reliable ideas which tend to be more viable and aligned with user needs.
            </p>

            <p className="p-style" style={{ marginTop: '15px' }}>
              To balance this tendency, my design processes are often theory-based and collaborative in nature. I get inspired by established frameworks like Gamification and Self-Determination Theory and especially the collaboration with others. In such settings, my expressive personality favors a more intense way of discussing where criticism is brought forward and embraced. However, this does not stem from a desire to dominate. Rather, I deliberately want to provoke debate about an otherwise passive compromise, to deliver genuine novelty and innovation. 
              This approach aligns with my insistence on the continuous integrations of users and stakeholders throughout my processes, through qualitative and also data-enabled approaches. Their perspectives are crucial to a viable and impactful concept, but equally challenge my blind spots and forces me back to the drawing board whenever necessary.
            </p>

            <p className="p-style" style={{ marginTop: '15px' }}>
              Resembling IDEO’s pillars of innovation, I see this way of working as part of a broader ideology that systemic impact can only be delivered when a design clearly aligns with the user’s needs, handles operational enablers and barriers, and delivers quality in terms of usability and experience.
            </p>
          </div>

          {/* Logo's Links (VGZ & Maastricht) */}
          <div className="piv-side-logo-grid">
            <div className="piv-logo-container">
              <img src="Images/piv/piv_vgz.png" alt="VGZ Insurance" />
            </div>
            <div className="piv-logo-container">
              <img src="Images/piv/piv_maastricht.png" alt="MosaKids Maastricht" />
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}