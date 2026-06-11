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
        <section className="text-white flex flex-col pt-20 px-6 py-24" ref={ref}>
            <form
                onSubmit={handleSubmit}
                className="self-center flex flex-col gap-4 rounded-2xl border border-white/20 bg-white/5 p-6 backdrop-blur-xl shadow-[0_8px_32px_rgba(255,255,255,0.08)] transition-all duration-300 hover:-translate-y-2 hover:border-white/40 hover:bg-white/10 hover:shadow-[0_12px_40px_rgba(255,255,255,0.15)]"
            >
                <h2 className="mx-auto mb-12 text-5xl font-bold text-white">Contact Me!</h2>
                <label htmlFor="name">Name</label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <label htmlFor="contact-number">Contact Number</label>
                <input
                    id="contact-number"
                    name="contact-number"
                    type="tel"
                    value={contactNumber}
                    onChange={(e) => setContactNumber(e.target.value)}
                />
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="message">Message me</label>
                <textarea
                    id="message"
                    name="message"
                    placeholder="How can I help you?"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button className="cursor-pointer" type="submit">
                    Send message
                </button>
            </form>
        </section>
    );
};
