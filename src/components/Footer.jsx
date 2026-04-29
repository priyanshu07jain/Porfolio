import "../styles/footer.css";

const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <div className="footer-logo">
                            <div className="f-icon">C</div>
                            POrfolio<span className="f-accent">Personal</span>
                        </div>
                        <p className="footer-tagline">
                            Master documentary-style editing and build a career
                            that lets you earn 2-3x more than the average editor.
                        </p>
                    </div>

                    <div className="footer-links">
                        <div className="footer-col">
                            <h4>Program</h4>
                            <ul>
                                <li><a href="#curriculum">Curriculum</a></li>
                                <li><a href="#pricing">Pricing</a></li>
                                <li><a href="#testimonials">Testimonials</a></li>
                                <li><a href="#faq">FAQs</a></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>Connect</h4>
                            <ul>
                                <li><a href="#">Instagram</a></li>
                                <li><a href="#">YouTube</a></li>
                                <li><a href="#">Twitter / X</a></li>
                                <li><a href="#">LinkedIn</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p className="footer-copy">
                        © 2026 pjCreateInfinite. All rights reserved.
                    </p>
                    <div className="footer-socials">
                        <a href="#" className="social-link" aria-label="Instagram">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                                <circle cx="12" cy="12" r="5" />
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                            </svg>
                        </a>
                        <a href="#" className="social-link" aria-label="YouTube">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.4 19.6C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 001.94-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58z" />
                                <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
                            </svg>
                        </a>
                        <a href="#" className="social-link" aria-label="Twitter">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5 0-.28-.03-.56-.08-.83A7.72 7.72 0 0023 3z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;