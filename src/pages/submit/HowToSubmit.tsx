import './howToSubmit.css';
import { MessageSquare, CircleCheck, Send, Users, ExternalLink, ArrowLeft } from 'kivex-levelo';

export function HowToSubmit() {

    const adminWhaUrl = "https://wa.me/8801804187223?text=Hi!%20I%20want%20to%20know%20if%20project%20submission%20is%20currently%20open.";
    const groupWhaUrl = "https://wa.me/8801804187223?text=Hi%20NGCBD%20Team!%20I%20want%20to%20get%20an%20invite%20for%20the%20developer%20community.";

    return (
        <div class="submit-container">
            <div class="submit-glow-backdrop"></div>

            {/* Header */}
            <div class="submit-hero">
                <div onClick={() => window.history.back()} class="sub-hero">
                    <ArrowLeft />
                    <p>Back</p>
                </div>
                
                <h1 class="submit-title">How to Submit Your Project</h1>
                <p class="submit-subtitle">
                    Follow these simple WhatsApp-based steps to communicate with the community leads and get your project reviewed.
                </p>
            </div>

            {/* Submission Steps */}
            <div class="steps-wrapper">
                {/* Step 1 */}
                <div class="step-card">
                    <div class="step-badge">Step 1</div>
                    <div class="step-content">
                        <div class="step-header">
                            <MessageSquare class="step-icon" size={24} />
                            <h3>Message the Community Leader</h3>
                        </div>
                        <p>
                            First, send a WhatsApp message to the community leader to confirm whether the project submission window is currently open for the active league/cycle.
                        </p>
                    </div>
                </div>

                {/* Step 2 */}
                <div class="step-card">
                    <div class="step-badge">Step 2</div>
                    <div class="step-content">
                        <div class="step-header">
                            <Send class="step-icon" size={24} />
                            <h3>Submit via WhatsApp Format</h3>
                        </div>
                        <p>
                            Once confirmed, format your project details (Project Name, GitHub Repo Link, Demo Link, and Short Summary) and send it directly in the WhatsApp chat.
                        </p>
                    </div>
                </div>

                {/* Step 3 */}
                <div class="step-card">
                    <div class="step-badge">Step 3</div>
                    <div class="step-content">
                        <div class="step-header">
                            <CircleCheck class="step-icon" size={24} />
                            <h3>Notify About GitHub Activity</h3>
                        </div>
                        <p>
                            If you have submitted a pull request or created an issue in any GitHub repository, drop us a message on WhatsApp with the link so we don't miss your contribution.
                        </p>
                    </div>
                </div>

                {/* Step 4 */}
                <div class="step-card highlight-step">
                    <div class="step-badge">Step 4</div>
                    <div class="step-content">
                        <div class="step-header">
                            <Users class="step-icon" size={24} />
                            <h3>Stay Updated in the WhatsApp Community</h3>
                        </div>
                        <p>
                            To get fast updates regarding leaderboard standings, review status, and community announcements, make sure to join our official WhatsApp group.
                        </p>
                    </div>
                </div>
            </div>

            {/* Call to Action Buttons */}
            <div class="action-grid">
                <a href={adminWhaUrl} target="_blank" rel="noopener noreferrer" class="cta-btn primary-btn">
                    <span>Contact Leader / Submit</span>
                    <ExternalLink size={18} />
                </a>

                <a href={groupWhaUrl} target="_blank" rel="noopener noreferrer" class="cta-btn secondary-btn">
                    <span>Join WhatsApp Community</span>
                    <Users size={18} />
                </a>
            </div>
        </div>
    );
}