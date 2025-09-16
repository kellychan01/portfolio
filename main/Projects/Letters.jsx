import React from 'react';

const Letters = () => (
    <div className="project-container" id="project3">
        <h2 className="project-title">BETWEEN THE LETTERS</h2>

        {/*Cover IMG*/}
        <div className="project-img">
            <img src="/pic/project3/project3-1.png" alt="typographic design reading “Kelly Chan” in a mix of ornate cursive and serif fonts, printed on black paper placed over a laptop"/>
        </div>

        {/* Metadata */}
        <dl className="project-meta">
            <dt>Type:</dt>
            <dd>Typography</dd>
            <dt>DESCRIPTION:</dt>
            <dd>
                "Between the Letters" is a typographic exploration of visual identity and expression. Inspired by early
                2000s aesthetics, the project experiments with contrasting typefaces, spacing, and alignment to create
                dynamic compositions. Through playful arrangements and rhythm, it highlights how typography can shape
                tone, character, and meaning.
            </dd>
        </dl>

        {/* Stills Gallery */}
        <section className="project-gallery">
            <div className="subsection-label" id="label4">Project 01</div>
            <img src="/pic/project3/project3-2.png" alt="White vector version of “Kelly Chan” typography with decorative flourishes, stars, and an oval KC monogram."/>
            <img src="/pic/project3/project3-3.png" alt="Slightly angled mockup of “Kelly Chan” typography on black textured paper over a laptop, with a polished presentation style."/>
            <div className="subsection-label" id="label4">Project 02</div>
            <img src="/pic/project3/project3-4.png" alt="White vector design reading “Estsupha Hkfc” in mixed decorative and pixelated typefaces, with stars and a Thai text oval embellishment." className="frame2-crop"/>
            <img src="/pic/project3/project3-5.png" alt="Grey gradient mockup of “Estsupha Hkfc” design combining ornate script and pixel-styled type, accented with starburst graphics."/>
            <div className="subsection-label">Project 03</div>
            <img src="/pic/project3/project3-6.png" alt="White vector design in Chinese characters with ornate flourishes, small star accents, and “estsupha_hkfc” in small text at the bottom right."/>
            <img src="/pic/project3/project3-7.png" alt="White stylized Chinese characters arranged vertically, with decorative flourishes and star shapes."/>
            <div className="subsection-label" id="label4">Project 04</div>
            <img src="/pic/project3/project3-8.png" alt="White vector design of “@Bloop_Hk” in mixed ornate and geometric typefaces with sparkle accents."/>
            <img src="/pic/project3/project3-9.png" alt="Grey gradient background with “@Bloop_Hk” typography in mixed styles, surrounded by sparkle and starburst graphics."/>
        </section>

        {/* FOOTER */}
        <footer class="footer">
            © 2025 Ka Ying (Kelly) Chan
        </footer>
    </div>
);

export default Letters;
