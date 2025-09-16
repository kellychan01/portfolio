import React from 'react';

const Black = () => (
    <div className="project-container" id="project7">
        <h2 className="project-title">BEYOND THE MYTH</h2>

        {/*Cover IMG*/}
        <div className="project-img">
            <img src="../../public/pic/project7/project7-1.jpg" alt="A model dressed in a black floral-patterned top and flowing red robe sits on a woven mat in a dimly lit set decorated with cobwebs, red candles, bamboo props, and a weathered parasol. She holds a plain white mask in one hand, gazing directly toward the camera as mist swirls in the background."/>
        </div>

        {/* Metadata */}
        <dl className="project-meta">
            <dt>Type:</dt>
            <dd>Photography</dd>
            <dt>DESCRIPTION:</dt>
            <dd>
                "Beyond the Myth" is a stylised photography project inspired by the rich visual language of the game Black Myth: Wukong. Set in a theatrical, mythic environment, the shoot explores themes of identity, illusion, and transformation through costume, symbolic props, and moody lighting.
            </dd>
            <dt>Credit:</dt>
            <dd>Event organizer: Wizard’s Lens, Siruplum Studio<br/>Model: Bobby</dd>
            </dl>

        {/* Stills Gallery */}
        <section className="project-gallery">
            <img src="../../public/pic/project7/project7-2.jpg" alt="Close-up of the model holding a white mask beside her face, glancing sideways with a subtle smile. Behind her, red candles in an ornate candelabrum glow faintly through cobwebs, with painted cranes and lotus flowers on a folding screen." />
            <img src="../../public/pic/project7/project7-3.jpg" alt="The model sits near a table adorned with candles and a woven basket, holding the white mask near her cheek while smiling softly. The dim, smoky atmosphere is enriched by the detailed painted backdrop of lotus flowers and cranes." />
            <img src="../../public/pic/project7/project7-4.jpg" alt="The model sits at the corner of a low table, holding the mask upright and gazing at it with a calm, contemplative expression. She is surrounded by set elements including pampas grass, hanging red lanterns, and a dark folding screen decorated with cranes and lotus motifs." />
        </section>

        {/* FOOTER */}
        <footer class="footer">
            © 2025 Ka Ying (Kelly) Chan
        </footer>
    </div>
);

export default Black;
