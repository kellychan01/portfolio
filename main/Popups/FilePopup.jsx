// FilePopup.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Html } from '@react-three/drei';
import Project1 from '../Projects/About';
import Project2 from '../Projects/Contact';

const FuturaMedium = '/fonts/Futura Medium.ttf';
const FuturaLight = '/fonts/Futura Light.ttf';
const FuturaLightItalic = '/fonts/Futura Light Italic.ttf';

const FilePopup = ({ onClose }) => {
    const [hovered, setHovered] = useState(false);
    const [activePage, setActivePage] = useState('about');   // <-- add this
    const bottomContentRef = useRef(null);
    const folderRef = useRef(null);

    const handleMainTabClick = () => {
        setActivePage('about');
    };

    // Disable interactions on the canvas under the popup
    useEffect(() => {
        const canvas = document.querySelector('canvas');
        if (canvas) canvas.style.pointerEvents = 'none';
        return () => {
            if (canvas) canvas.style.pointerEvents = 'auto';
        };
    }, []);

    // Make sure the class uses a normal hyphen-minus `-`, not a Unicode one.
    useEffect(() => {
        document.body.classList.add('popup-open');   // <- ensure your CSS matches this
        return () => {
            document.body.classList.remove('popup-open');
        };
    }, []);

    // Scroll content to top when page changes
    useEffect(() => {
        bottomContentRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
        folderRef.current?.scrollTo?.({ top: 0, behavior: 'smooth' });
    }, [activePage]);

    return (
        <Html
            portal={document.body}
            fullscreen
            style={{
                width: '100vw',
                height: '100vh',
                backgroundColor: 'rgba(0,0,0,0.5)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 9999,
                pointerEvents: 'auto',
            }}
        >
            <div className="folder" ref={folderRef}>
                <div className="top" role="tablist" aria-label="Popup pages">
                    <button
                        type="button"
                        role="tab"
                        className={`top-tab-main ${activePage === 'about' ? 'active' : ''}`}
                        onClick={handleMainTabClick}
                        aria-selected={activePage === 'about'}
                    >
                        About
                    </button>

                    <button
                        type="button"
                        role="tab"
                        className={`top-tab ${activePage === 'page2' ? 'active' : ''}`}
                        onClick={() => setActivePage('page2')}
                        aria-selected={activePage === 'page2'}
                    >
                        Contact
                    </button>
                </div>

                <div
                    ref={bottomContentRef}
                    className={`bottom ${activePage}`}
                    style={{ overflowY: 'auto', maxHeight: '80vh' }}
                >
                    {activePage === 'about' && <Project1 />}
                    {activePage === 'page2' && <Project2 />}
                </div>

                <button
                    type="button"
                    className="close-button"
                    onClick={(e) => {
                        e.stopPropagation();
                        onClose();
                    }}
                    onMouseOver={() => setHovered(true)}
                    onMouseOut={() => setHovered(false)}
                    aria-label="Close"
                    title="Close"
                >
                    ✕
                </button>
            </div>
        </Html>
    );
};

export default FilePopup;
