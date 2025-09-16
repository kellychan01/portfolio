import React, { useState, useEffect, useRef } from 'react';
import { Html } from '@react-three/drei';
import HeroExperience from '../HeroModels/HeroExperience';
import Project1 from '../Projects/Days'; // Import Project
import Project2 from '../Projects/Shadow';
import Project3 from '../Projects/Find';
import Project4 from '../Projects/Thai';

const FuturaMedium = '../../src/fonts/Futura Medium.ttf'
const FuturaLight = '../../src/fonts/Futura Light.ttf'
const FuturaLightItalic = '../../src/fonts/Futura Light Italic.ttf'

const ProductionPopup = ({ onClose }) => {
    const [hovered, setHovered] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null); // Initially no project is selected
    const [disable3DModelControls, setDisable3DModelControls] = useState(false); // State to disable 3D controls
    const bottomContentRef = useRef(null);  // Reference to the bottom content container
    const folderRef = useRef(null);  // Reference to the whole popup folder

// Default content when no project is selected
    const defaultContent = {
        title: 'Pick a Project to Explore',
        description: 'Click to see more information and visuals.',
    };

    // Change selected project content and scroll to top
    const changeContent = (project) => {
        setSelectedProject(project);
        setDisable3DModelControls(true); // Disable 3D controls when a project is selected
    };

    // Reset to default content when main tab is clicked
    const handleMainTabClick = () => {
        setSelectedProject(null);  // Reset to default content
        setDisable3DModelControls(false); // Re-enable 3D controls when no project is selected
    };

    // Scroll the bottom content to the top when selectedProject changes
    useEffect(() => {
        // Scroll the bottom content to the top when selectedProject changes
        if (bottomContentRef.current) {
            bottomContentRef.current.scrollTo({
                top: 0,
                behavior: 'smooth',  // Smooth scroll
            });
        }

        // Scroll the entire folder to the top when selectedProject changes
        if (folderRef.current) {
            folderRef.current.scrollTo({
                top: 0,
                behavior: 'smooth',  // Smooth scroll
            });
        }
    }, [selectedProject]);  // Only trigger when selectedProject changes

    // Disable scroll event on the 3D model when popup is active
    useEffect(() => {
        const canvas = document.querySelector('canvas');
        if (canvas) canvas.style.pointerEvents = 'none';
        return () => {
            if (canvas) canvas.style.pointerEvents = 'auto';
        };
    }, []);

    useEffect(() => {
        document.body.classList.add('popup‑open');
        return () => {
            document.body.classList.remove('popup‑open');
        };
    }, []);

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

            <div className="folder">
                <div className="top">
                    {/* Main Tab as Button */}
                    <button className="top-tab-main" onClick={handleMainTabClick}></button>
                    {/* Project Buttons */}
                    <button
                        className="top-tab"
                        onClick={() => changeContent('Project1')}
                    >
                        Project 1
                    </button>
                    <button
                        className="top-tab"
                        onClick={() => changeContent('Project2')}
                    >
                        Project 2
                    </button>
                    <button
                        className="top-tab"
                        onClick={() => changeContent('Project3')}
                    >
                        Project 3
                    </button>
                    <button
                        className="top-tab"
                        onClick={() => changeContent('Project4')}
                    >
                        Project 4
                    </button>
                </div>

                {/* Bottom Content with color change */}
                <div
                    ref={bottomContentRef}  // Set the ref to the bottom content container
                    className={`bottom ${selectedProject ? selectedProject.toLowerCase() : 'main-page'}`}
                    style={{ overflowY: 'auto', maxHeight: '80vh' }}  // Ensure scrollable area
                >
                    {/* Conditionally render the content based on the selected project */}
                    {selectedProject === 'Project1' && <Project1 />}
                    {selectedProject === 'Project2' && <Project2 />}
                    {selectedProject === 'Project3' && <Project3 />}
                    {selectedProject === 'Project4' && <Project4 />}
                    {!selectedProject && (
                        <div className="default-content">
                            <div className="default-title">{defaultContent.title}</div>
                            <div className="default-description">{defaultContent.description}</div>
                        </div>
                    )}
                </div>

                {/* Close Button */}
                <button
                    className={`button ${selectedProject ? 'project-selected' : 'default'}`}
                    onClick={e => {
                        e.stopPropagation();
                        onClose();
                    }}
                    onMouseOver={() => setHovered(true)}
                    onMouseOut={() => setHovered(false)}
                >
                    ✕
                </button>
            </div>
        </Html>
    );
};

export default ProductionPopup;
