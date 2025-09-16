import React from 'react';

const Redwood = () => (
    <div className="project-container" id="project8">
        <h2 className="project-title">REDWOOD MEDI SPA<br/>GRAND OPENING</h2>
        <p className="project-role">Editor</p>

        {/*Cover IMG*/}
        <div className="project-img">
            <img src="/pic/project8/project8-1.png" alt="A bright treatment room with white facial steamers lined up beside a row of beds covered in white and teal linens, large windows letting in daylight, and a modern abstract portrait on the far wall."/>
        </div>

        {/* Metadata */}
        <dl className="project-meta">
            <dt>Type:</dt>
            <dd>Event Recap Editing</dd>
            <dt>Credit:</dt>
            <dd>Event organizer: Redwood Medi Spa<br/>
                Photographer & Videographer: @daydreamersusun, @wudi_photos</dd>
    </dl>

    {/* Stills Gallery */}
    <section className="project-gallery">
    <img src="/pic/project8/project8-2.png" alt="A close-up side view of an older woman with short gray hair wearing protective black laser safety glasses, a pearl necklace, and gold earrings, holding a piece of laser equipment." />
    <img src="/pic/project8/project8-3.png" alt="A catering table filled with assorted pastries, desserts, and cups of fresh fruit on display under abstract black, gray, and gold wall art." />
    <img src="/pic/project8/project8-4.png" alt="A man with short gray hair and a mustache wearing a plaid suit hugs an older woman with short gray hair and a pearl necklace in a warm embrace during the event." />
        </section>

        {/* FOOTER */}
        <footer class="footer">
            © 2025 Ka Ying (Kelly) Chan
        </footer>
    </div>
);

export default Redwood;
