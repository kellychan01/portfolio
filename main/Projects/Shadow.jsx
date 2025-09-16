import React from 'react';

const Shadow = () => (
    <div className="project-container" id="project9">
        <h2 className="project-title">SHADOWS OF FREEDOM</h2>
        <p className="project-role">Director / Production Coordinator / Editor</p>

        {/*Cover IMG*/}
        <div className="project-img">
            <img src="../../public/pic/project9/project9-1.jpg" alt="Busy downtown Toronto street intersection with pedestrians walking past cars, modern buildings, and a glass bus stop under overcast skies."/>
        </div>

        {/* Metadata */}
        <dl className="project-meta">
            <dt>Type:</dt>
            <dd>Independent Student Production - Documentary</dd>
            <dt>DESCRIPTION:</dt>
            <dd>This documentary follows the personal journey of a Hong Kong international student as she navigates the intricate process of securing Permanent Residency in Canada. This film explores her experience of adapting to a new environment, facing uncertainty, and working toward a future far from home.
            </dd>
        </dl>


        {/* Stills Gallery */}
        <section className="project-gallery">
            <img src="../../public/pic/project9/project9-2.jpg" alt="Person sitting indoors by a window watching a Cantonese TV show on a laptop, with English and Chinese subtitles reading “Cantonese is very interesting.”" />
            <img src="../../public/pic/project9/project9-3.jpg" alt="Close-up of textured brown fabric with the words “香港人” (Hong Kong person) stamped in dark ink." />
            <img src="../../public/pic/project9/project9-4.jpg" alt="Street view of St. George Street in Toronto with red-brick heritage buildings, traffic lights, and pedestrians crossing in winter clothing." />
        </section>

        {/* FOOTER */}
        <footer class="footer">
            © 2025 Ka Ying (Kelly) Chan
        </footer>
    </div>
);

export default Shadow;
