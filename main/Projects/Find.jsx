import React from 'react';

const Days = () => (
    <div className="project-container" id="project10">
        <h2 className="project-title">FIND ME</h2>
        <p className="project-role">Camera Assistant / BTS Photographer</p>

        {/*Cover IMG*/}
        <div className="project-img">
            <img src="../../src/pic/project10/project10-1.JPG" alt="Behind-the-scenes of Find Me showing a photographer seated on a couch taking a photo, with two crew members in the background — one filming with a tripod camera and another leaning forward to talk."/>
        </div>

        {/* Metadata */}
        <dl className="project-meta">
            <dt>Type:</dt>
            <dd>Micro Film</dd>

            <dt>Description:</dt>
            <dd>
                At 14, Renee's life changes dramatically when her mother is diagnosed with early-onset Alzheimer's disease. As she balancing school and caregiving, Renee finds solace and guidance in her Christian faith.        </dd>

            <dt>Credit:</dt>
            <dd>
                Produced by: Beloved Media<br/>
                Director: Crystal Yi
            </dd>
        </dl>

        {/* Creative Workflow */}
        <section className="creative-workflow">
            <div className="subsection-label">CREATIVE WORKFLOW</div>
            <div className="workflow-grid">
                <img src="../../src/pic/project10/project10-2.JPG" alt="Interview scene from Find Me with a woman in a blue baseball cap speaking to a young man in a black jacket, filmed by a camera on a tripod positioned between them." />
                <img src="../../src/pic/project10/project10-3.JPG" alt="An actress seated indoors holding a blue tablet, illuminated by soft colored light, during a scene from Find Me." className="frame6-crop" />
                <img src="../../src/pic/project10/project10-4.jpg" alt="Behind-the-scenes of Find Me in a production room, showing multiple crew members, cameras on tripods, video monitors, and tangled cables spread across a table." />
                <img src="../../src/pic/project10/project10-5.jpg" alt="Classroom setting where people are watching a projected scene on a large screen, with “2024 Beloved Media” written on a blackboard in the background." className="frame8-crop" />
            </div>
        </section>
        {/* FOOTER */}
        <footer class="footer">
            © 2025 Ka Ying (Kelly) Chan
        </footer>
    </div>
);

export default Days;
