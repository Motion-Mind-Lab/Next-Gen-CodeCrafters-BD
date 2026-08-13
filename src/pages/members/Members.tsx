import { head, mount, state } from "levelojs";
import { Header } from "../../components/header/header";
import { setActiveTab } from "../../components/header/header";
import './members.css';
import { Users, Search, ChevronDown, ListFilter, UserPlus, Globe, Code, BarChart, ClockArrowLeft } from "kivex-levelo";
import githubIcon from '../../components/svg-icons/githubDark.svg';
import { Footer } from "../../components/footer/Footer";

interface MemberData {
    id: string;
    fullName: string;
    github: string;
    avatar: string;
    portfolio: string;
    techStack: string;
    experienceLevel: string;
    joinedAt: string;
}

export function Members() {
    head({
        title: 'Community Members — NGCBD'
    });

    const [membersList, setMembersList] = state<MemberData[]>([]);
    const [searchQuery, setSearchQuery] = state('');
    const [loading, setLoading] = state(true);

    mount(() => {
        setActiveTab('members');
        
        fetch('https://gist.githubusercontent.com/MotionMind2007/7830beaa4a325ec0e6974765d3f73968/raw/members.json?t=' + Date.now())
            .then(res => res.json())
            .then(data => {
                setMembersList(data);
                setLoading(false);
            })
            .catch(() => {
                setLoading(false);
            });
    });

    const filteredMembers = () => {
        const query = searchQuery().toLowerCase().trim();
        if (!query) return membersList();

        return membersList().filter(member => {
            const nameMatch = member.fullName?.toLowerCase().includes(query);
            const stackMatch = member.techStack?.toLowerCase().includes(query);
            return nameMatch || stackMatch;
        });
    };

    return (
        <div class="members">
            <Header />
            <div class="members-container">
                <div class="head">
                    <span class="badge"><Users size={15} style={{marginRight: '5px'}} /> COMMUNITY DIRECTORY</span>
                    <h2>Meet the <strong style={{ color: '#422efa' }}>NGCBD</strong> Members</h2>
                    <p>Explore developers from our community and connect with amazing people building the future.</p>
                </div>

                <div class="filter-bar">
                    <div class="search-input">
                        <Search size={18} />
                        <input 
                            type="text" 
                            placeholder="Search members by name or tech stack..." 
                            value={searchQuery()}
                            onInput={(e: any) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </div>

                {loading() ? (
                    <div class="loading-state">Loading members...</div>
                ) : filteredMembers().length === 0 ? (
                    <div class="loading-state">No members found matching "{searchQuery()}"</div>
                ) : (
                    <div class="member-grid-2cols">
                        {filteredMembers().map((member) => {
                            const username = member.github ? member.github.split('/').pop() : '';
                            const avatarUrl = member.avatar? member.avatar : '';

                            return (
                                <div class="member-card-new" key={member.id || member.github}>
                                    <div class="card-header-new">
                                        <div class="avatar-info">
                                            <img src={avatarUrl} alt={member.fullName} class="member-avatar-new" />
                                            <div>
                                                <h3>{member.fullName}</h3>
                                                <span class="exp-badge">{member.experienceLevel}</span>
                                            </div>
                                        </div>
                                        <span class="status-verified">Verified</span>
                                    </div>
                                    <div class="card-body-new">
                                        <div class="info-row">
                                            <Code width={16} height={16} />
                                            <span class="label">Tech Stack</span>
                                            <span class="value">{member.techStack ? member.techStack : '-'}</span>
                                        </div>
                                        <div class="info-row">
                                            <BarChart width={16} height={16} />
                                            <span class="label">Experience Level</span>
                                            <span class="value">{member.experienceLevel ? member.experienceLevel: '-'}</span>
                                        </div>
                                        <div class="info-row">
                                            <ClockArrowLeft width={16} height={16} />
                                            <span class="label">Joined At</span>
                                            <span class="value">{member.joinedAt}</span>
                                        </div>
                                    </div>
                                    <div class="card-footer-new">
                                        <div class="social-links-new">
                                            {member.github && member.github !== '-' && (
                                                <a href={member.github} target="_blank">
                                                    <img src={githubIcon} width={18} height={18} />
                                                </a>
                                            )}
                                            {member.portfolio && member.portfolio !== '-' && (
                                                <a href={member.portfolio} target="_blank">
                                                    <Globe width={18} height={18} />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
}