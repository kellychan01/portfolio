import React from 'react';

const About = () => (
    <div className="project-container" id="about">
        <h2 className="project-title">ABOUT ME</h2>

        {/*Cover IMG*/}
        <div className="about-img">
            <img src="../../src/pic/IMG_4599.jpg" alt="Still frame 1"/>
        </div>

        {/* Metadata */}
        <dl class="project-meta">
            <dd>Hi, I’m Ka Ying (Kelly) Chan,
                a creative professional specializing in production coordination
                and visual storytelling. I excel in organizing and supporting
                all stages of production, from planning and scheduling
                to on-set workflow management. With hands-on experience in studio,
                campaign, and international projects, I ensure smooth operations
                while bringing creativity and attention to detail to every frame.</dd>
        </dl>

        <dl className="about-meta">
            <dt>Education</dt>
            <dd>University of Toronto (Canada)</dd>
            <dd className="alt-format">
                ✧ Communication, Culture, Information & Technology<br />
                ✧ Psychology
            </dd>
            <dd>Sheridan College (Canada)</dd>
            <dd className="alt-format">
                ✧ Certificate in Digital Communication
            </dd>
            <dd>Chulalongkorn University (Thailand)</dd>
            <dd className="alt-format">
                ✧ Exchange Program in Communication Management
            </dd>
        </dl>

        <dl className="about-meta">
            <dt>Skills</dt>
            <dd>Production & Filming</dd>
            <dd className="alt-format">
                ✧ Production Planning & Scheduling<br />
                ✧ On-Set Workflow & Logistics Management<br />
                ✧ Talent, Location & Resource Coordination
            </dd>

            <dd>Post-Production & Editing</dd>
            <dd className="alt-format">
                ✧ Adobe Premiere Pro, CapCut<br />
                ✧ Video Assembly, Color Correction & Final Delivery
            </dd>

            <dd>Design</dd>
            <dd className="alt-format">
                ✧ Adobe Photoshop, Illustrator, Procreate, Canva<br />
                ✧ Visual Layout & Branding Adaptation
            </dd>


        </dl>

            {/* FOOTER */}
        <footer class="footer">
            © 2025 Ka Ying (Kelly) Chan
        </footer>
    </div>
);

export default About;
