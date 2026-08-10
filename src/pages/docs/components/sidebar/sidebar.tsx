import { state } from 'levelojs';
import './sidebar.css';
import { Columns2, LayoutPanelLeft } from 'kivex-levelo';

interface SubItem {
  id: string;
  label: string;
}

interface SidebarGroup {
  category: string;
  items: SubItem[];
}

const sidebarData: SidebarGroup[] = [
  {
        category: "Getting Started",
        items: [
            { id: "intro", label: "Introduction & Ecosystem" },
            { id: "motion-mind", label: "1. What is Motion Mind?" },
            { id: "ngcbd", label: "2. What is NGCBD?" },
            { id: "why-join", label: "3. Why Join NGCBD?" },
            { id: "zero-pressure", label: "4. Zero Pressure Philosophy" }
        ]
    },
    {
        category: "Motion Mind DevTools",
        items: [
            { id: "devtools-overview", label: "DevTools Overview" },
            { id: "overview", label: "1. Overview of DevTools" },
            { id: "levelojs", label: "2. LeveloJS Framework" },
            { id: "kivex", label: "3. Kivex Icons (300+)" },
            { id: "score-bonus", label: "4. 5% Score Bonus" }
        ]
    },
    {
        category: "Submissions & Code Reviews",
        items: [
            { id: "submissions-reviews-overview", label: "Submissions Overview" },
            { id: "review-process", label: "1. How Project Review Works" },
            { id: "interview-value", label: "2. Value of Code Review" },
            { id: "why-showcase", label: "3. Why Showcase Here" },
            { id: "how-to-submit", label: "4. How to Submit Project" },
            { id: "showcase-gallery", label: "5. Project Showcase Gallery" }
        ]
    },
    {
        category: "Rewards, Badges & Recognition",
        items: [
            { id: "rewards-overview", label: "Rewards Overview" },
            { id: "bi-monthly-rewards", label: "1. Bi-Monthly Rewards" },
            { id: "verified-badges", label: "2. Verified Badges" }
        ]
    },
    {
        category: "Community & Open Source",
        items: [
            { id: "community-overview", label: "Community Overview" },
            { id: "active-engagement", label: "1. Why Active Engagement Matters" },
            { id: "open-source-guide", label: "2. Open Source Contribution Guide" }
        ]
    },
    {
        category: "Code Integrity & Fair Play",
        items: [
            { id: "integrity-overview", label: "Integrity Overview" },
            { id: "understanding-integrity", label: "1. Understanding Code Integrity" },
            { id: "plagiarism-vs-inspiration", label: "2. Plagiarism vs Inspiration" },
            { id: "anti-spamming", label: "3. Anti-Spamming Guidelines" },
            { id: "detection-verification", label: "4. Detection & Verification" },
            { id: "violations-transparency", label: "5. Consequences of Violation" }
        ]
    }
];

export function Sidebar() {
  const [isOpen, setIsOpen] = state(false);

  const closeSidebar = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button 
        className="mobile-docs-toggle" 
        onClick={() => setIsOpen(!isOpen())}
      >
        <span>On This Page Navigation</span>
        <span><Columns2 size={22} /></span>
      </button>

      {isOpen() && (
        <div 
          className="sidebar-backdrop" 
          onClick={closeSidebar} 
        />
      )}

      <aside className={`docs-sidebar ${isOpen() ? 'open' : ''}`}>
        {sidebarData.map((group, groupIdx) => (
          <div key={groupIdx} className="sidebar-group">
            <span className="sidebar-category">{group.category}</span>
            <ul className="sidebar-list">
              {group.items.map((item) => (
                <li key={item.id} className="sidebar-item">
                  <a 
                    href={`#${item.id}`} 
                    className="sidebar-link"
                    onClick={closeSidebar}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </aside>
    </div>
  );
}