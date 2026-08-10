import { Check, Gift, Code, Users } from 'kivex-levelo';
import './howitworks.css';

export function HowItWorks() {
    const steps = [
        {
            number: "01",
            icon: Users,
            title: "Join & Register",
            description: "Register for the upcoming bi-monthly league season. Get onboarded into our exclusive builder community."
        },
        {
            number: "02",
            icon: Code,
            title: "Submit 2 Projects",
            description: "Build and submit 1 quality project per month (2 projects in 2 months) for a total of 200 marks."
        },
        {
            number: "03",
            icon: Check,
            title: "Stay Active & Contribute",
            description: "Earn up to 50 extra marks by providing peer reviews, creating GitHub issues, or submitting PRs."
        },
        {
            number: "04",
            icon: Gift,
            title: "Get Reviewed & Win",
            description: "Maintain a minimum score of 200/250 to unlock verified badges, leaderboard ranks, and bi-monthly rewards."
        }
    ];

    return (
        <section className="how-it-works">
            <div className="how-it-works__container">
                <div className="how-it-works__header">
                    <span className="how-it-works__badge">League Process</span>
                    <h2 className="how-it-works__title">How NGCBD Works</h2>
                    <p className="how-it-works__subtitle">
                        A structured, transparent roadmap designed to keep you accountable and reward real proof of work.
                    </p>
                </div>

                <div className="how-it-works__grid">
                    {steps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <div className="how-it-works__card" key={index}>
                                <div className="how-it-works__card-top">
                                    <span className="how-it-works__step-number">{step.number}</span>
                                    <div className="how-it-works__icon-wrapper">
                                        <Icon className="how-it-works__icon" />
                                    </div>
                                </div>
                                <h3 className="how-it-works__card-title">{step.title}</h3>
                                <p className="how-it-works__card-text">{step.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}