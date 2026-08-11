import { effect } from 'levelojs';
import { Sparkles, Code, Gift, Zap, Globe } from 'kivex-levelo';
import { Header, setActiveTab } from '../../components/header/header';
import { Footer } from '../../components/footer/Footer';
import githubDarkIcon from '../../components/svg-icons/githubDark.svg';
import './about.css';

export function About() {
  effect(() => {
    setActiveTab('about');
  });

  return (
    <div>
      <Header />
      <div class="about-container">
        {/* Hero Section */}
        <div class="about-hero">
          <h1 class="about-title">Why We Built NGCBD</h1>
          <p class="about-subtitle">
            Next-Gen CodeCrafters BD is an ecosystem initiative born out of a real desire to connect Bangladeshi developers, inspire open-source craftsmanship, and build real-world engineering impact together.
          </p>
        </div>

        {/* The Origin & Vision */}
        <div class="about-card story-card">
          <div class="story-header">
            <Sparkles size={24} class="accent-icon" />
            <h2>The Origin & Vision</h2>
          </div>
          <div class="story-content">
            <p>
              Building high-quality engineering tools requires immense passion. As the creator and CEO of <strong>Motion Mind</strong>, I developed <strong>Levelo.js</strong> (a lightweight custom frontend framework) and the <strong>Kivex Ecosystem</strong> featuring 8 developer packages and over 300+ custom icons.
            </p>
            <p>
              Despite creating production-ready tools, I faced a common problem: <em>the lack of a strong engineering community to share, review, and utilize these tools.</em> That was the realization moment—how many brilliant developers across Bangladesh are facing the exact same roadblock? How many incredible projects die in isolation simply because there was no technical audience to appreciate or critique them?
            </p>
            <p>
              <strong>NGCBD</strong> was born to bridge this exact gap. We want every Bangladeshi programmer to find their peer circle, gain inspiration, and build software that matters.
            </p>
          </div>
        </div>

        {/* Founding Leadership */}
        <div class="about-card cofounders-card">
          <h3 class="section-heading">Founding Leadership</h3>
          <p class="section-sub">NGCBD is driven by a shared vision and equal partnership.</p>
          
          <div class="founders-grid">
            <div class="founder-card">
              <div class="founder-avatar">
                <Code size={32} />
              </div>
              <div class="founder-info">
                <span class="founder-tag">Motion Mind Brand</span>
                <h4 class="founder-name">MD Saiful Alom Siam</h4>
                <p class="founder-role">CEO of Motion Mind & Founder of NGCBD</p>
              </div>
            </div>

            <div class="founder-card">
              <div class="founder-avatar">
                <Zap size={32} />
              </div>
              <div class="founder-info">
                <span class="founder-tag">Co-Founding Partner</span>
                <h4 class="founder-name">MD Farhan Islam Taeeb</h4>
                <p class="founder-role">Co-Founder & Core Architect, NGCBD</p>
              </div>
            </div>
          </div>
        </div>

        {/* Developer Benefits */}
        <div class="about-card benefits-section">
          <h3 class="section-heading">What You Gain as a Developer</h3>
          <p class="section-sub">Joining NGCBD offers real-world engineering advantages for your career and portfolio.</p>

          <div class="benefits-grid">
            <div class="benefit-item">
              <Gift class="b-icon" size={22} />
              <div>
                <h4>Bi-Monthly Rewards & Swag</h4>
                <p>Uncapped incentives awarded every cycle based on our transparent 250-mark evaluation rubric.</p>
              </div>
            </div>

            <div class="benefit-item">
              <Code class="b-icon" size={22} />
              <div>
                <h4>Professional Code Reviews</h4>
                <p>Get detailed architectural comments and peer feedback that you can showcase directly on your portfolio.</p>
              </div>
            </div>

            <div class="benefit-item">
              <img src={githubDarkIcon} class="b-icon githubIcon" size={22} />
              <div>
                <h4>Open Source Mindset</h4>
                <p>Develop habits around diving into raw codebases, debugging open-source issues, and collaborating like senior devs.</p>
              </div>
            </div>

            <div class="benefit-item">
              <Globe class="b-icon" size={22} />
              <div>
                <h4>Free Project Exposure</h4>
                <p>We feature top community projects on our showcase page, bringing real user traffic and visibility to your work for free.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Zero-Pressure Philosophy */}
        <div class="about-card philosophy-card">
          <div class="philosophy-content">
            <h3>The Zero-Pressure Philosophy</h3>
            <p>
              We believe hackathons shouldn't burn you out. Our 2-month cycle model allows any Bangladeshi programmer—whether a student or a full-time professional—to comfortably participate alongside their daily routine without stress.
            </p>
            <p class="philosophy-goal">
              <strong>Our Ultimate Goal:</strong> Unite Bangladeshi programmers, eliminate the fear of entering software engineering for the next generation, and collectively elevate Bangladesh's footprint in global engineering!
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}