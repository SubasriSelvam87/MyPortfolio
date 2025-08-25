import React from "react";
import "./Experience.css";
import Wave from "./Wave/Wave";

const Experience = () => {
  return (
    <section id="EXPERIENCE" className="experience-section">

      {/* your existing content stays the same */}
      <h3 className="text-center" style={{color:"#003366"}}><b>EXPERIENCE</b></h3>
      <div className="experience-card mx-auto">
        <div className="bubble bubble-1" aria-hidden="true" />
        <div className="bubble bubble-2">
          <div className="bubble-2-text">
            <h3 className="text-center text-white">What I Can Do for You</h3>
            <div className="text-center text-white">
              I create fast, responsive, and user-friendly web apps with clean,
              reusable code. Skilled in modern front-end tools, I deliver
              quality results, adapt quickly, and work seamlessly with teams to
              turn ideas into reality.
            </div>
            
          </div>
        </div>
        <div className="card-center">
          <div className="role">Front-End Developer</div>
         {/* <a 
  href="https://www.linkedin.com/company/ebraintechnologies/" 
  target="_blank" 
  rel="noopener noreferrer"
  className="company-link"
> */}
  <div className="company">Ebrain Technology</div>
{/* </a> */}
          <div className="duration">Feb 2024 – Present</div>
          <div className="duration">
            Designed and developed responsive, user-focused interfaces using
            React.js, Redux.js, Material-UI, and PrimeReact. Created reusable
            components and fine-tuned layouts for performance and scalability.
            Partnered with design and backend teams to deliver seamless
            integration with Node.js APIs deployed on AWS. Proficient in HTML,
            CSS, JavaScript, Bootstrap, React.js, Redux.js, and Firebase.
          </div>
        </div>
      </div>
<Wave/>

    </section>
  );
};

export default Experience;
