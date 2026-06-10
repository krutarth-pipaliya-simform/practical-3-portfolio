import type { RefProps } from "../types";
import { technologies } from "./technologiesData";
import { TechnologyCard } from "./TochnologyCard";

export const TechnologiesSection = ({ ref }: RefProps) => {
    return (
        <section className="px-4" ref={ref}>
            <h2 className="pt-20 mb-8 text-5xl font-bold text-white">Technologies</h2>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {technologies.map((technology) => (
                    <TechnologyCard
                        key={technology.name}
                        name={technology.name}
                        Icon={technology.icon}
                    />
                ))}
            </div>
        </section>
    );
};
