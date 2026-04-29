import { useState, useEffect } from "react";
import "../styles/navbar.css";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
            <div className="container nav-content">
                <a href="#" className="nav-logo">
                    <div className="logo-icon">C</div>
                    Personal<span className="logo-accent">Portfolio</span>
                </a>

                <button
                    className="nav-toggle"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle navigation"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
                    <li><a href="#curriculum" onClick={() => setMenuOpen(false)}>Curriculum</a></li>
                    <li><a href="#mentor" onClick={() => setMenuOpen(false)}>About Mentor</a></li>
                    <li><a href="#pricing" onClick={() => setMenuOpen(false)}>Pricing</a></li>
                    <li><a href="#faq" onClick={() => setMenuOpen(false)}>FAQs</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;