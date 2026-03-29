"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

// 1. Define the Zod Schema
const contactSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters").max(100, "Name must be less than 100 characters").trim(),
    email: z.email("Invalid email address").lowercase().trim(),
    message: z.string().min(10, "Message must be at least 10 characters").max(1000, "Message must be less than 1000 characters").trim(),
    phone: z.string().min(10, "Phone number must be at least 10 digits").max(10, "Phone number must be less than 15 digits"),
    website_url: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactForm = () => {
    const [status, setStatus] = useState<"IDLE" | "LOADING" | "SUCCESS" | "COOLDOWN">("IDLE");

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
    });

    const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwRcrfHAiPEZRbFLrJ-_ZmKNwDVvvhovP1GVCNpuWygXQ-6MCL0izQ9ZNwx0Yb3KsYH/exec";

    const onSubmit = async (data: ContactFormData) => {
        // 2. Cooldown Check
        const lastSent = localStorage.getItem("form_cooldown");
        const now = Date.now();
        if (lastSent && now - parseInt(lastSent) < 300000) {
            setStatus("COOLDOWN");
            return;
        }

        // 3. Honeypot check
        if (data.website_url) return;

        setStatus("LOADING");

        try {
            const formData = new FormData();
            formData.append("name", data.name);
            formData.append("email", data.email);
            formData.append("message", data.message);
            formData.append("phone", data.phone.toString());

            await fetch(GOOGLE_SCRIPT_URL, {
                method: "POST",
                body: formData,
                mode: "no-cors",
            });

            localStorage.setItem("form_cooldown", Date.now().toString());
            setStatus("SUCCESS");
            reset();
        } catch (error) {
            console.error("Submission error", error);
            setStatus("IDLE");
        }
    };

    return (
        <div className="max-w-lg mx-auto p-8 bg-white border border-slate-100 shadow-xl rounded-2xl font-league text-slate-900">
            <h2 className="text-2xl font-semibold mb-6 text-slate-800">Get in Touch</h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

                {status === "COOLDOWN" && (
                    <div className="animate-fade-in-up p-6 bg-amber-50 border border-amber-100 rounded-xl">
                        <div className="flex items-start space-x-3">
                            <div className="mt-0.5">
                                <svg className="w-5 h-5 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div>
                                <h4 className="text-sm font-bold text-amber-900 uppercase tracking-tight">Recent Submission Found</h4>
                                <p className="text-xs text-amber-800 mt-1 leading-relaxed">
                                    To ensure quality service, we limit submissions to once every 5 minutes.
                                    If this is an urgent PR matter, please reach out directly:
                                </p>
                                <a
                                    href="tel:+91XXXXXXXXXX"
                                    className="inline-block mt-3 text-lg font-black text-amber-900 border-b-2 border-amber-400 hover:border-amber-600 transition-all"
                                >
                                    +91-XXXXX-XXXXX
                                </a>
                            </div>
                        </div>
                    </div>
                )}
                {/* Dynamic Feedback UI */}
                {status === "SUCCESS" && (
                    <div className="animate-fade-in-up flex flex-col items-center justify-center p-6 bg-slate-50 border border-slate-200 rounded-xl space-y-3">
                        {/* Animated Checkmark Icon */}
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center animate-check-bounce">
                            <svg
                                className="w-6 h-6 text-green-600"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="5 13l4 4L19 7" />
                            </svg>
                        </div>

                        <div className="text-center">
                            <h3 className="text-lg font-bold text-slate-900">Message Received</h3>
                            <p className="text-sm text-slate-600">
                                Check your inbox. We&apos;ve sent you a confirmation email.
                            </p>
                        </div>
                    </div>
                )}
                {/* Honeypot */}
                <input type="text" {...register("website_url")} className="hidden" tabIndex={-1} />

                <div className="space-y-1">
                    <label className="text-sm font-medium text-slate-600">Full Name</label>
                    <input
                        {...register("name")}
                        className={`w-full p-3 rounded-lg border transition-colors focus:ring-2 focus:ring-indigo-500 outline-none ${errors.name ? "border-red-500" : "border-slate-200"
                            }`}
                    />
                    {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>}
                </div>

                <div className="space-y-1">
                    <label className="text-sm font-medium text-slate-600">Phone Number</label>
                    <input
                        {...register("phone")}
                        type="text"
                        className={`w-full p-3 rounded-lg border transition-colors focus:ring-2 focus:ring-indigo-500 outline-none ${errors.phone ? "border-red-500" : "border-slate-200"
                            }`}
                    />
                    {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone.message}</p>}
                </div>

                <div className="space-y-1">
                    <label className="text-sm font-medium text-slate-600">Email Address</label>
                    <input
                        {...register("email")}
                        type="email"
                        className={`w-full p-3 rounded-lg border transition-colors focus:ring-2 focus:ring-indigo-500 outline-none ${errors.email ? "border-red-500" : "border-slate-200"
                            }`}
                    />
                    {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>}
                </div>

                <div className="space-y-1">
                    <label className="text-sm font-medium text-slate-600">Message</label>
                    <textarea
                        {...register("message")}
                        rows={4}
                        className={`w-full p-3 rounded-lg border transition-colors focus:ring-2 focus:ring-indigo-500 outline-none ${errors.message ? "border-red-500" : "border-slate-200"
                            }`}
                    />
                    {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message.message}</p>}
                </div>

                <button
                    type="submit"
                    disabled={status === "LOADING"}
                    className="w-full bg-slate-900 text-md font-semibold text-white py-3 rounded-lg cursor-pointer hover:bg-slate-800 transition-all active:scale-[0.98] disabled:bg-slate-300"
                >
                    {status === "LOADING" ? "Sending..." : "Submit Inquiry"}
                </button>




            </form>
        </div>
    );
};

export default ContactForm;