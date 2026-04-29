import "../styles/brands.css";

const Brands = () => {
    const brands = [
        { name: "Discovery", style: "mono" },
        { name: "Vox", style: "serif" },
        { name: "BBC", style: "mono" },
        { name: "Netflix", style: "default" },
        { name: "HBO", style: "default" },
    ];

    return (
        <section className="brands-section">
            <div className="container">
                <h2 className="brands-title">
                    edit <span className="accent">CINEMATIC</span> videos like...
                </h2>

                <div className="brands-strip">
                    {brands.map((brand, i) => (
                        <div className="brand-item" key={i}>
                            <div className="brand-avatar">
                                {brand.name[0]}
                            </div>
                            <span className={`brand-logo-text ${brand.style === "serif" ? "serif" : brand.style === "mono" ? "mono" : ""}`}>
                                {brand.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Brands;
