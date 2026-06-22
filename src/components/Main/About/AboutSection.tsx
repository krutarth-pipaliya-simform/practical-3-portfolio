import { Separator } from "../Separator";
import type { RefProps } from "../types";

export const AboutSection = ({ ref }: RefProps) => {
    return (
        <>
            <section ref={ref} className="pt-20 min-h-screen xl:max-w-[60vw] px-6 py-24">
                <h2 className="mb-12 text-5xl font-bold text-white">About Me</h2>

                <div className="space-y-10">
                    <div>
                        <h3 className="mb-3 text-2xl font-semibold text-white">Introduction</h3>
                        <p className="text-lg leading-relaxed text-gray-400">
                            I'm Krutarth Pipaliya, a Computer Engineering graduate who enjoys
                            building web applications and solving algorithmic problems. I am
                            passionate about software development and continuously learning new
                            technologies through projects and hands-on experience.
                        </p>
                    </div>

                    <div>
                        <h3 className="mb-3 text-2xl font-semibold text-white">Education</h3>
                        <p className="text-lg leading-relaxed text-gray-400">
                            I completed my Bachelor's degree in Computer Engineering from
                            Vishwakarma Government Engineering College (VGEC), Ahmedabad. My studies
                            provided a strong foundation in computer science fundamentals, software
                            development, and problem-solving.
                        </p>
                    </div>

                    <div>
                        <h3 className="mb-3 text-2xl font-semibold text-white">
                            Hobbies & Interests
                        </h3>
                        <p className="text-lg leading-relaxed text-gray-400">
                            I enjoy competitive programming, building personal projects, exploring
                            new technologies, and learning how software systems work.
                        </p>
                    </div>
                </div>
            </section>
            <Separator />
        </>
    );
};
