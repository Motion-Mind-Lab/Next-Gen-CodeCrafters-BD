import './cta.css';

export function CTASection() {
    return (
        <section className="cta">
            <div className="cta__container">
                <h2 className="cta__title">Ready to Prove Your Engineering Potential?</h2>
                <p className="cta__subtitle">
                    Join Next-Gen Coders BD today, build real projects, receive code reviews, and earn your verified developer badge.
                </p>
                <div className="cta__actions">
                    <button className="cta__btn cta__btn--primary">Join Community Now</button>
                    <button className="cta__btn cta__btn--secondary">Read Guidelines</button>
                </div>

                <div className="cta__branding">
                    <span className="cta__branding-text">POWERED BY <strong style={{ paddingLeft: '5px'}}>MOTION MIND</strong></span>
                </div>
            </div>
        </section>
    );
}