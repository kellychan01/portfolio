import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./Hero.jsx";
import ScrollToTop from "./HeroModels/ScrollToTop.jsx";
{/* Video Production */}
import Project1 from "./Projects/Days.jsx";
import Project2 from "./Projects/Shadow.jsx";
import Project3 from "./Projects/Find.jsx";
import Project4 from "./Projects/Thai.jsx";
{/* Video Editing */}
import Project5 from "./Projects/Billiards.jsx";
import Project6 from "./Projects/Redwood.jsx";
import Project7 from "./Projects/WWW.jsx";
{/* Graphic Design */}
import Project8 from "./Projects/Coin.jsx";
import Project9 from "./Projects/Letters.jsx";
{/* 3D Modeling */}
import Project10 from "./Projects/Desk.jsx";
import Project11 from "./Projects/Flower.jsx";
import Project12 from "./Projects/Game.jsx";
{/* Photography */}
import Project13 from "./Projects/Aether.jsx";
import Project14 from "./Projects/Black.jsx";

const App = () => {
    return (
        <Router>
            <ScrollToTop />
            <Routes>
                {/* Main page */}
                <Route path="/" element={<Hero />} />

                {/* Project pages */}
                <Route path="/project1" element={<Project1 />} />
                <Route path="/project2" element={<Project2 />} />
                <Route path="/project3" element={<Project3 />} />
                <Route path="/project4" element={<Project4 />} />
                <Route path="/project5" element={<Project5 />} />
                <Route path="/project6" element={<Project6 />} />
                <Route path="/project7" element={<Project7 />} />
                <Route path="/project8" element={<Project8 />} />
                <Route path="/project9" element={<Project9 />} />
                <Route path="/project10" element={<Project10 />} />
                <Route path="/project11" element={<Project11 />} />
                <Route path="/project12" element={<Project12 />} />
                <Route path="/project13" element={<Project13 />} />
                <Route path="/project14" element={<Project14 />} />
            </Routes>
        </Router>
    );
};

export default App;
