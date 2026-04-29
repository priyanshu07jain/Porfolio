import { useState } from "react";
import "../styles/faq.css";

const faqs = [
    {
        q: "Who is this cohort for?",
        a: "This cohort is for aspiring video editors, content creators, and freelancers who want to master documentary-style editing and earn 2-3x more than average editors. No prior experience needed — just a passion for storytelling.",
    },
    {
        q: "What software do I need?",
        a: "We primarily use DaVinci Resolve (free version works great!) and Adobe Premiere Pro. You'll learn industry-standard workflows used by Netflix, Discovery, and BBC editors.",
    },
    {
        q: "How much time do I need to commit weekly?",
        a: "Plan for 8-10 hours per week. This includes watching lesson videos (2-3 hrs), completing assignments (4-5 hrs), and attending live Q&A sessions (1-2 hrs).",
    },
    {
        q: "Will I get a certificate?",
        a: "Yes! Upon completing all modules and final projects, you'll receive a verified certificate of completion. Dominate and Creator tier members also get a portfolio review and LinkedIn recommendation.",
    },
    {
        q: "Is there a refund policy?",
        a: "Absolutely. We offer a full refund within the first 7 days if you feel the cohort isn't the right fit for you. No questions asked.",
    },
    {
        q: "Can I join the next cohort instead?",
        a: "Yes, your enrollment is transferable to the next cohort. Just reach out to our support team and we'll handle the switch for you.",
    },
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (i) => {
        setOpenIndex(openIndex === i ? null : i);
    };

    return (
        <section className="faq-section" id="faq">
            <div className="container">
                <h2 className="section-title">
                    Frequently Asked <span>Questions</span>
                </h2>

                <div className="faq-list">
                    {faqs.map((item, i) => (
                        <div className={`faq-item ${openIndex === i ? "open" : ""}`} key={i}>
                            <button className="faq-question" onClick={() => toggle(i)}>
                                {item.q}
                                <span className="faq-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="12" y1="5" x2="12" y2="19" />
                                        <line x1="5" y1="12" x2="19" y2="12" />
                                    </svg>
                                </span>
                            </button>
                            <div className="faq-answer">
                                <p className="faq-answer-inner">{item.a}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
