import React from 'react';

const Days = () => (
    <div className="project-container" id="project1">
        <h2 className="project-title">DAYS OF BEING WILD - REMAKE</h2>
        <p className="project-role">Project Manager / Set Director / Editor / Colourist</p>

        {/* YouTube Video */}
        <div className="project-video">
            <iframe
                src="https://www.youtube.com/embed/STSgeEO9qO8?si=ehCLyYDMDCMf-VQm"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>

        {/* Metadata */}
        <dl className="project-meta">
            <dt>Type:</dt>
            <dd>Independent Student Production – Short Film</dd>

            <dt>Description:</dt>
            <dd>
                A creative reinterpretation of <em>Days of Being Wild</em>, blending visual storytelling with movement and emotion. The film portrays a college student's transformation of anxiety into liberation through music and dance, capturing themes of isolation, freedom, and emotional renewal with rich visual tone and rhythmic pacing.
            </dd>

            <dt>Credit:</dt>
            <dd>
                Director: Skylar<br />
                Director of Photography: Sabeel<br />
                Project Manager / Set Director: Kelly<br />
                Key Grip / Gaffer: Yufei<br />
                Continuity / Assistant Director: Alex<br />
                Production Assistant: Amy<br />
                Supervisor: Professor Kathleen Hearn
            </dd>
        </dl>

        {/* Stills Gallery */}
        <section className="project-gallery">
            <img src="/pic/project1/project1-1.jpg" alt="Close-up of an actress lying down, holding a cigarette near her lips, with moody warm lighting casting shadows across her face, evoking a pensive and intimate mood." />
            <img src="/pic/project1/project1-2.jpg" alt="Actress lying on a bed in a dimly lit room, holding a cigarette aloft, with Chinese and English subtitles reading “When it got tired, it slept in the wind,” conveying a reflective and melancholic tone." />
            <img src="/pic/project1/project1-3.jpg" alt="Actress looking at herself in a mirror, half of her face shadowed, wearing a loose shirt, with a serious and contemplative expression." />
            <img src="/pic/project1/project1-4.jpg" alt="Actress tying up her hair in a dim room, wearing a loose shirt, with soft green light filtering through a curtain in the background, suggesting preparation or transition." />
        </section>

        {/* Creative Workflow */}
        <section className="creative-workflow">
            <div className="subsection-label">CREATIVE WORKFLOW</div>
            <div className="workflow-grid">
                <img src="/pic/project1/project1-5.PNG" alt="Close-up of a bed with a patterned blanket and white pillow, a pair of black headphones, and stacked books placed against a black wall with an electrical outlet, depicting the character’s personal space." />
                <img src="/pic/project1/project1-6.PNG" alt="Behind-the-scenes image of a film shoot, with a camera operator filming the actress lying on the bed, while a crew member holds a clapperboard marked “Scene 1, Shot C, Take 7.”" className="frame6-crop" />
                <img src="/pic/project1/project1-7.PNG" alt="Wide behind-the-scenes view of the studio set, showing crew silhouettes in the foreground while filming the actress standing in front of a curtained window, illuminated by controlled lighting." />
                <img src="/pic/project1/project1-8.PNG" alt="Laptop on a desk running Adobe Premiere Pro, displaying the film’s editing timeline and a shot of the actress, with a coffee cup beside it, showing the post-production process." className="frame8-crop" />
            </div>
        </section>
        {/* FOOTER */}
        <footer class="footer">
            © 2025 Ka Ying (Kelly) Chan
        </footer>
    </div>
);

export default Days;
