import "../styles/testimonials.css";

const Testimonials = () => {
    const students = [
        { name: "Arjun", cohort: "Cohort 01", progress: 35 },
        { name: "Priya", cohort: "Cohort 01", progress: 52 },
        { name: "Rohan", cohort: "Cohort 01", progress: 68 },
        { name: "Neha", cohort: "Cohort 01", progress: 41 },
        { name: "Vikram", cohort: "Cohort 01", progress: 29 },
    ];

    return (
        <section className="testimonials-section" id="testimonials">
            <div className="container">
                <h2 className="testimonials-title">
                    hear it from <span className="accent">Our Students</span>
                </h2>

                <div className="testimonials-grid">
                    {students.map((student, i) => (
                        <div className="testimonial-card" key={i}>
                            <div className="testimonial-header">
                                <div className="testimonial-name">{student.name}</div>
                                <div className="testimonial-cohort">{student.cohort}</div>
                            </div>

                            <div className="testimonial-portrait">
                                <span className="testimonial-initials">
                                    {student.name.substring(0, 2)}
                                </span>
                            </div>

                            <div className="testimonial-controls">
                                <button className="control-btn" aria-label="Play">
                                    <svg viewBox="0 0 24 24" fill="currentColor">
                                        <polygon points="5,3 19,12 5,21" />
                                    </svg>
                                </button>
                                <button className="control-btn" aria-label="Volume">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M11 5L6 9H2v6h4l5 4V5z" />
                                        <path d="M15.54 8.46a5 5 0 010 7.07" />
                                    </svg>
                                </button>
                                <div className="progress-bar">
                                    <div className="progress-fill" style={{ width: `${student.progress}%` }}></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;