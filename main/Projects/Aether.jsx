import React from 'react';

const Aether = () => (
    <div className="project-container" id="project6">
        <h2 className="project-title">AETHER & GOLD</h2>

        {/*Cover IMG*/}
        <div className="project-img">
            <img src="/pic/project6/project6-1.jpg" alt="Three people posing indoors on a balcony in an art-filled modern building. The person in front wears a white dress with gold glitter and jewelry, the person behind them wears a black blazer with gold embellishments on their face, and the person to the right wears a white short-sleeved shirt with metallic accessories and painted face art."/>
        </div>

        {/* Metadata */}
        <dl className="project-meta">
            <dt>Type:</dt>
            <dd>Photography</dd>
            <dt>DESCRIPTION:</dt>
            <dd>
                A photo series inspired by the divine glow of Greek mythology, Aether & Gold captures a modern interpretation of gods and goddesses through golden accents, ethereal styling, and dramatic light.        </dd>
        </dl>

        {/* Stills Gallery */}
        <section className="project-gallery">
            <img src="/pic/project6/project6-2.jpg" alt=" Close-up of a person wearing a black blazer and white tank top, leaning back with eyes closed. The right side of their face and neck is covered in dense gold glitter." />
            <img src="/pic/project6/project6-3.jpg" alt="Portrait of a person standing indoors by a balcony, wearing a white patterned short-sleeved shirt with gold jewelry. The left side of their face is painted in metallic tones. Blue light tubes hang in the background." />
            <img src="/pic/project6/project6-4.jpg" alt="Side profile of a person in a white dress leaning on a ledge, wearing gold jewelry and arm adornments. Gold glitter decorates their face and shoulder, and their hair is styled with decorative hairpieces." />
            <img src="/pic/project6/project6-5.jpg" alt="Portrait of a person in a white patterned shirt with gold jewelry, standing indoors under an installation of hanging circular discs. The left side of their face has metallic paint." />
        </section>

        {/* FOOTER */}
        <footer class="footer">
            © 2025 Ka Ying (Kelly) Chan
        </footer>
    </div>
);

export default Aether;
