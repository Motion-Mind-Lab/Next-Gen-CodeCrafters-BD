import './hero.css';

export function Hero() {
    return (
        <section class="hero-wrapper">
            <div class="hero-bg-gradient"></div>
            <div class="hero-blob blob-top-right"></div>
            <div class="hero-blob blob-bottom-left"></div>

            <div class="hero-container">
                <div class="hero-badge">
                    <span class="badge-dot"></span>
                    <p>Not a course. Built for active builders & researchers.</p>
                </div>
                
                <div class="hero-title">
                    <h2>Showcase Your Code.</h2>
                    <h2 class="gradient-text">Get Reviewed.</h2>
                    <h2>Elevate Your Portfolio.</h2>
                </div>
                
                <div class="hero-description">
                    <p>A dedicated community for passionate Bangladeshi developers to present research-level projects, 
                        receive expert code reviews, and compete in bi-monthly leagues.</p>
                </div>
                
                <div class="hero-actions">
                    <button class="btn-primary">
                        How to Submit
                    </button>
                    <button class="btn-secondary">
                        Read Docs
                    </button>
                </div>

                <div className="hero-powered">
                    <span>POWERED BY</span>
                    <strong>MOTION MIND</strong>
                </div>
            </div>
        </section>
    )
}