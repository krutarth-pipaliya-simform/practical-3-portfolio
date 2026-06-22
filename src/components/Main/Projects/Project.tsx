import type { ProjectData } from "./types";

interface ProjectPropsType {
    project: ProjectData;
}

export const Project = ({
    project: { title, description, repoLink, liveLink },
}: ProjectPropsType) => {
    return (
        <li className="flex max-w-xl flex-col justify-between gap-4 rounded-2xl border border-white/20 bg-white/5 p-6 backdrop-blur-xl shadow-[0_8px_32px_rgba(255,255,255,0.08)] transition-all duration-300 hover:-translate-y-2 hover:border-white/40 hover:bg-white/10 hover:shadow-[0_12px_40px_rgba(255,255,255,0.15)]">
            <div>
                <h3 className="mb-3 text-2xl font-semibold text-white">{title}</h3>

                <p className="leading-relaxed text-white/80">{description}</p>
            </div>

            <div className="flex gap-3">
                <a
                    href={repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur-md transition-all duration-300 hover:bg-white/20"
                >
                    Repository
                </a>

                {liveLink && (
                    <a
                        href={liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-lg border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur-md transition-all duration-300 hover:bg-white/20"
                    >
                        Live Demo
                    </a>
                )}
            </div>
        </li>
    );
};
