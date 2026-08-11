import './header.css';
import Logo from '/logoT.svg';
import { Users, Menu, X } from 'kivex-levelo';
import { state } from 'levelojs';

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = state(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen());
    };

    return (
        <div class="bg">
            <div class="header">
                <div class="logo-brand" style={{ cursor: 'pointer' }} onClick={() => window.location.href = "/"}>
                    <img class="logo" src={Logo} alt="Logo" />
                    <div class="logo-text">
                        <h2>NGCBD</h2>
                        <p>Next-Gen CodeCrafters BD</p>
                    </div>
                </div>

                <div class="links">
                    <a class="header-link" href='/docs'>Docs</a>
                    <a class="header-link" href='/rules'>Rules</a>
                    <a class="header-link" href='/leaderboard'>Leaderboard</a>
                    <a class="header-link" href='/showcase'>Project Showcase</a>
                    <a class="header-link">About Us</a>
                </div>

                <div class="right-action">
                    <div class="join-button desktop-join">
                        <Users />
                        <button>Join Community</button>
                    </div>

                    <button class="mobile-menu-btn" onClick={toggleMenu}>
                        {isMenuOpen() ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            <div class={`mobile-menu ${isMenuOpen() ? 'open' : ''}`}>
                <div class="mobile-links">
                    <a class="mobile-link" href='/docs' onClick={() => setIsMenuOpen(false)}>Docs</a>
                    <a class="mobile-link" href='/rules' onClick={() => setIsMenuOpen(false)}>Rules</a>
                    <a class="mobile-link" href='/leaderboard' onClick={() => setIsMenuOpen(false)}>Leaderboard</a>
                    <a class="mobile-link" href='/showcase' onClick={() => setIsMenuOpen(false)}>Project Showcase</a>
                    <a class="mobile-link" onClick={() => setIsMenuOpen(false)}>About Us</a>
                    <div class="join-button mobile-join">
                        <Users />
                        <button>Join Community</button>
                    </div>
                </div>
            </div>
        </div>
    );
}