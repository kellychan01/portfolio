import React from 'react';

const Flower = () => (
    <div className="project-container" id="project13">
        <h2 className="project-title">FLORAL FORMS</h2>

        {/*Cover IMG*/}
        <div className="project-img">
            <img src="../../src/pic/project13/project13-4.png" alt="Final render of a spherical floral arrangement featuring blue hydrangea-like flowers, green leaves, and dried beige grasses, surrounded by glossy pearl-like spheres."/>
        </div>

        {/* Metadata */}
        <dl className="project-meta">
            <dt>Type:</dt>
            <dd>3D Modeling</dd>
            <dt>DESCRIPTION:</dt>
            <dd>
                This project is a 3D exploration of floral harmony,
                where individual blossoms are arranged into a unified digital bouquet.
                This project focuses on spatial composition, color balance,
                and visual rhythm—bringing together a variety of flower forms to create a serene and stylized scene.
            </dd>
        </dl>

        {/* Creative Workflow */}
        <section className="creative-workflow">
            <div className="subsection-label">CREATIVE WORKFLOW</div>
            <div className="workflow-grid">
                <img src="../../src/pic/project13/project13-1.png" alt="Wireframe view in Blender of a spherical arrangement of assorted 3D flowers and foliage." />
                <img src="../../src/pic/project13/project13-2.png" alt="Blender shading workspace with material node setup." />
                <img src="../../src/pic/project13/project13-3.png" alt="Progress of the spherical floral arrangement." />
                <img src="../../src/pic/project13/project13-5.png" alt="Rendered 3D floral sphere with blue flowers, dried grasses, and reflective pearl-like spheres." />
            </div>
        </section>

        {/* FOOTER */}
        <footer class="footer">
            © 2025 Ka Ying (Kelly) Chan
        </footer>
    </div>
);

export default Flower;
