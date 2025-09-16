import React from 'react';

const Thai = () => (
    <div className="project-container" id="project11">
        <h2 className="project-title">A SEMESTER IN BANGKOK</h2>
        <p className="project-role">Director / Editor</p>

        {/* YouTube Video */}
        <div className="project-video">
            <iframe
                src="https://www.youtube.com/embed/kuJOIW6LxIg?si=FuFh98m5s8JAriDQ"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>

        {/* Metadata */}
        <dl className="project-meta">
            <dt>Type:</dt>
            <dd>Independent Student Production - Study Abroad Vlog</dd>
            <dt>DESCRIPTION:</dt>
            <dd>This vlog shares my experience during an outbound exchange in Thailand, featuring student life at Chulalongkorn University, local food adventures, cultural discoveries, and everyday moments in Bangkok. It’s a glimpse into what it was like to study abroad, meet new people, and explore a new environment while learning and growing along the way.
            </dd>
        </dl>

        {/* Stills Gallery */}
        <section className="project-gallery">
            <img src="../../src/pic/project11/project11-1.png" alt="View from an airplane window showing the wing against a cloudy sky, overlaid with hand-drawn text reading “Kelly Chan’s Outbound Exchange” and “Thailand”." />
            <img src="../../src/pic/project11/project11-2.png" alt="Close-up of an ornate section of Wat Arun temple in Bangkok, decorated with colorful floral tiles and statues of mythological figures against a bright blue sky." />
            <img src="../../src/pic/project11/project11-3.jpg" alt="Street scene in Bangkok with motorbikes passing by small shops, including a storefront with a green Chang beer sign and a shop selling food with Thai signage." />
            <img src="../../src/pic/project11/project11-4.jpg" alt="Split-frame photo taken from inside a bus: the left side shows a small mechanic shop with a red motorbike and Volkswagen sign, and the right side shows a blurred street view through a bus window with a large blue and green logo decal." />
            <img src="../../src/pic/project11/project11-5.jpg" alt="Interior of a shuttle bus from Chulalongkorn University with yellow poles and blue seats, showing a few passengers and an LED display reading “Next stop” in English and Thai." />
        </section>

        {/* FOOTER */}
        <footer class="footer">
            © 2025 Ka Ying (Kelly) Chan
        </footer>
    </div>
);

export default Thai;
