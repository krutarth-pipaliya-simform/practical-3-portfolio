import type { RefProps } from "../types";
import { Project } from "./Project";
import type { ProjectData } from "./types";

const projectsData: Array<ProjectData> = [
    {
        id: "blogger-platform",
        title: "Blogger Platform",
        description:
            "A full-stack blogging platform featuring JWT authentication, article publishing, state management with Recoil, schema validation using Zod, PostgreSQL database integration through Prisma ORM, and deployment on Cloudflare Workers using the Hono framework.",
        repoLink: "https://github.com/Krutarth90/Blogger",
        liveLink: "https://blogger-d0om.vercel.app/",
    },
    {
        id: "simple-payment-app",
        title: "Simple Payment Application",
        description:
            "A secure payment application supporting user authentication and transaction-safe money transfers. Built with React, Express.js, MongoDB, Mongoose transactions, Recoil state management, and JWT-based authorization.",
        repoLink: "https://github.com/Krutarth90/SimplePayment",
    },
    {
        id: "todo-app",
        title: "Todo App",
        description:
            "A React-based todo application that supports task creation, completion tracking, deletion, filtering by completed and pending status, and timestamp display. Implemented localStorage persistence with daily expiration logic so tasks remain available throughout the day and automatically reset on the next day.",
        repoLink: "https://github.com/krutarth-pipaliya-simform/Practical-5_Todo-context",
        liveLink: "https://refact.todo-context.pages.dev/",
    },
    {
        id: "kanban-board",
        title: "Kanban Board",
        description:
            "Built a Kanban board in Vanilla JavaScript with task creation, inline editing, deletion, drag-and-drop workflow management, and localStorage persistence.",
        repoLink: "https://github.com/krutarth-pipaliya-simform/KanBan",
        liveLink: "https://kanban-951.pages.dev/",
    },
    {
        id: "code-editor",
        title: "Collaborative Code Editor",
        description:
            "Built a real-time collaborative code editor in Vanilla JavaScript with multi-file support, live user presence and pointer tracking, search, undo/redo, and persistent storage.",
        repoLink: "https://github.com/krutarth-pipaliya-simform/CodeEditor/tree/dev",
        liveLink: "https://dev.codeeditor-bs9.pages.dev/",
    },
];

export const ProjectsSection = ({ ref }: RefProps) => {
    return (
        <section
            ref={ref}
            className="flex flex-col justify-center pt-20 text-white overflow-hidden"
        >
            <h2 className="mb-12 text-5xl font-bold">Projects I've made</h2>
            <ul className="grid grid-cols-3 gap-4 ">
                {projectsData.map((project) => (
                    <Project key={project.id} project={project} />
                ))}
            </ul>
        </section>
    );
};
