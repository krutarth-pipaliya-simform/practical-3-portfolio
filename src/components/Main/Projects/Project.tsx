import type { ProjectData } from "./types";

interface ProjectPropsType {
    project: ProjectData;
}
export const Project = ({
    project: { title, description, repoLink, liveLink },
}: ProjectPropsType) => {
    return (
        <li className="flex flex-col gap-4 justify-between max-w-xl p-4 rounded-xl bg-white/20 backdrop-blur-xs border border-white/30 shadow-xl transition-all duration-300 hover:bg-white/35 hover:shadow-2xl">
            <div className="text-2xl font-medium underline">{title}</div>
            <p>{description}</p>
            <div className="flex justify-between">
                <a className="p-1 border rounded-lg bg-black hover:bg-white/30" href={repoLink}>
                    Repository Link
                </a>
                {liveLink && (
                    <a className="p-1 border rounded-lg bg-black hover:bg-white/30" href={liveLink}>
                        Live Link
                    </a>
                )}
            </div>
        </li>
    );
};
