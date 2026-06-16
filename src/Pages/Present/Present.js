// src/components/Present.jsx
import React from 'react';
import './Present.css';

export default function Present() {
  return (
    <div id="present" className="present-section-wrapper">
      <div className="present-main-container">
        
        {/* ================= OUT-OF-BOUNDS TITEL (40px marge links, 90px hoog) ================= */}
        <div className="present-header-block">
          <img src="Images/present/present_title.png" alt="Present Trajectory" className="present-title-img" />
        </div>

        {/* ================= NODE 1: ABOUT THE PROJECT (TEXT LEFT, VISUAL RIGHT) ================= */}
        <div className="present-row-left-content">
          <div className="present-text-housing-550">
            <h3 className="h3-style">OVERDETOP</h3>
            <h1 className="h1-style">about the project</h1>
            <p className="p-style">
              OverDeTop is an interactive staircase that aims to lower the barrier to mobilization among hospitalized pediatric patients (ages 6-12). By embodying an open-ended, bridge-shaped architecture and a set of autonomy-supportive games, patients’ intrinsic motivation is tackled to engage in mobilization exercises, using social play as the main driver. The staircase was developed at Go Wonder, in collaboration with the Mosakids Pediatric Hospital and the Groene Hart Hospital.
            </p>
          </div>
          {/* Placeholder voor afbeelding aan de rechterkant */}
          <div className="present-graphic-container-wrapper">
            <img src="Images/present/present_maastricht.png" alt="OverDeTop Interactive Architecture" className="present-project-fluid-img" />
          </div>
        </div>

        {/* ================= NODE 2: PERSONAL DEVELOPMENT (TEXT RIGHT, VISUAL LEFT) ================= */}
        <div className="present-row-right-content">
          <div className="present-text-housing-550">
            <h3 className="h3-style">REFLECTIONS</h3>
            <h1 className="h1-style">personal development</h1>
            <p className="p-style">
              Over the semester, I have grown into a matured designer who can easily navigate complex stakeholder ecosystems and develop robust technologies that not only align with the lived experience of the user, but also aligns with real-world constraints and regulations. 
            </p>
            <p className="p-style" style={{ marginTop: '12px' }}>
              For me, the most challenging aspect of this process was balancing the needs of the hospital and the needs of the market with my own passion for developing intricate technologies. Whereas the hospitals required a simple and effective innovation that was simple and integrated into the workflow, I challenged myself with intricate technologies in an effort to deliver a captivating audiovisual experience. Simiarly, Go Wonder was interested in understanding market constraints and the ability to pursue the project in the future. This meant I actively had to pursue a more holistic design approach in tackling a diverse network of stakeholders and constantly be on top of constraints imposed by the market or user testing to ensure the design complied to all. 
            </p>
            <p className="p-style" style={{ marginTop: '12px' }}>
              I do see this approach as crucial to a succesful implementation. Without accounting for such regulatory and structural constraints, any staircase I developed would have failed. Furthermore, I have learned to treat theoretical frameworks not as superficial frameworks, but as flexible concepts that need to be shaped to the unique context of the project. As an example, the element of Relatedness from SDT was explicitely implemented in the physical architecture by offering new open-ended ans social forms of play, instead of a simple game mechanic which might allow for multi-user play. Lastly, this project has shown me the value of of fostering an actual deployment, rather than a one-off user study. Not only does it challenge the designer to design an interface which is useful, you learn about multi-day usage, which especially in the world of motivation, is a crucial element on which most inventions fail.
            </p>
          </div>
          {/* Placeholder voor afbeelding aan de linkerkant */}
          <div className="present-graphic-container-wrapper">
            <img src="Images/present/present_overdetop.png" alt="In-situ Deployment Reflection" className="present-project-fluid-img" />
          </div>
        </div>

        {/* ================= NODE 3: EXPERTISE AREAS (TEXT LEFT, NESTED VISUALS RIGHT) ================= */}
        <div className="present-row-left-content">
          <div className="present-text-housing-550">
            <h3 className="h3-style">CROSS-DISCIPLINARY MATURITY</h3>
            <h1 className="h1-style">expertise areas and professional development</h1>
            <p className="p-style">
              Below, I have elaborated on the most influential connections between expertise areas on my development. In hindsight, it was the intersection of these three which made the project so succesful, forming the backbone of a design approach which balances my strengths and weaknesses best.
            </p>

            {/* Subsection 1: Business & User & Tech */}
            <div className="present-expertise-sub-node">
              <h3>BUSINESS & ENTREPRENEURSHIP, USER & SOCIETY AND TECHNOLOGY & REALIZATION</h3>
              <h2>Collaboration as the pathway to lived experiences</h2>
              <p className="p-style">My Final Master Project was a significant leap in my maturity as a designer. By pursuing collaborations with two hospitals I could think beyond the academic requirements for this project and act upon real-world stakeholder management and testing (B&E). The established collaborations, pivot towards playful equipment and a polished prototype gave the project credibility (B&E/T&R). By leveraging my pitching and networking skills from Hajraa Outdoor, these elements were woven into a coherent narrative, which onboarded various clinical and industry experts (B&E). In turn, their involvement provided a direct gateway to unique contextual and market insights and constraints, and opportunities for user testing (U&S).</p>
            </div>

            {/* Subsection 2: Data & User & Tech */}
            <div className="present-expertise-sub-node">
              <h3>MATH, DATA & COMPUTING, USER & SOCIETY AND TECHNOLOGY & REALIZATION</h3>
              <h2>Using data for realization and contextual insights</h2>
              <p className="p-style">During deployment, the staircase was programmed to collect interaction on data to support the occasional observations and interviews. I leveraged methods taught at my course on Data-Enabled Design to transform raw data into in-depth contextual insights (U&S/MD&C). On the hardware side, I learnt about PCB design and had to improve my CAD skills to develop a custom sensor and improve structural rigidity. Hence, I was taught on how to scan hardware datasheets and select components to minimize the PCB’s footprint and mitigate the subsequent software overhead (MD&C). Further software optimizations (e.g. Schmitt-triggering and Multi-threading) were integrated to deliver a smoother user experience during testing and limit potential frustrations (U&S).</p>
            </div>

            {/* Subsection 3: User & Tech & Aesthetics */}
            <div className="present-expertise-sub-node">
              <h3>USER & SOCIETY, TECHNOLOGY & REALIZATION AND CREATIVITY & AESTHETICS</h3>
              <h2>Facilitating user experience through safety and aesthetics:</h2> 
              <p className="p-style">The two in-situ deployments required additional care in terms of usability and safety. The staircase itself was not only developed to be safe, but also to be perceived as safe through rigorous materials and additional structures like support beams and railings (T&R). Because of my CAD skills taught at my course Microfabrication Methods, I was able to use finite element method (FEM) analyses to ensure the staircase’s architecture complied with the risk assessment as discussed with the hospital (U&S). Further aesthetic enhancements were made in terms of polished diary entries, information boards and the selection of vibrant colors for the staircase to resemble familiar play archetypes (C&A). These decisions were intentionally made to lower the barrier of entry, spark frequent use and therewith ensure more feedback would be collected in an already demanding environment (U&S).</p>
            </div>
          </div>

          {/* Placeholder voor afbeelding aan de rechterkant */}
          <div className="present-graphic-container-wrapper" style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
            <img src="Images/present/present_finalpcb.png" alt="Custom Velostat PCB Traces" className="present-project-fluid-img" />
            <img src="Images/present/present_custompcb.png" alt="Structural Safety FEM Matrix" className="present-project-fluid-img" />
            <img src="Images/present/present_gouda.png" alt="Structural Safety FEM Matrix" className="present-project-fluid-img" />
            <img src="Images/present/present_maastricht.png" alt="Structural Safety FEM Matrix" className="present-project-fluid-img" />

          </div>
        </div>

        

        {/* ================= NEW NODE 4: SUMMARY SUMMARY SUMMARY (SPANS FULL 950PX) ================= */}
        <div className="present-summary-full-width-block">
          <h3 className="h3-style">CONCLUSION</h3>
          <h1 className="h1-style">becoming a matured user-centric designer, engineer and entrepreneur</h1>
          <p className="p-style" style={{ marginTop: '12px' }}>
            The challenging project did bear fruit as, the developed prototype and narrative has led to securing the <span className="p-blue">partner’s choice award</span>, <span className="p-blue">the jury’s impact award</span> and a <span className="p-blue">finalist spot</span> at this year’s TU/e Contest. My development this semester is mostly concerned with becoming a matured user-centric designer and engineer and entrepreneur:
          </p>

          <ul className="p-style" style={{ listStyleType: 'disc', paddingLeft: '20px', marginTop: '10px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <li>I learnt and mastered that innovation for impact goes beyond a loose product, but should be integrated into the present law and rules (MDR, risk-assessment) of a medical infrastructure.</li>
            <li>The data on which I base my design decisions not only come from literature online or one-off interviews, but come from long in-situations, providing objective insights into the most effective way forward.</li>
            <li>I have learnt to leverage my enthusiastic nature and formulate a strong and compelling narrative in which commercial viability, the user’s desirability and technical feasibility come together, which is used to foster partnerships on various levels.</li>
          </ul>
        </div>

        {/* ================= CONTEST WINNER AWARDS GALLERY (FULL 950PX) ================= */}
          <div className="present-contest-gallery-flex">
          <div className="present-contest-logo-wrapper">
            <img src="Images/present/present_contest_partners.png" alt="TU/e Contest Partner Choice Award" className="present-contest-img-fluid" />
          </div>
          <div className="present-contest-logo-wrapper">
            <img src="Images/present/present_contest_impact.png" alt="Jury Impact Award Winner" className="present-contest-img-fluid" />
          </div>
          <div className="present-contest-logo-wrapper">
            <img src="Images/present/present_contest_finale.png" alt="TU/e Contest Grand Finale Showcase" className="present-contest-img-fluid" />
          </div>
        </div>

      </div>
    </div>
  );
}