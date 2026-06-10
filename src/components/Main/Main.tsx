import type { RefObject } from "react";
import { AboutSection } from "./AboutSection";
import { ContactSection } from "./ContactSection";
import { TechnologiesSection } from "./TechnologiesSection";
import { ProjectsSection } from "./ProjectsSection";

interface MainProps {
    refs: {
        aboutSectionRef: RefObject<HTMLElement>;
        projectSectionRef: RefObject<HTMLElement>;
        technologiesSectionRef: RefObject<HTMLElement>;
        contactSectionRef: RefObject<HTMLElement>;
    };
}

export const Main = ({
    refs: { aboutSectionRef, projectSectionRef, technologiesSectionRef, contactSectionRef },
}: MainProps) => {
    return (
        <main className="pt-20">
            <AboutSection ref={aboutSectionRef} />
            <ProjectsSection ref={projectSectionRef} />
            <TechnologiesSection ref={technologiesSectionRef} />
            <ContactSection ref={contactSectionRef} />
        </main>
    );
};
