import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Contact = () => (
    <div className="project-container" id="about">
        <h2 className="project-title">LET’S CONNECT</h2>
        <p className="description">
            Whether you're interested in collaborating on a project<br />
            or simply want to say hello, I’d love to hear from you.
        </p>

        {/* Metadata */}
        <div className="about-meta">
            <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <a href="mailto:01.kayingchan@gmail.com">01.kayingchan@gmail.com</a>
            </div>
            <div class="contact-item">
                <i class="fab fa-linkedin-in"></i>
                <a href="https://www.linkedin.com/in/kayingchan01" target="_blank">
                    www.linkedin.com/in/kayingchan01
                </a>
            </div>
            <div class="contact-item">
                <i class="fab fa-instagram"></i>
                <a href="https://www.instagram.com/01_kyc" target="_blank">
                    https://www.instagram.com/01_kyc
                </a>
            </div>
        </div>
    </div>
);

export default Contact;
