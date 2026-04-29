import "../styles/hero.css";

const Hero = () => {
    return (
        <section className="hero-section" id="hero">
            <div className="container">
                <div className="cohort-badge">
                    <span>Edit</span>
                    <span className="dot"></span>
                    <span>To</span>
                    <span className="dot"></span>
                    <span>Earn</span>
                    <span className="dot"></span>
                    <span style={{ color: "var(--text-primary)", fontWeight: 700 }}>Cohort</span>
                </div>

                <h1 className="hero-heading">
                    master{" "}
                    <span className="accent">Documentary Style Editing in 12 Weeks</span>{" "}
                    and get paid 2–3x more than the average editors
                </h1>

                <p className="hero-subtitle">
                    Learn cinematic editing techniques used by Netflix, Discovery & BBC editors.
                    Build a portfolio that gets you high-paying clients.
                </p>

                <div className="hero-video-wrapper">
                    <iframe
                        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                        title="Why join this Cohort?"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>

                <div className="hero-cta-wrapper">
                    <button className="cta-button">
                        join now
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;