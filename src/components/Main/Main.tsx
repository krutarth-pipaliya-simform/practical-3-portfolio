import type { RefObject } from "react";

import { AboutSection } from "./About/AboutSection";
import { ContactSection } from "./Contact/ContactSection";
import { TechnologiesSection } from "./Technologies/TechnologiesSection";
import { ProjectsSection } from "./Projects/ProjectsSection";

interface MainProps {
    refs: {
        aboutSectionRef: RefObject<HTMLElement | null>;
        projectSectionRef: RefObject<HTMLElement | null>;
        technologiesSectionRef: RefObject<HTMLElement | null>;
        contactSectionRef: RefObject<HTMLElement | null>;
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
