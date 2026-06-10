import { useRef } from "react";

import { Header } from "./Header/Header";
import { Main } from "./Main/Main";

export const WrapperComponent = () => {
    const refs = useSectionRefs();
    return (
        <div className="h-100vh flex flex-col">
            <Header refs={refs} />
            <Main />
        </div>
    );
};

const useSectionRefs = () => ({
    aboutSectionRef: useRef<HTMLElement>(null),
    projectSectionRef: useRef<HTMLElement>(null),
    technologiesSectionRef: useRef<HTMLElement>(null),
    contactSectionRef: useRef<HTMLElement>(null),
});
