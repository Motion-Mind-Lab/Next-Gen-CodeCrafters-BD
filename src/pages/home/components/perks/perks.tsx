import { ShieldCheck, Gift, CodeXml, Code } from 'kivex-levelo';
import './perks.css';

export function Perks() {
    const perks = [
        {
            icon: ShieldCheck,
            title: "Verified Developer Badge",
            description: "Maintain a 200+ seasonal score to earn a custom NGCBD badge you can feature on your portfolio and LinkedIn profile."
        },
        {
            icon: Code,
            title: "Actionable Code Reviews",
            description: "Get detailed, production-grade feedback on architecture, security, and cleanliness from experienced reviewers."
        },
        {
            icon: CodeXml,
            title: "Open Source Collaboration",
            description: "Connect with dedicated builders, exchange PR reviews, and build meaningful, real-world proof of work."
        },
        {
            icon: Gift,
            title: "Seasonal Recognition",
            description: "Top performers get featured across our community channels and unlock exclusive bi-monthly rewards."
        }
    ];

    return (
        <section className="perks">
            <div className="perks__container">
                <div className="perks__header">
                    <span className="perks__badge">Why It Matters</span>
                    <h2 className="perks__title">Build Proof of Work That Counts</h2>
                    <p className="perks__subtitle">
                        NGCBD is built to help serious developers showcase real engineering skills, not just certificates.
                    </p>
                </div>

                <div className="perks__grid">
                    {perks.map((perk, index) => {
                        const Icon = perk.icon;
                        return (
                            <div className="perks__card" key={index}>
                                <div className="perks__icon-wrapper">
                                    <Icon className="perks__icon" />
                                </div>
                                <h3 className="perks__card-title">{perk.title}</h3>
                                <p className="perks__card-text">{perk.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}