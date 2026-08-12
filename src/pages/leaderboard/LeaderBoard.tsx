import { Crown, Gem, ShieldCheck, Gift } from 'kivex-levelo';
import './leaderboard.css';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/Footer';

import { setActiveTab } from '../../components/header/header';
import { head, mount } from 'levelojs';

export function LeaderBoard() {
  head({
    title: "Leader Board — NGCBD"
  })

  mount(() => {
    setActiveTab('leaderboard');
  })
  return (
    <div>
      <Header />
      <div className="lb-container">
      
      {/* Hero Header */}
      <div className="lb-header">
        <div className="lb-badge">
          <Gem size={14} className="lb-badge-icon" />
          <span>Season 01 • Cycle In Progress</span>
        </div>
        <h1 className="lb-title">Community Leaderboard</h1>
        <p className="lb-subtitle">
          Real-time engineering standings, evaluated marks, and verified badges will be officially published at the conclusion of Cycle 01.
        </p>
      </div>

      {/* Main Empty State Box */}
      <div className="lb-empty-card">
        <div className="lb-icon-wrapper">
          <Crown size={48} className="lb-trophy-icon" />
        </div>
        
        <h2 className="lb-empty-title">Cycle 01 Leaderboard Opening Soon</h2>
        <p className="lb-empty-desc">
          Evaluators and peer reviewers are currently auditing active project submissions based on our 250-mark standard. Final scores and leaderboard rankings will be broadcasted live here!
        </p>

        {/* Feature Highlights Grid */}
        <div className="lb-highlights">
          <div className="lb-highlight-item">
            <ShieldCheck size={20} className="lb-hl-icon" />
            <div>
              <h4>250-Mark Base Evaluation</h4>
              <p>200 Project Marks + 50 Activity Marks</p>
            </div>
          </div>
          
          <div className="lb-highlight-item">
            <Gift size={20} className="lb-hl-icon" />
            <div>
              <h4>Uncapped Verified Badges</h4>
              <p>Awarded to every developer meeting the rubric threshold</p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="lb-actions">
          <a href="/rules#evaluation-overview" className="lb-btn-primary">
            Read Evaluation Rules
          </a>
          <a href="/docs#bi-monthly-rewards" className="lb-btn-secondary">
            View Swag & Rewards
          </a>
        </div>
      </div>
      
    </div>
    <Footer />
    </div>
    
  );
};