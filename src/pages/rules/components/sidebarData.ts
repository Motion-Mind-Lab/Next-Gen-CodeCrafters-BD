//
interface SubItem {
  id: string;
  label: string;
}

interface SidebarGroup {
  category: string;
  items: SubItem[];
}

export const sidebarData: SidebarGroup[] = [
    {
        category: "Rules & Evaluation",
        items: [
            { id: "submission-overview", label: "Submission Guidelines" },
            { id: "league-structure", label: "1. Bi-Monthly Showcase Model" },
            { id: "repository-requirements", label: "2. Repository Requirements" },
            { id: "submission-lifecycle", label: "3. Submission Lifecycle" }
        ]
    },
    {
        category: "Rules & Evaluation",
        items: [
            { id: "evaluation-overview", label: "Evaluation Overview" },
            { id: "scoring-breakdown", label: "1. 250-Mark Breakdown" },
            { id: "project-rubric", label: "2. 100-Mark Project Rubric" },
            { id: "ecosystem-bonus-rules", label: "3. Ecosystem Bonus Guidelines" }
        ]
    },
    {
        category: "Rules & Evaluation",
        items: [
            { id: "community-rules-overview", label: "Community Rules Overview" },
            { id: "github-guidelines", label: "1. GitHub Issues & Review" },
            { id: "discussions-vs-spam", label: "2. Discussions vs Spamming" }
        ]
    },
    {
        category: "Rules & Evaluation",
        items: [
            { id: "fair-play-overview", label: "Fair Play Overview" },
            { id: "badge-thresholds", label: "1. Verified Badge Thresholds" },
            { id: "resubmission-rules", label: "2. Eligibility & Re-Submission" },
            { id: "disqualification-policy", label: "3. Disqualification & Anti-Fraud" }
        ]
    }
];