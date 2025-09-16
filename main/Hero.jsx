import React, { Suspense } from 'react'
import HeroExperience from "./HeroModels/HeroExperience.jsx";
import { Loader } from './Loader.jsx'
import Gallery from './HeroModels/Gallery.jsx'

const Hero = () => {
    return (
        <Suspense fallback={<Loader />}>
            <>
            <section id="hero" className="relative overflow-hidden h-screen">
                <div className="w-full h-full">
                    <figure className="relative w-full h-full m-0">
                        <div className="hero-3d-layout">
                                <HeroExperience />
                        </div>
                    </figure>
                </div>git remote add origin https://github.com/kellychan01/portfolio.git
            </section>

            {/* Gallery section (below hero) */}
            <section id="gallery">
                <Gallery />
            </section>
        </>
        </Suspense>
    )
}

export default Hero
