import React from 'react';

const Billiards = () => (
    <div className="project-container" id="project2">
        <h2 className="project-title">POCKET BILLIARDS<br/>PORTRAIT PHOTOGRAPHY</h2>
        <p className="project-role">Editor</p>

        {/* YouTube Video */}
        <div className="project-video">
            <iframe
                src="https://www.youtube.com/embed/iPfG-YCaxV8?si=De8nv9k0LuecOgGt"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>

        {/* Metadata */}
        <dl className="project-meta">
            <dt>Type:</dt>
            <dd>Event Recap Editing</dd>
            <dt>Credit:</dt>
            <dd>
                Event Organizer: LP Firms<br/>
                Photography Event Organizer: YF Photography Studio, Wizard's Lens
            </dd>
        </dl>

        {/* Stills Gallery */}
        <section className="project-gallery">
            <img src="/pic/project2/project2-1.png" alt="Photographer taking a picture of a woman playing pool, with professional lighting set up around the billiard table, other participants and photographers visible in the background." />
            <img src="/pic/project2/project2-2.png" alt="Close-up action shot of a cue ball moving toward a neatly racked set of colorful billiard balls on a blue pool table." />
            <img src="/pic/project2/project2-3.png" alt="Close-up portrait of a woman with long hair holding a cue stick, wearing a black lace top, with the pool hall and tables softly blurred in the background." />
            <img src="/pic/project2/project2-4.png" alt="Overhead close-up of racked billiard balls on a blue table, with the black 8-ball in the center surrounded by colorful solids and stripes." />
        </section>

        {/* FOOTER */}
        <footer class="footer">
            © 2025 Ka Ying (Kelly) Chan
        </footer>
    </div>
);

export default Billiards;
