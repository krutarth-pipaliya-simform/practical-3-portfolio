import { Separator } from "./Separator";
import type { RefProps } from "./types";

export const AboutSection = ({ ref }: RefProps) => {
    return (
        <>
            <section ref={ref} className="h-screen max-w-[60vw] px-6 py-24">
                <h2 className="mb-12 text-5xl font-bold text-white">About Me</h2>

                <div className="space-y-10">
                    <div>
                        <h3 className="mb-3 text-2xl font-semibold text-white">Introduction</h3>
                        <p className="text-lg leading-relaxed text-gray-400">
                            Hi, I'm Krutarth Pipaliya, a Computer Engineering student who enjoys
                            building software and solving challenging problems. I am passionate
                            about web development, software engineering, and creating applications
                            that deliver great user experiences.
                        </p>
                    </div>

                    <div>
                        <h3 className="mb-3 text-2xl font-semibold text-white">Education</h3>
                        <p className="text-lg leading-relaxed text-gray-400">
                            Currently pursuing a Bachelor's degree in Computer Engineering, with a
                            strong focus on data structures, algorithms, software development, and
                            modern web technologies.
                        </p>
                    </div>

                    <div>
                        <h3 className="mb-3 text-2xl font-semibold text-white">
                            Hobbies & Interests
                        </h3>
                        <p className="text-lg leading-relaxed text-gray-400">
                            I enjoy competitive programming, building personal projects, exploring
                            new technologies, and learning how large-scale software systems are
                            designed and optimized.
                        </p>
                    </div>
                </div>
            </section>
            <Separator />
        </>
    );
};
