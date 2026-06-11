import { useState } from "react";
import emailjs from "@emailjs/browser";

import type { RefProps } from "../types";

export const ContactSection = ({ ref }: RefProps) => {
    const [name, setName] = useState<string>("");
    const [contactNumber, setContactNumber] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [message, setMessage] = useState<string>("");

    const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await emailjs.send(
                "service_qu6atgc",
                "template_6g7cm06",
                { name, email, message, contactNumber },
                "LSw_i6Wzx7NlEc2ae",
            );
            alert("Your Message has been sent to me, will reach you out ASAP.");
            console.log("Sent");
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <section className="relative flex flex-col px-6 py-24 text-white" ref={ref}>
            <form
                onSubmit={handleSubmit}
                className="relative mx-auto flex w-full max-w-xl flex-col gap-5 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-[0_8px_32px_rgba(255,255,255,0.08)] transition-all duration-300 hover:border-white/20 hover:shadow-[0_12px_40px_rgba(255,255,255,0.12)]"
            >
                <h2 className="mb-8 text-center text-5xl font-bold tracking-tight">Contact Me</h2>

                <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-sm font-medium text-white/80">
                        Name
                    </label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="John Doe"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-all duration-300 placeholder:text-white/40 focus:border-white/40 focus:bg-white/10"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="contact-number" className="text-sm font-medium text-white/80">
                        Contact Number
                    </label>
                    <input
                        id="contact-number"
                        name="contact-number"
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={contactNumber}
                        onChange={(e) => setContactNumber(e.target.value)}
                        className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-all duration-300 placeholder:text-white/40 focus:border-white/40 focus:bg-white/10"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-sm font-medium text-white/80">
                        Email
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-all duration-300 placeholder:text-white/40 focus:border-white/40 focus:bg-white/10"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-sm font-medium text-white/80">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="How can I help you?"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="min-h-36 resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-all duration-300 placeholder:text-white/40 focus:border-white/40 focus:bg-white/10"
                    />
                </div>

                <button
                    type="submit"
                    className="mt-4 cursor-pointer rounded-xl bg-white px-6 py-3 font-semibold text-black transition-all duration-300 hover:scale-[1.02] hover:bg-white/90 active:scale-[0.98]"
                >
                    Send Message
                </button>
            </form>
        </section>
    );
};
