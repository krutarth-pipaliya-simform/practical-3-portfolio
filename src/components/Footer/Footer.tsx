import { FaGithub, FaLinkedin } from "react-icons/fa";

import { SiCodeforces } from "react-icons/si";

import { MdEmail, MdWork } from "react-icons/md";

export const Footer = () => {
    return (
        <footer className="px-6 py-8 text-white">
            <div className="mx-auto flex max-w-5xl flex-col items-center gap-6">
                <div className="text-center">
                    <h3 className="text-lg font-semibold">Krutarth Pipaliya</h3>

                    <p className="mt-1 text-sm text-white/60">
                        Computer Engineering Graduate • Software Engineer Intern • Competitive
                        Programmer
                    </p>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-5">
                    <a
                        href="https://github.com/krutarth90"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Personal GitHub"
                        className="transition hover:scale-110 hover:text-white"
                    >
                        <FaGithub size={22} />
                    </a>

                    <a
                        href="https://github.com/krutarth-pipaliya-simform"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Company GitHub"
                        className="transition hover:scale-110 hover:text-white"
                    >
                        <MdWork size={22} />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/krutarth-pipaliya/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="transition hover:scale-110 hover:text-white"
                    >
                        <FaLinkedin size={22} />
                    </a>

                    <a
                        href="https://codeforces.com/profile/D0OMoP"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Codeforces"
                        className="transition hover:scale-110 hover:text-white"
                    >
                        <SiCodeforces size={22} />
                    </a>

                    <a
                        href="mailto:krutarthpipaliya90@gmail.com"
                        aria-label="Personal Email"
                        className="transition hover:scale-110 hover:text-white"
                    >
                        <MdEmail size={22} />
                    </a>

                    <a
                        href="mailto:krutarth.pipaliya@simformsolutions.com"
                        aria-label="Work Email"
                        className="transition hover:scale-110 hover:text-white"
                    >
                        <MdWork size={22} />
                    </a>
                </div>

                <p className="text-center text-xs text-white/40">
                    © {new Date().getFullYear()} Krutarth Pipaliya
                </p>
            </div>
        </footer>
    );
};
