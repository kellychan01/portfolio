import React from 'react';

const WWW = () => (
    <div className="project-container" id="project4">
        <h2 className="project-title">WEWORKINGWOMEN<br/>CAREER FORUM</h2>
        <p className="project-role">Editor</p>

        {/* YouTube Video */}
        <div className="project-video">
            <iframe
                src="https://www.youtube.com/embed/KZc4KVaQt68?si=aOS74oiPXAet34pp"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>

        {/* Metadata */}
        <dl class="project-meta">
            <dt>Type:</dt>
            <dd>Event Recap Editing</dd>
            <dt>Credit:</dt>
            <dd>
                Event Organizer: WeWorkingWomen<br/>
                Photographer & Videographer: @daydreamsusan, @rainiceland
            </dd>
        </dl>

        {/* Stills Gallery */}
        <section className="project-gallery">
            <img src="../../public/pic/project4/project4-1.png" alt="Four women seated on stage during a panel discussion, speaking to an audience, with abstract paintings in the background and the “WeWorkingWomen” logo displayed on the left." />
            <img src="../../public/pic/project4/project4-2.png" alt="A woman with short hair speaking into a microphone on stage, wearing a black dress and a neon green lanyard, with the “WeWorkingWomen” logo projected in the top left corner." />
            <img src="../../public/pic/project4/project4-3.png" alt="Close-up of a green event banner displaying the “WeWorkingWomen” logo in Chinese and English, with a softly lit venue background." />
            <img src="../../public/pic/project4/project4-4.png" alt="Two women seated on stage during a discussion, one in a light grey suit speaking into a microphone and the other in a grey dress listening, with audience members visible in the foreground." />
        </section>
        {/* FOOTER */}
        <footer class="footer">
            © 2025 Ka Ying (Kelly) Chan
        </footer>
    </div>
);

export default WWW;
