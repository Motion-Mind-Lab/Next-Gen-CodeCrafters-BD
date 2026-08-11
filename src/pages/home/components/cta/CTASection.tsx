import './cta.css';

export function CTASection() {
    const whaUrl = 'https://wa.me/880801804187223?text=Hi%20NGCBD%20Team!%20I%20want%20to%20get%20an%20invite%20for%20the%20developer%20community.%20Here%20is%20my%20GitHub/Portfolio%20link:%20';

    return (
        <section className="cta">
            <div className="cta__container">
                <h2 className="cta__title">Ready to Prove Your Engineering Potential?</h2>
                <p className="cta__subtitle">
                    Join Next-Gen CodeCrafters BD today, build real projects, receive code reviews, and earn your verified developer badge.
                </p>
                <div className="cta__actions">
                    <a href={whaUrl} target='_blank' rel="noopener noreferrer" className="cta__btn cta__btn--primary">Join Community Now</a>
                    <button className="cta__btn cta__btn--secondary" style={{ cursor: 'pointer'}} onClick={() => window.location.href = '/rules'}>Read Rules</button>
                </div>

                <div className="cta__branding">
                    <span className="cta__branding-text">POWERED BY <strong style={{ paddingLeft: '5px'}}>MOTION MIND</strong></span>
                </div>
            </div>
        </section>
    );
}