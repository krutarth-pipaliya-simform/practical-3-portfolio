import type { IconType } from "react-icons";

interface TechnologyCardProps {
    name: string;
    Icon: IconType;
}

export function TechnologyCard({ name, Icon }: TechnologyCardProps) {
    return (
        <div className="group flex flex-col items-center gap-4 rounded-2xl border border-white/20 bg-white/5 p-6 backdrop-blur-xl shadow-[0_8px_32px_rgba(255,255,255,0.08)] transition-all duration-300 hover:-translate-y-2 hover:border-white/40 hover:bg-white/10 hover:shadow-[0_12px_40px_rgba(255,255,255,0.15)]">
            <div className="flex h-16 w-16 items-center justify-center rounded-xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-300 group-hover:scale-110 group-hover:bg-white/15 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                <Icon className="text-4xl text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
            </div>

            <span className="text-sm font-medium tracking-wide text-white">{name}</span>
        </div>
    );
}
