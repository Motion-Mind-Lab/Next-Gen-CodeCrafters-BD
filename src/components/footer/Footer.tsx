import { Code, Mail } from 'kivex-levelo';
import facebook from '../svg-icons/facebook.svg';
import github from '../svg-icons/github.svg';
import whatsapp from '../svg-icons/whatsapp.svg';
import Logo from '/logoT.svg';
import './footer.css';

export function Footer() {
    
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__grid">
                    {/* Brand Column */}
                    <div className="footer__brand-col">
                        <div className="footer__brand-logo">
                            <div className="footer__logo-icon">
                                <img src={Logo} class="logo" />
                            </div>
                            <span className="footer__logo-text">NGCBD</span>
                        </div>
                        <p className="footer__brand-desc">
                            A community platform for Bangladeshi developers who build, share, and grow through rigorous peer review.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="footer__col">
                        <h4 className="footer__title">QUICK LINKS</h4>
                        <ul className="footer__links">
                            <li><a href="/">Home</a></li>
                            <li><a href="/docs">Docs</a></li>
                            <li><a href="#rules">Rules</a></li>
                            <li><a href="#leaderboard">Leaderboard</a></li>
                            <li><a href="#showcase">Project Showcase</a></li>
                        </ul>
                    </div>

                    {/* Community Links */}
                    <div className="footer__col">
                        <h4 className="footer__title">COMMUNITY</h4>
                        <ul className="footer__links">
                            <li>
                                <a href="https://facebook.com" target="_blank" rel="noreferrer">
                                    <img src={facebook} class="svg-icon" /> Facebook Group
                                </a>
                            </li>
                            <li>
                                <a href="https://whatsapp.com" target="_blank" rel="noreferrer">
                                    <img src={whatsapp} class="svg-icon" /> WhatsApp Community
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com" target="_blank" rel="noreferrer">
                                    <img src={github} class="svg-icon" /> GitHub Org
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Get Involved */}
                    <div className="footer__col">
                        <h4 className="footer__title">GET INVOLVED</h4>
                        <p className="footer__text">
                            Have questions or want to become a reviewer?
                        </p>
                        <a href="mailto:contact@ngcbd.org" className="footer__contact-btn">
                            <Mail size={16} /> Contact Us
                        </a>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="footer__bottom">
                    <p className="footer__copyright">
                        © <span style={{ paddingLeft: '5px', paddingRight: '5px' }}>{(new Date()).getFullYear()}</span> Next-Gen Coders BD. Powered by <strong onClick={() => window.open('https://lab.motionmind.me', '_blank')} style={{ paddingLeft: '5px', cursor: 'pointer' }}>Motion Mind</strong>. All rights reserved.
                    </p>
                    <span className="footer__tagline">
                        Built for builders, by builders.
                    </span>
                </div>
            </div>
        </footer>
    );
}