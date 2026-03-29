"use client";

import { useState } from "react";

const auditQuestions = [
    {
        id: 1,
        question: "When a tier-one journalist searches your brand or CEO's name, what is the dominant narrative?",
        options: [
            { id: "A", text: "A highly curated, authoritative footprint across premium publications." },
            { id: "B", text: "Scattered news, mostly relying on our own press releases." },
            { id: "C", text: "A complete void; we rely mostly on third-party reviews." },
            { id: "D", text: "Historical coverage that no longer reflects our current market position." }
        ]
    },
    {
        id: 2,
        question: "If a market-shifting crisis or competitor move occurs tomorrow, what is your immediate protocol?",
        options: [
            { id: "A", text: "We have a proactive, multi-tiered crisis architecture ready to deploy." },
            { id: "B", text: "We rely heavily on our legal team to draft a standard denial." },
            { id: "C", text: "We wait and see how the media reacts before issuing a statement." },
            { id: "D", text: "We have no formalized crisis communication strategy in place." }
        ]
    },
    {
        id: 3,
        question: "How would you categorize the current public profile of your founding team or C-suite?",
        options: [
            { id: "A", text: "Recognized industry thought leaders with premium op-eds and speaking roles." },
            { id: "B", text: "Known within our specific niche, but lacking mainstream authority." },
            { id: "C", text: "Invisible by design; we prefer the brand to speak for itself." },
            { id: "D", text: "Reluctant participants in media; only speaking when forced." }
        ]
    },
    {
        id: 4,
        question: "Where does your brand predominantly appear in the current media landscape?",
        options: [
            { id: "A", text: "Tier-one business press (ET, Livemint, Forbes) as expert commentary." },
            { id: "B", text: "Trade publications specific to our exact industry vertical." },
            { id: "C", text: "Paid placements, advertorials, or sponsored content." },
            { id: "D", text: "We currently struggle to secure meaningful, earned media." }
        ]
    },
    {
        id: 5,
        question: "Who is currently the primary architect of your brand's public story?",
        options: [
            { id: "A", text: "An elite internal/external communications team driving a proactive strategy." },
            { id: "B", text: "Our marketing department, treating PR merely as an extension of sales." },
            { id: "C", text: "The media themselves; we are entirely reactive to their inquiries." },
            { id: "D", text: "Algorithms and customer chatter; we have surrendered the narrative." }
        ]
    }
];

