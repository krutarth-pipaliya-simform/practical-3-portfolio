import type { RefObject } from "react";
import { AboutSection } from "./About/AboutSection";
import { ContactSection } from "./Contact/ContactSection";
import { TechnologiesSection } from "./Technologies/TechnologiesSection";
import { ProjectsSection } from "./Projects/ProjectsSection";

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
        <main>
            <AboutSection ref={aboutSectionRef} />
            <ProjectsSection ref={projectSectionRef} />
            <TechnologiesSection ref={technologiesSectionRef} />
            <ContactSection ref={contactSectionRef} />
        </main>
    );
};
