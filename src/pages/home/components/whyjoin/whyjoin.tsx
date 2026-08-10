import { Briefcase, CodeXml, Crown, Users } from 'kivex-levelo';
import './whyjoin.css';

export function WhyJoin() {
    return (
        <section className="why-join">
            <div className="why-join__container">
                <div className="why-join__header">
                    <h2 className="why-join__title">Why Join NGCBD?</h2>
                    <p className="why-join__subtitle">
                        A focused platform designed exclusively for serious builders who want real feedback and recognition.
                    </p>
                </div>

                <div className="why-join__grid">
                    <div className="why-join__card">
                        <div className="why-join__icon-wrapper">
                            <CodeXml className="why-join__icon" />
                        </div>
                        <h3 className="why-join__card-title">Expert Code Review</h3>
                        <p className="why-join__card-text">
                            Detailed scoring against a transparent rubric. Get actionable feedback from experienced reviewers on architecture, quality, and innovation.
                        </p>
                    </div>

                    <div className="why-join__card">
                        <div className="why-join__icon-wrapper">
                            <Crown className="why-join__icon" />
                        </div>
                        <h3 className="why-join__card-title">Bi-Monthly Rewards</h3>
                        <p className="why-join__card-text">
                            Compete in leagues every two months. Earn badges, recognition, and prizes for outstanding projects that push the boundaries.
                        </p>
                    </div>

                    <div className="why-join__card">
                        <div className="why-join__icon-wrapper">
                            <Briefcase className="why-join__icon" />
                        </div>
                        <h3 className="why-join__card-title">Proof of Work</h3>
                        <p className="why-join__card-text">
                            Build a verified portfolio of reviewed projects. Showcase real contributions to clients, recruiters, and open-source communities.
                        </p>
                    </div>

                    <div className="why-join__card">
                        <div className="why-join__icon-wrapper">
                            <Users className="why-join__icon" />
                        </div>
                        <h3 className="why-join__card-title">Pure Peer Community</h3>
                        <p className="why-join__card-text">
                            No beginner spam. No course upsells. Just active builders and researchers exchanging high-signal discussions and collaboration.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}