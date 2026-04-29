import "../styles/curriculum.css";

const CheckIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12" />
    </svg>
);

const modules = [
    {
        number: "01",
        theme: "theme-red",
        subtitle: "the",
        title: "Psychology",
        desc: "Learn to edit what people feel",
        descItalic: "not what they see",
        skills: [
            { emoji: "🎨", label: "Deciding visuals" },
            { emoji: "🧠", label: "Human Psychology" },
            { emoji: "🎵", label: "Music selection" },
            { emoji: "🎬", label: "Building tension" },
            { emoji: "🏃", label: "Pacing" },
        ],
        infoDesc: "Master the psychology of storytelling. How visuals, rhythm, and sound shape what people feel.",
        learns: [
            "How to build story arcs that hold attention.",
            "When to use silence, cuts, and transitions for impact.",
            "How to build and release tension like a cinematic editor.",
        ],
    },
    {
        number: "02",
        theme: "theme-amber",
        subtitle: "the",
        title: "Craft",
        desc: "Bring your creative vision to life",
        descItalic: "using professional tools",
        skills: [
            { emoji: "🎬", label: "DaVinci Resolve" },
            { emoji: "📐", label: "Color grading" },
            { emoji: "🔊", label: "Sound design" },
            { emoji: "✂️", label: "Advanced cuts" },
            { emoji: "🎞️", label: "Transitions" },
        ],
        infoDesc: "Learn the technical craft behind cinematic editing. Master the tools used by industry professionals.",
        learns: [
            "Professional color grading workflows used in film.",
            "Sound design techniques that elevate your edits.",
            "Advanced transition techniques beyond simple cuts.",
        ],
    },
    {
        number: "03",
        theme: "theme-emerald",
        subtitle: "the",
        title: "Business",
        desc: "Turn your skills into a career",
        descItalic: "and earn what you deserve",
        skills: [
            { emoji: "💼", label: "Client acquisition" },
            { emoji: "📝", label: "Portfolio building" },
            { emoji: "💰", label: "Pricing strategy" },
            { emoji: "🤝", label: "Negotiation" },
            { emoji: "📈", label: "Scaling" },
        ],
        infoDesc: "Build a sustainable freelance business. Learn to find, close, and retain high-paying clients.",
        learns: [
            "Build a portfolio that attracts premium clients.",
            "Price your services 2-3x higher than average editors.",
            "Create systems that let you scale without burnout.",
        ],
    },
];

const Curriculum = () => {
    return (
        <section className="curriculum-section" id="curriculum">
            <div className="container">
                <h2 className="section-title">
                    what <span>YOU WILL LEARN</span> inside the cohort?
                </h2>

                {modules.map((mod, i) => (
                    <div className={`module-row ${i % 2 !== 0 ? "reversed" : ""}`} key={i}>
                        {/* Visual Card */}
                        <div className={`module-visual ${mod.theme}`} data-number={mod.number}>
                            <div className="module-badge">Module {mod.number}</div>
                            <div className="module-visual-title">{mod.subtitle}</div>
                            <div className="module-visual-heading">{mod.title}</div>
                            <p className="module-visual-desc">
                                {mod.desc}
                                <br />
                                <em>{mod.descItalic}</em>
                            </p>

                            <div className="skills-section">
                                <div className="skills-label">Skills you will master:</div>
                                <div className="skills-tags">
                                    {mod.skills.map((skill, j) => (
                                        <span className="skill-tag" key={j}>
                                            <span className="emoji">{skill.emoji}</span>
                                            {skill.label}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="module-attribution">
                                Edit · To · Earn Cohort | <strong>by SaqlainKhan</strong>
                            </div>
                        </div>

                        {/* Info Side */}
                        <div className="module-info">
                            <div className="module-badge">Module {mod.number}</div>
                            <p className="module-info-desc">{mod.infoDesc}</p>

                            <div className="learn-title">What you will learn:</div>
                            <ul className="learn-list">
                                {mod.learns.map((item, k) => (
                                    <li key={k}>
                                        <div className="learn-check">
                                            <CheckIcon />
                                        </div>
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <div className="module-cta">
                                <button className="cta-button">
                                    join now
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Curriculum;