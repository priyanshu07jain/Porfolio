import "../styles/pricing.css";

const CheckIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12" />
    </svg>
);

const plans = [
    {
        name: "Build",
        desc: "Perfect for beginners starting their editing journey",
        price: "6,999",
        period: "one-time payment",
        features: [
            "12-week structured curriculum",
            "Community access",
            "Weekly assignments",
            "Certificate of completion",
        ],
        btnStyle: "outline",
    },
    {
        name: "Dominate",
        desc: "Best value — everything you need to go pro",
        price: "14,999",
        period: "one-time payment",
        featured: true,
        badge: "Most Popular",
        features: [
            "Everything in Build",
            "1-on-1 mentorship calls",
            "Portfolio review sessions",
            "Client acquisition playbook",
            "Lifetime community access",
        ],
        btnStyle: "filled",
    },
    {
        name: "Creator",
        desc: "For serious editors who want VIP treatment",
        price: "24,999",
        period: "one-time payment",
        features: [
            "Everything in Dominate",
            "Private Slack channel with mentor",
            "Real client projects",
            "Revenue sharing opportunities",
            "Priority support forever",
        ],
        btnStyle: "outline",
    },
];

const Pricing = () => {
    return (
        <section className="pricing-section" id="pricing">
            <div className="container">
                <h2 className="section-title">
                    The <span>SMART INVESTMENT</span> in your future
                </h2>

                <div className="pricing-grid">
                    {plans.map((plan, i) => (
                        <div className={`price-card ${plan.featured ? "featured" : ""}`} key={i}>
                            {plan.badge && <span className="price-badge">{plan.badge}</span>}
                            <h3 className="plan-name">{plan.name}</h3>
                            <p className="plan-desc">{plan.desc}</p>
                            <div className="plan-price">
                                <span className="currency">₹</span>
                                {plan.price}
                            </div>
                            <p className="plan-period">{plan.period}</p>
                            <ul className="plan-features">
                                {plan.features.map((feature, j) => (
                                    <li key={j}>
                                        <span className="check"><CheckIcon /></span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <button className={`plan-btn ${plan.btnStyle}`}>
                                Join Now →
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;