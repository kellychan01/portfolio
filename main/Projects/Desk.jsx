import React from 'react';

const Desk = () => (
    <div className="project-container" id="project12">
        <h2 className="project-title">INTERACTIVE WORKSPACE:<br />A 3D PORTFOLIO EXPERIENCE</h2>

        {/*Cover IMG*/}
        <div className="project-img">
            <img src="../../public/pic/project12/project12-9.png" alt="Final render of the 3D workstation: five monitors, control panels with knobs and sliders, dual keyboards and mice, and a folder on the desk, set against a dark background."/>
        </div>

        {/* Metadata */}
        <dl className="project-meta">
            <dt>Type:</dt>
            <dd>3D Modeling</dd>
            <dt>DESCRIPTION:</dt>
            <dd>
                A fully interactive 3D environment designed to showcase
                creative projects in an immersive way. Modeled as a modern digital workspace,
                each object in the scene is a gateway to a different part of the portfolio.
                Built using React Three Fiber and optimized for smooth navigation,
                the model invites users to explore, click, and interact, transforming the portfolio into an engaging virtual tour.
            </dd>
        </dl>

        {/* Stills Gallery */}
        <section className="project-gallery">
            <img src="../../public/pic/project12/project12-5.png" alt="Front render of the desk." />
            <img src="../../public/pic/project12/project12-6.png" alt="Close-up render of the center monitors." />
            <img src="../../public/pic/project12/project12-7.png" alt="Angled Blender viewport view." />
        </section>

        {/* Creative Workflow */}
        <section className="creative-workflow">
            <div className="subsection-label">CREATIVE WORKFLOW</div>
            <div className="workflow-grid">
                <img src="../../public/pic/project12/project12-1.png" alt="Wireframe view." />
                <img src="../../public/pic/project12/project12-2.png" alt="Close-up view." />
                <img src="../../public/pic/project12/project12-3.png" alt="Front orthographic render of the full desk." />
                <img src="../../public/pic/project12/project12-4.png" alt="Angled view of the full desk." />
            </div>
        </section>

        {/* FOOTER */}
        <footer class="footer">
            © 2025 Ka Ying (Kelly) Chan
        </footer>
    </div>
);

export default Desk;