export default function PerceptionAudit() {
    // 1. NEW INTRO STATE
    const [hasStarted, setHasStarted] = useState(false);

    // Standard Audit States
    const [currentStep, setCurrentStep] = useState(0);
    const [answers, setAnswers] = useState<Record<number, string>>({});
    const [isProcessing, setIsProcessing] = useState(false);
    const [isComplete, setIsComplete] = useState(false);

    // Form States
    const [showForm, setShowForm] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        company: "",
        email: ""
    });

    const handleOptionSelect = (optionId: string) => {
        setAnswers({ ...answers, [currentStep]: optionId });

        setTimeout(() => {
            if (currentStep < auditQuestions.length - 1) {
                setCurrentStep(currentStep + 1);
            } else {
                processResults();
            }
        }, 400);
    };

    const processResults = () => {
        setIsProcessing(true);
        setTimeout(() => {
            setIsProcessing(false);
            setIsComplete(true);
        }, 2500);
    };

    const handleFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        const payload = {
            name: formData.name,
            company: formData.company,
            email: formData.email,
            q1: answers[0] || "N/A",
            q2: answers[1] || "N/A",
            q3: answers[2] || "N/A",
            q4: answers[3] || "N/A",
            q5: answers[4] || "N/A"
        };

        try {
            // Replace with your actual Google Apps Script URL
            const scriptUrl = "https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec";

            await fetch(scriptUrl, {
                method: "POST",
                mode: "no-cors",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            setIsSubmitting(false);
            setIsSuccess(true);

        } catch (error) {
            console.error("Audit submission failed:", error);
            setIsSubmitting(false);
        }
    };

    const resetAudit = () => {
        setHasStarted(false);
        setCurrentStep(0);
        setAnswers({});
        setIsComplete(false);
        setShowForm(false);
        setIsSuccess(false);
        setFormData({ name: "", company: "", email: "" });
    };

    return (
        <section className="py-24 px-6 md:px-12 bg-[#FAFAFA] border-y border-gray-200 flex justify-center items-center min-h-[800px]">
            <div className="max-w-3xl w-full">

                {/* STATE 0: THE INTRO SCREEN */}
                {!hasStarted && (
                    <div className="text-center animate-in fade-in zoom-in-95 duration-700 p-8 md:p-16 border border-gray-200 bg-white shadow-sm">
                        <div className="w-16 h-1 bg-primary mx-auto mb-10"></div>
                        <h3 className="text-xs font-bold uppercase tracking-widest text-primary mb-6">Executive Diagnostic</h3>
                        <h2 className="text-4xl md:text-5xl font-black text-charcoal tracking-tight mb-8">The Perception Audit</h2>

                        <p className="text-xl font-league text-gray-600 leading-relaxed max-w-2xl mx-auto mb-12">
                            Your brand's legacy is either architected by you, or assigned to you by the market. Take this 60-second diagnostic to uncover critical vulnerabilities in your current media positioning and executive footprint.
                        </p>

                        <button
                            onClick={() => setHasStarted(true)}
                            className="group inline-flex items-center justify-center px-10 py-5  text-charcoal font-bold uppercase tracking-widest text-md hover:bg-primary transition-colors duration-500 rounded-none w-full sm:w-auto"
                        >
                            <span>Begin Audit</span>
                            <svg className="w-4 h-4 ml-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </button>
                    </div>
                )}

                {/* STATE 1: THE CAROUSEL */}
                {hasStarted && !isProcessing && !isComplete && (
                    <div className="relative">
                        <div className="flex justify-between items-center mb-12 border-b border-gray-200 pb-6">
                            <div>
                                <h2 className="text-2xl font-black text-charcoal tracking-tight">The Perception Audit</h2>
                                <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mt-2">Executive Diagnostic</p>
                            </div>
                            <span className="text-sm font-mono text-primary">
                                0{currentStep + 1} — 0{auditQuestions.length}
                            </span>
                        </div>

                        <div key={currentStep} className="animate-in fade-in slide-in-from-right-8 duration-500 ease-out">
                            <h3 className="text-3xl md:text-4xl font-league text-charcoal leading-snug mb-12">
                                {auditQuestions[currentStep].question}
                            </h3>

                            <div className="flex flex-col gap-4">
                                {auditQuestions[currentStep].options.map((option) => {
                                    const isSelected = answers[currentStep] === option.id;
                                    return (
                                        <button
                                            key={option.id}
                                            onClick={() => handleOptionSelect(option.id)}
                                            className={`w-full text-left p-6 md:p-8 border transition-all duration-300 group flex items-start gap-6 ${isSelected
                                                ? "border-primary bg-primary/5 shadow-sm"
                                                : "border-gray-200 bg-white hover:border-charcoal"
                                                }`}
                                        >
                                            <span className={`text-xs font-bold font-mono pt-1 ${isSelected ? "text-primary" : "text-gray-400 group-hover:text-charcoal"}`}>
                                                {option.id}
                                            </span>
                                            <span className={`text-lg md:text-xl font-league ${isSelected ? "text-charcoal font-medium" : "text-gray-600"}`}>
                                                {option.text}
                                            </span>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                )}

                {/* STATE 2: THE PROCESSING SCREEN */}
                {isProcessing && (
                    <div className="flex flex-col items-center justify-center text-center animate-in fade-in duration-700 min-h-[400px]">
                        <div className="relative w-16 h-16 mb-8">
                            <div className="absolute inset-0 border-t-2 border-primary rounded-full animate-spin"></div>
                            <div className="absolute inset-2 border-r-2 border-charcoal rounded-full animate-spin direction-reverse"></div>
                        </div>
                        <h3 className="text-2xl font-black text-charcoal tracking-tight mb-2">Synthesizing Narrative Data</h3>
                        <p className="text-sm font-bold uppercase tracking-widest text-primary animate-pulse">Running Perception Matrix...</p>
                    </div>
                )}

                {/* STATE 3: THE REVEAL & INLINE FORM */}
                {isComplete && !isSuccess && (
                    <div className="bg-white border border-gray-200 p-8 md:p-16 animate-in zoom-in-95 fade-in duration-700 shadow-sm">

                        {!showForm ? (
                            <div className="text-center">
                                <div className="w-16 h-1 bg-primary mx-auto mb-10"></div>
                                <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">Diagnostic Complete</h3>
                                <h2 className="text-4xl md:text-5xl font-black text-charcoal tracking-tight mb-8">Narrative Vulnerability Detected.</h2>

                                <p className="text-xl font-league text-gray-600 leading-relaxed max-w-2xl mx-auto mb-12">
                                    Based on your inputs, your brand's public narrative is currently being defined by external forces rather than proactive strategy. You possess the foundational authority, but lack the architectural media positioning required to control your legacy.
                                </p>

                                <button
                                    onClick={() => setShowForm(true)}
                                    className="group inline-flex items-center justify-center px-10 py-5 bg-charcoal text-white font-bold uppercase tracking-widest text-[10px] hover:bg-primary transition-colors duration-500 rounded-none w-full sm:w-auto"
                                >
                                    <span>Request Confidential Debrief</span>
                                    <svg className="w-4 h-4 ml-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </button>
                            </div>
                        ) : (
                            // THE INLINE FORM
                            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                                <div className="flex justify-between items-center mb-8 pb-6 border-b border-gray-200">
                                    <h3 className="text-2xl font-black text-charcoal tracking-tight">Secure Your Debrief</h3>
                                    <button onClick={() => setShowForm(false)} className="text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-charcoal transition-colors">
                                        Cancel
                                    </button>
                                </div>

                                <form onSubmit={handleFormSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Full Name</label>
                                            <input
                                                required
                                                type="text"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                className="w-full bg-[#FAFAFA] border border-gray-200 p-4 font-league text-lg text-charcoal focus:outline-none focus:border-primary transition-colors rounded-none"
                                                placeholder="Jane Doe"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Company</label>
                                            <input
                                                required
                                                type="text"
                                                value={formData.company}
                                                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                                className="w-full bg-[#FAFAFA] border border-gray-200 p-4 font-league text-lg text-charcoal focus:outline-none focus:border-primary transition-colors rounded-none"
                                                placeholder="Acme Corp"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Work Email</label>
                                        <input
                                            required
                                            type="email"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="w-full bg-[#FAFAFA] border border-gray-200 p-4 font-league text-lg text-charcoal focus:outline-none focus:border-primary transition-colors rounded-none"
                                            placeholder="jane@acmecorp.com"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full group flex items-center justify-center px-10 py-5 bg-primary text-white font-bold uppercase tracking-widest text-[10px] hover:bg-charcoal transition-colors duration-500 rounded-none disabled:opacity-70 mt-8"
                                    >
                                        {isSubmitting ? 'Transmitting Data...' : 'Submit Audit & Request Debrief'}
                                    </button>
                                </form>
                            </div>
                        )}
                    </div>
                )}

                {/* STATE 4: THE SUCCESS SCREEN */}
                {isSuccess && (
                    <div className="bg-charcoal p-12 md:p-20 text-center animate-in zoom-in-95 fade-in duration-700 rounded-none border border-charcoal">
                        <div className="w-16 h-16 bg-primary/20 text-primary rounded-full flex items-center justify-center mx-auto mb-8">
                            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-serif text-white tracking-tight mb-6">Audit Received.</h2>
                        <p className="text-lg font-sans font-light text-gray-400 max-w-md mx-auto leading-relaxed">
                            Our strategists are reviewing your narrative data. We will contact you within 24 hours to schedule your confidential debrief.
                        </p>
                    </div>
                )}

            </div>
        </section>
    );
}