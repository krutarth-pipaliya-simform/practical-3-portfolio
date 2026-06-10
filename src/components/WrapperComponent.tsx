import { useRef } from "react";
import { Header } from "./Header/Header";

export const WrapperComponent = () => {
    const refs = useSectionRefs();
    return (
        <div className="h-100vh flex flex-col">
            <Header refs={refs} />
        </div>
    );
};

const useSectionRefs = () => ({
    aboutSectionRef: useRef<HTMLElement>(null),
    projectSectionRef: useRef<HTMLElement>(null),
    technologiesSectionRef: useRef<HTMLElement>(null),
    contactSectionRef: useRef<HTMLElement>(null),
});
