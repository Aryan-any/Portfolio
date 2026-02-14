import { useEffect, useState } from "react";
import "./styles/GitHubActivity.css";
import { FaGithub, FaCodeBranch, FaClock } from "react-icons/fa6";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface GitHubEvent {
    id: string;
    type: string;
    actor: {
        login: string;
    };
    repo: {
        id: number;
        name: string;
        url: string;
    };
    payload: {
        commits?: {
            message: string;
            sha: string;
        }[];
        ref?: string;
    };
    created_at: string;
}

interface ActivityItem {
    id: string;
    repoName: string;
    repoUrl: string;
    message: string;
    time: string;
    date: Date;
}

const GitHubActivity = () => {
    const [activities, setActivities] = useState<ActivityItem[]>([]);
    const [loading, setLoading] = useState(true);

    const timeAgo = (dateIdx: Date) => {
        const seconds = Math.floor((new Date().getTime() - dateIdx.getTime()) / 1000);

        let interval = seconds / 31536000;
        if (interval > 1) return Math.floor(interval) + "y ago";
        interval = seconds / 2592000;
        if (interval > 1) return Math.floor(interval) + "m ago";
        interval = seconds / 86400;
        if (interval > 1) return Math.floor(interval) + "d ago";
        interval = seconds / 3600;
        if (interval > 1) return Math.floor(interval) + "h ago";
        interval = seconds / 60;
        if (interval > 1) return Math.floor(interval) + " min ago";
        return Math.floor(seconds) + " sec ago";
    };

    useEffect(() => {
        const fetchGitHubActivity = async () => {
            try {
                // Fetch public events for the user
                const response = await fetch("https://api.github.com/users/Aryan-any/events/public?per_page=15");
                const data: GitHubEvent[] = await response.json();

                // Filter for PushEvents
                const pushEvents = data.filter(event => event.type === "PushEvent");

                // Process and deduplicate by repo
                const processedActivities: ActivityItem[] = [];
                const seenRepos = new Set();

                for (const event of pushEvents) {
                    // Check if we already have this repo to avoid duplicates (show latest only)
                    if (seenRepos.has(event.repo.name)) continue;

                    seenRepos.add(event.repo.name);

                    if (event.payload.commits && event.payload.commits.length > 0) {
                        processedActivities.push({
                            id: event.id,
                            repoName: event.repo.name.replace("Aryan-any/", ""), // Remove username prefix
                            repoUrl: `https://github.com/${event.repo.name}`,
                            message: event.payload.commits[0].message,
                            time: timeAgo(new Date(event.created_at)),
                            date: new Date(event.created_at)
                        });
                    }

                    if (processedActivities.length >= 3) break; // Limit to 3 items
                }

                setActivities(processedActivities);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching GitHub activity:", error);
                setLoading(false);
            }
        };

        fetchGitHubActivity();
    }, []);

    useEffect(() => {
        if (!loading && activities.length > 0) {
            gsap.fromTo(".github-card",
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: ".github-activity-section",
                        start: "top 80%",
                    }
                }
            );
        }
    }, [loading, activities]);

    if (loading || activities.length === 0) return null; // Hide section if no data or loading

    return (
        <div className="github-activity-section section-container">
            <div className="github-activity-container">
                <div className="github-header">
                    <h3>Latest Code Updates</h3>
                    <p>What I'm currently working on (Live from GitHub)</p>
                </div>

                <div className="github-grid">
                    {activities.map((item) => (
                        <a
                            href={item.repoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="github-card"
                            key={item.id}
                        >
                            <div className="card-top">
                                <span className="repo-name">
                                    <FaCodeBranch /> {item.repoName}
                                </span>
                                <span className="card-time">
                                    <FaClock style={{ marginRight: '4px' }} /> {item.time}
                                </span>
                            </div>
                            <p className="commit-message">"{item.message}"</p>
                            <div className="card-footer">
                                <span className="repo-lang">Push Event</span>
                                <span className="view-repo"><FaGithub /> View Repo</span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default GitHubActivity;
