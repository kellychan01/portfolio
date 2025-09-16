import React from 'react';

const Coin = () => (
    <div className="project-container" id="project5">
        <h2 className="project-title">COINNECTED</h2>

        {/*Cover IMG*/}
        <div className="project-img">
            <img src="/pic/project5/project5-1.png" alt="A black oversized T-shirt featuring a small white graphic on the upper left chest with three cartoon Hong Kong coins standing side by side under the text “UTEHKSA EST. 1997” and three Chinese characters in circles below."/>
        </div>

        {/* Metadata */}
        <dl class="project-meta">
            <dt>Type:</dt>
            <dd>T-shirt Graphic</dd>
            <dt>DESCRIPTION:</dt>
            <dd>
                A playful fusion of Hong Kong currency and American cartoon aesthetics, this T-shirt design transforms everyday coins into bold and animated symbols. With character-inspired details, "Coinnected" reimagines coins as a visual bridge between cultures — honouring heritage while showing pop style and student creativity.
            </dd>
        </dl>

        {/* Stills Gallery */}
        <section className="project-gallery">
            <img src="/pic/project5/project5-2.png" alt="The back of the black T-shirt displays a vertical panel of three cartoon coins: a smiling HK$10 coin running, a cheerful HK$2 coin waving, and a happy HK$1 coin hanging upside down." />
            <img src="/pic/project5/project5-3.png" alt="A white illustration of three cartoon Hong Kong coins with smiling faces, wearing shoes, and posing under the text “UTEHKSA EST. 1997,” with three Chinese characters in circular frames at the bottom." />
            <img src="/pic/project5/project5-4.png" alt="A vertical comic-strip style design with three cartoon Hong Kong coins: HK$10 at the top running, HK$2 in the middle waving with both hands, and HK$1 at the bottom hanging playfully." />
        </section>

        {/* FOOTER */}
        <footer class="footer">
            © 2025 Ka Ying (Kelly) Chan
        </footer>
    </div>
);

export default Coin;
