import React, { Suspense, useState, useEffect  } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useMediaQuery } from 'react-responsive'

import { Loader } from '../Loader.jsx'
import { Room }   from './Bg.jsx'
import { DigitalClock3D } from './DigitalClock3D.jsx'

import GraphicDesignPopup from '../Popups/GraphicDesignPopup.jsx';
import ProductionPopup from '../Popups/ProductionPopup.jsx';
import EditingPopup from '../Popups/EditingPopup.jsx';
import PhotoPopup from '../Popups/PhotoPopup.jsx';
import ModelPopup from '../Popups/3DPopup.jsx';
import FilePopup from '../Popups/FilePopup.jsx';


const HeroExperience = () => {
    const isTablet = useMediaQuery({ query: '(max-width: 1200px)' })
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
    const [popupKey, setPopupKey] = useState(null)
    const [showTips, setShowTips] = useState(true)

    useEffect(() => {
        const t = setTimeout(() => setShowTips(false), 5000)
        return () => clearTimeout(t)
    }, [])

    return (
        <div style={{ width: '100%', height: '100vh', display: 'flex', flexDirection: 'column' }}>

            {/* Top Half: Canvas */}
            <div style={{ height: isTablet || isMobile ? '50%' : '100%' }}>
                {showTips && !popupKey && (
                    <div className="model-tips">
                        💡 Tip: Drag to rotate • Scroll to zoom
                    </div>
            )}
        <Canvas
            className="w-full h-full block"
            camera={{
                position: isMobile ? [0, 0, 9] : isTablet ? [0, 0, 6] : [0, 0, 6],
                fov: isMobile ? 85 : isTablet ? 82 : 80
            }}>
            <ambientLight intensity={10} color="#1a1a40" />
            <directionalLight position={[0, 15, 5]} intensity={6} />
            <hemisphereLight position={[0, 5, 5]} intensity={2} />
            <directionalLight
                position={[1, 0, 0]}    // left side
                intensity={2}
                color="#edf0f2"
                target-position={[0, 2, 0]}
            />
            <directionalLight
                position={[-1, 0, 0]}    // right side
                intensity={2}
                color="#edf0f2"
                target-position={[0, 2, 0]}
            />
            <directionalLight
                position={[0, 9, 9]}    // right side
                intensity={1}
                color="#edf0f2"
                target-position={[0, 2, 0]}
            />


            {/* Conditionally disable OrbitControls based on disableControls prop */}
            <OrbitControls
                enablePan={false}
                enableRotate={!popupKey}
                enableZoom={!popupKey}
                minDistance={4}
                maxDistance={isMobile ? 10 : isTablet ? 7 : 8} // tablet slightly less than desktop
                zoomSpeed={isMobile ? 0.6 : isTablet ? 0.8 : 0.9}
                rotateSpeed={isMobile ? 0.1 : isTablet ? 0.15 : 0.2}
                minPolarAngle={Math.PI / 3} // UP
                maxPolarAngle={Math.PI / 2} // DOWN
                minAzimuthAngle={-Math.PI / 5} // LEFT
                maxAzimuthAngle={Math.PI / 5} // RIGHT
            />

            {/* Wrap heavy model in Suspense */}
            <Suspense fallback={<Loader />}>
                <group
                    position={[0, 0, 0]}
                    rotation={[0, 0, 0]}
                >
                    <Room
                        // Disable clickable popups on mobile/tablet
                        onTogglePopup={!isTablet && !isMobile ? setPopupKey : undefined}
                        disableInteraction={!!popupKey || isTablet || isMobile}
                        disableHover={isTablet || isMobile}
                    />
                </group>

                    <DigitalClock3D
                        position={[0, 5.3, -2.6]}
                        rotation={[0, Math.PI, 0]}
                        fontSize={0.3}
                    />

                {/* ✅ Only render popups on desktop */}
                {!isTablet && !isMobile && (
                    <>
                        {popupKey === 'Cube012' && <GraphicDesignPopup onClose={() => setPopupKey(null)} />}
                        {popupKey === 'Cube024' && <ProductionPopup onClose={() => setPopupKey(null)} />}
                        {popupKey === 'Cube033' && <EditingPopup onClose={() => setPopupKey(null)} />}
                        {popupKey === 'Cube001' && <PhotoPopup onClose={() => setPopupKey(null)} />}
                        {popupKey === 'Cube032' && <ModelPopup onClose={() => setPopupKey(null)} />}
                        {popupKey === 'file' && <FilePopup onClose={() => setPopupKey(null)} />}
                    </>
                )}
            </Suspense>
        </Canvas>
        </div>
            {/* Bottom Half: Text for Tablet & Mobile */}
            {(isTablet || isMobile) && (
                <div class="hero-content">
                <h1>KELLY CHAN</h1>
                <p class="hero-subtitle">
                production coordinator & video editor
                </p>
                    {/* Scroll Down Indicator */}
                    <div className="scroll-down">
                        <span className="arrow">↓</span>
                    </div>
                </div>
            )}
        </div>
    )
}
export default HeroExperience
