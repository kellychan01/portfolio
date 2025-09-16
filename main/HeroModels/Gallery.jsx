import React from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

const Gallery = () => {
    // Only show on tablet or mobile
    const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1200px)" });
    if (!isTabletOrMobile) return null;



    return (
        <section id="gallery">
            {/* Container for projects */}
            <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>

            {/* Video Production */}
                <div className="gallery-label">Video Production</div>
                    {/* Project 1 */}
                <div style={{ position: "relative" }}>
                    <Link to="/project1">
                        <img src="/pic/project1/project1-1.jpg" alt="Days of Being Wild - Remake"
                             style={{width: "100%", aspectRatio: "5 / 3", objectFit: "cover", cursor: "pointer"}}/>
                    </Link>
                    <div className="item-overlay">
                        <h3>Days of Being Wild - Remake</h3> <p>Short Film</p>
                    </div>
                </div>
                {/* Project 2 */}
                <div style={{ position: "relative" }}>
                    <Link to="/project2">
                                <img src="/pic/project9/project9-1.jpg" alt="Shadow of Freedom"
                                     style={{ width: "100%", aspectRatio: "5 / 3", objectFit: "cover", cursor: "pointer" }}/>
                    </Link>
                        <div className="item-overlay">
                            <h3>Shadows of Freedom</h3> <p>Documentary</p>
                        </div>
                    </div>
                    {/* Project 3 */}
                    <div style={{ position: "relative" }}>
                        <Link to="/project3">
                            <img src="/pic/project10/project10-1.JPG" alt="Find Me"
                                 style={{ width: "100%", aspectRatio: "5 / 3", objectFit: "cover", cursor: "pointer" }}/>
                        </Link>
                        <div className="item-overlay">
                            <h3>Beloved: Find me</h3> <p>Micro Film</p>
                        </div>
                    </div>
                    {/* Project 4 */}
                     <div style={{ position: "relative" }}>
                        <Link to="/project4">
                            <img src="/pic/project11/project11-2.png" alt="A Semester In Bangkok"
                                 style={{ width: "100%", aspectRatio: "5 / 3", objectFit: "cover", cursor: "pointer" }}/>
                        </Link>
                         <div className="item-overlay">
                             <h3>A Semester In Bangkok</h3> <p>Vlog</p>
                         </div>
                    </div>

            {/* Video Editing */}
                <div className="gallery-label">Video Editing</div>
                    {/* Project 5 */}
                     <div style={{ position: "relative" }}>
                        <Link to="/project5">
                            <img src="/pic/project2/project2-2.png" alt="Pocket Billiards Portrait Photography"
                                 style={{ width: "100%", aspectRatio: "5 / 3", objectFit: "cover", cursor: "pointer" }}/>
                        </Link>
                         <div className="item-overlay">
                             <h3>Pocket Billiards<br />Photography</h3>
                         </div>
                    </div>
                    {/* Project 6 */}
                     <div style={{ position: "relative" }}>
                        <Link to="/project6">
                            <img src="/pic/project8/project8-1.png" alt="Redwood Grand Opening"
                                 style={{ width: "100%", aspectRatio: "5 / 3", objectFit: "cover", cursor: "pointer" }}/>
                        </Link>
                         <div className="item-overlay">
                             <h3>Redwood Medi Spa<br />Grand Opening</h3>
                         </div>
                    </div>
                    {/* Project 7 */}
                     <div style={{ position: "relative" }}>
                        <Link to="/project7">
                            <img src="/pic/project4/project4-1.png" alt="WeWorkingWomen Career Forum"
                                 style={{ width: "100%", aspectRatio: "5 / 3", objectFit: "cover", cursor: "pointer" }}/>
                        </Link>
                         <div className="item-overlay">
                             <h3>WeWorkingWomen<br />Career Forum</h3>
                         </div>
                    </div>
            {/* Graphic Design */}
                <div className="gallery-label">Graphic Design</div>
                    {/* Project 8 */}
                     <div style={{ position: "relative" }}>
                        <Link to="/project8">
                            <img src="/pic/project5/project5-1.png" alt="Coinnected"
                                 style={{ width: "100%", aspectRatio: "5 / 3", objectFit: "cover", cursor: "pointer" }}/>
                        </Link>
                         <div className="item-overlay">
                             <h3>Coinnected</h3> <p>T-shirt Graphic</p>
                         </div>
                    </div>
                    {/* Project 9 */}
                     <div style={{ position: "relative" }}>
                        <Link to="/project9">
                            <img src="/pic/project3/project3-1.png" alt="Between The Letters"
                                 style={{ width: "100%", aspectRatio: "5 / 3", objectFit: "cover", cursor: "pointer" }}/>
                        </Link>
                         <div className="item-overlay">
                             <h3>Between the Letters</h3> <p>Typography</p>
                         </div>
                    </div>
            {/* 3D Modeling */}
                <div className="gallery-label">3D Modeling</div>
                    {/* Project 10 */}
                      <div style={{ position: "relative" }}>
                        <Link to="/project10">
                            <img src="/pic/project12/project12-9.png" alt="Interactive Workspace: A 3d Portfolio Experience"
                                 style={{ width: "100%", aspectRatio: "5 / 3", objectFit: "cover", cursor: "pointer" }}/>
                        </Link>
                          <div className="item-overlay">
                              <h3>Interactive Workspace:<br />A 3d Portfolio Experience</h3>
                          </div>
                    </div>
                    {/* Project 11 */}
                      <div style={{ position: "relative" }}>
                        <Link to="/project11">
                            <img src="/pic/project13/project13-4.png" alt="Floral Forms"
                                 style={{ width: "100%", aspectRatio: "5 / 3", objectFit: "cover", cursor: "pointer" }}/>
                        </Link>
                          <div className="item-overlay">
                              <h3>Floral Forms</h3>
                          </div>
                    </div>
                    {/* Project 12 */}
                       <div style={{ position: "relative" }}>
                        <Link to="/project12">
                            <img src="/pic/project14/project14-5.png" alt="Pixelflip"
                                 style={{ width: "100%", aspectRatio: "5 / 3", objectFit: "cover", cursor: "pointer" }}/>
                        </Link>
                           <div className="item-overlay">
                               <h3>Pixelflip</h3>
                           </div>
                    </div>
            {/* Photography */}
                <div className="gallery-label">Photography</div>
                    {/* Project 13 */}
                      <div style={{ position: "relative" }}>
                        <Link to="/project13">
                            <img src="/pic/project6/project6-1.jpg" alt="Aether & Gold"
                                 style={{ width: "100%", aspectRatio: "5 / 3", objectFit: "cover", cursor: "pointer" }}/>
                        </Link>
                          <div className="item-overlay">
                              <h3>Aether & Gold</h3>
                          </div>
                    </div>
                    {/* Project 14 */}
                        <div style={{ position: "relative" }}>
                        <Link to="/project14">
                            <img src="/pic/project7/project7-1.jpg" alt="Beyond The Myth"
                                 style={{ width: "100%", aspectRatio: "5 / 3", objectFit: "cover", cursor: "pointer" }}/>
                        </Link>
                            <div className="item-overlay">
                                <h3>Beyond The Myth</h3>
                            </div>
                    </div>

                {/* FOOTER */}
                <footer class="footer">
                    © 2025 Ka Ying (Kelly) Chan
                    <br/>
                </footer>
            </div>
        </section>
    );
};

export default Gallery;
