import { Gift, Sparkles, ExternalLink, Code, LayoutGrid } from 'kivex-levelo';
import './project-showcase.css';

export function ProjectShowcase() {
  return (
    <div className="ps-container">
      {/* Hero Header */}
      <div className="ps-header">
        <div className="ps-badge">
          <Sparkles size={14} className="ps-badge-icon" />
          <span>Showcase • Community Creations</span>
        </div>
        <h1 className="ps-title">Project Showcase</h1>
        <p className="ps-subtitle">
          Explore real-world applications, developer tools, and innovative AI solutions crafted by Next-Gen CodeCrafters BD members.
        </p>
      </div>

      {/* Main Empty State Box */}
      <div className="ps-empty-card">
        <div className="ps-icon-wrapper">
          <Gift size={48} className="ps-card-icon" />
        </div>
        
        <h2 className="ps-empty-title">Showcase Submissions Opening Soon</h2>
        <p className="ps-empty-desc">
          Projects submitted for Cycle 01 are currently undergoing evaluation and code review. Verified projects featuring high architecture standards will be showcased live here!
        </p>

        {/* Feature Highlights Grid */}
        <div className="ps-highlights">
          <div className="ps-highlight-item">
            <Code size={20} className="ps-hl-icon" />
            <div>
              <h4>Open Source Focus</h4>
              <p>Explore production-grade code repositories, system design, and documentation.</p>
            </div>
          </div>
          
          <div className="ps-highlight-item">
            <LayoutGrid size={20} className="ps-hl-icon" />
            <div>
              <h4>Peer Audited</h4>
              <p>Every featured project is evaluated under our 100-mark code rubric.</p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="ps-actions">
          <a href="/rules#rubric-table" className="ps-btn-primary">
            View Evaluation Rubric
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="ps-btn-secondary">
            <ExternalLink size={16} />
            Submit Your Project
          </a>
        </div>
      </div>
    </div>
  );
}