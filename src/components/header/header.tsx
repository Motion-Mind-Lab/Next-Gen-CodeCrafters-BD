import './header.css';
import Logo from '/logoT.svg';
import { Users, Menu, X, UserPlus } from 'kivex-levelo';
import { state } from 'levelojs';

export type ActiveTab = 'home' | 'docs' | 'rules' | 'leaderboard' | 'showcase' | 'about';

export const [activeTab, setActiveTab] = state<ActiveTab>("home");

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = state(false);
    const whaUrl = 'https://wa.me/880801804187223?text=Hi%20NGCBD%20Team!%20I%20want%20to%20get%20an%20invite%20for%20the%20developer%20community.%20Here%20is%20my%20GitHub/Portfolio%20link:%20';

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen());
    };

    return (
        <div class="bg">
            <div class="header">
                <div class="logo-brand" style={{ cursor: 'pointer' }} onClick={() => {window.location.href = "/";}}>
                    <img class="logo" src={Logo} alt="Logo" />
                    <div class="logo-text">
                        <h2>NGCBD</h2>
                        <p>Next-Gen CodeCrafters BD</p>
                    </div>
                </div>

                <div class="links">
                    <a class={`header-link ${activeTab() === 'home' ? 'active' : ''}`} href='/'>Home</a>
                    <a class={`header-link ${activeTab() === 'docs' ? 'active' : ''}`} href='/docs'>Docs</a>
                    <a class={`header-link ${activeTab() === 'rules' ? 'active' : ''}`} href='/rules'>Rules</a>
                    <a class={`header-link ${activeTab() === 'leaderboard' ? 'active' : ''}`} href='/leaderboard'>Leaderboard</a>
                    <a class={`header-link ${activeTab() === 'showcase' ? 'active' : ''}`} href='/showcase'>Project Showcase</a>
                    <a class={`header-link ${activeTab() === 'about' ? 'active' : ''}`} href='/about'>About Us</a>
                </div>

                <div class="right-action">
                    <a class="join-button desktop-join" href={whaUrl} target='_blank' rel="noopener noreferrer">
                        <UserPlus />
                        <button>Get Invite</button>
                    </a>

                    <button class="mobile-menu-btn" onClick={toggleMenu}>
                        {isMenuOpen() ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            <div class={`mobile-menu ${isMenuOpen() ? 'open' : ''}`}>
                <div class="mobile-links">
                    <a class={`mobile-link ${activeTab() === 'home' ? 'active' : ''}`} href='/' onClick={() => setIsMenuOpen(false)}>Home</a>
                    <a class={`mobile-link ${activeTab() === 'docs' ? 'active' : ''}`} href='/docs' onClick={() => setIsMenuOpen(false)}>Docs</a>
                    <a class={`mobile-link ${activeTab() === 'rules' ? 'active' : ''}`} href='/rules' onClick={() => setIsMenuOpen(false)}>Rules</a>
                    <a class={`mobile-link ${activeTab() === 'leaderboard' ? 'active' : ''}`} href='/leaderboard' onClick={() => setIsMenuOpen(false)}>Leaderboard</a>
                    <a class={`mobile-link ${activeTab() === 'showcase' ? 'active' : ''}`} href='/showcase' onClick={() => setIsMenuOpen(false)}>Project Showcase</a>
                    <a class={`mobile-link ${activeTab() === 'about' ? 'active' : ''}`} href='/about' onClick={() => setIsMenuOpen(false)}>About Us</a>
                    <a class="join-button mobile-join" href={whaUrl} target='_blank' rel="noopener noreferrer">
                        <UserPlus />
                        <button>Get Invite</button>
                    </a>
                </div>
            </div>
        </div>
    );
}