import { state } from 'levelojs';
import './sidebar.css';
import { Columns2, LayoutPanelLeft } from 'kivex-levelo';
import { sidebarData } from '../sidebarData';

export function Sidebar() {
  const [isOpen, setIsOpen] = state(false);

  const closeSidebar = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button 
        className="mobile-rules-toggle" 
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

      <aside className={`rules-sidebar ${isOpen() ? 'open' : ''}`}>
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