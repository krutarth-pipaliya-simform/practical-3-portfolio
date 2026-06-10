import type { RefObject } from "react";

interface HeaderProps {
    refs: {
        aboutSectionRef: RefObject<HTMLElement>;
        projectSectionRef: RefObject<HTMLElement>;
        technologiesSectionRef: RefObject<HTMLElement>;
        contactSectionRef: RefObject<HTMLElement>;
    };
}

export const Header = ({
    refs: { aboutSectionRef, projectSectionRef, technologiesSectionRef, contactSectionRef },
}: HeaderProps) => {
    return (
        <header className="mt-2 self-center w-[60vw] flex justify-center rounded-2xl border-4 hover:shadow-2xl">
            <nav className="flex gap-8 font-medium text-3xl justify-center">
                <a
                    onClick={(e) => {
                        e.preventDefault();
                        aboutSectionRef.current?.scrollIntoView({
                            behavior: "smooth",
                        });
                    }}
                    href="/#about"
                >
                    About
                </a>
                <a
                    onClick={(e) => {
                        e.preventDefault();
                        projectSectionRef.current?.scrollIntoView({
                            behavior: "smooth",
                        });
                    }}
                    href="/#projects"
                >
                    Projects
                </a>
                <a
                    onClick={(e) => {
                        e.preventDefault();
                        technologiesSectionRef.current?.scrollIntoView({
                            behavior: "smooth",
                        });
                    }}
                    href="/#technologies"
                >
                    Technologies
                </a>
                <a
                    onClick={(e) => {
                        e.preventDefault();
                        contactSectionRef.current?.scrollIntoView({
                            behavior: "smooth",
                        });
                    }}
                    href="/#contact"
                >
                    Contact
                </a>
            </nav>
        </header>
    );
};
