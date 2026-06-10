import { useRef } from "react";

import { Header } from "./Header/Header";
import { Main } from "./Main/Main";

export const WrapperComponent = () => {
    const refs = useSectionRefs();
    return (
        <div className="h-100vh flex flex-col bg-black">
            <Header refs={refs} />
            <Main refs={refs} />
        </div>
    );
};

const useSectionRefs = () => ({
    aboutSectionRef: useRef<HTMLElement | null>(null),
    projectSectionRef: useRef<HTMLElement | null>(null),
    technologiesSectionRef: useRef<HTMLElement | null>(null),
    contactSectionRef: useRef<HTMLElement | null>(null),
});
