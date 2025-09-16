import React from 'react';

const Letters = () => (
    <div className="project-container" id="project14">
        <h2 className="project-title">PIXELFLIP</h2>

        {/*Cover IMG*/}
        <div className="project-img">
            <img src="../../public/pic/project14/project14-5.png" alt="Final render of the handheld gaming console, showcasing its metallic casing, colorful buttons, and vibrant on-screen illustration."/>
        </div>

        {/* Metadata */}
        <dl className="project-meta">
            <dt>Type:</dt>
            <dd>3D Modeling</dd>
            <dt>DESCRIPTION:</dt>
            <dd>
                A 3D-modeled handheld console inspired by retro portable gaming devices.
                Designed with realistic materials, detailed controls, and a vibrant custom display,
                PixelFlip blends nostalgic charm with modern modeling techniques.
            </dd>
        </dl>

        {/* Stills Gallery */}
        <section className="project-gallery">
            <img src="../../public/pic/project14/project14-6.png" alt="Close-up render of the handheld console’s control panel, focusing on the four colored action buttons, directional pad, and textured speaker grill." />
        </section>

        {/* Creative Workflow */}
        <section className="creative-workflow">
            <div className="subsection-label">CREATIVE WORKFLOW</div>
            <div className="workflow-grid">
                <img src="/pic/project14/project14-1.png" alt="Wireframe view in Blender of a 3D-modeled clamshell handheld gaming console with its screen open and controls visible on the lower half." />
                <img src="/pic/project14/project14-2.png" alt="Close-up wireframe view of the handheld console’s control panel, showing the directional pad, circular buttons, and hinge details in Blender." />
                <img src="/pic/project14/project14-3.png" alt="Clay render of the open handheld gaming console, highlighting its directional pad, buttons, hinge mechanism, and perforated speaker grill." />
                <img src="/pic/project14/project14-4.png" alt="Textured render of the handheld gaming console with a metallic finish, colorful control buttons, and a custom display showing stylized digital artwork." />
            </div>
        </section>

        {/* FOOTER */}
        <footer class="footer">
            © 2025 Ka Ying (Kelly) Chan
        </footer>
    </div>
);

export default Letters;
