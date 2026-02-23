import React, { useState, useEffect } from 'react';

const options = [
    {
        tag: "Trust + Authority",
        title: "Build a Website That Makes Your Business Look Professional.",
        sub: "Designed for Trust. Built to Generate Leads.",
    },
    {
        tag: "Pain-Based Hook",
        title: "No Website? You're Losing Customers Every Day.",
        sub: "We Build Professional Business Websites in 48 Hours.",
    },
    {
        tag: "Premium Feel",
        title: "Professional Websites for Serious Business Owners.",
        sub: "Modern Design. Mobile Ready. Google Optimized.",
    },
    {
        tag: "Conversion Focused",
        title: "Turn Visitors Into Customers With a Professional Website.",
        sub: "Custom Website for Just ₹4,999.",
    },
];

const Hero = ({ openModal }) => {
    const [current, setCurrent] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                setCurrent((prev) => (prev + 1) % options.length);
                setFade(true);
            }, 500); // Wait for fade out
        }, 3500); // 3.5s per slide
        return () => clearInterval(interval);
    }, []);

    const { tag, title, sub } = options[current];

    return (
        <section id="hero" className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-white py-24 text-[#0B1D3A]">

            {/* Grid Background */}
            <div className="absolute inset-0 pointer-events-none opacity-40"
                style={{
                    backgroundImage: 'linear-gradient(#CBD5E1 1px, transparent 1px), linear-gradient(90deg, #CBD5E1 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                    backgroundPosition: 'center center',
                    zIndex: 0
                }}
            />

            {/* Doodle: Big Arrow pointing to CTA (Desktop) */}
            <div className="absolute bottom-32 left-[15%] pointer-events-none hidden xl:block z-20" style={{ opacity: 0.8 }}>
                <svg width="200" height="150" viewBox="0 0 200 150" fill="none" stroke="#2563EB" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ transform: 'rotate(-15deg)' }}>
                    <path d="M10 140 Q 80 140 160 50" strokeDasharray="8 8" />
                    <path d="M140 45 L170 40 L160 70" />
                    <text x="8" y="70" fontFamily="sans-serif" fontSize="18" fontWeight="bold" fill="#2563EB" stroke="none" transform="rotate(10 30 70)">Start Here!</text>
                </svg>
            </div>

            {/* Doodle: Sparkles (Top Right) */}
            <div className="absolute top-24 right-[10%] pointer-events-none hidden lg:block" style={{ opacity: 0.8 }}>
                <svg width="100" height="100" viewBox="0 0 100 100" fill="none" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M50 10L50 40 M50 60L50 90 M10 50L40 50 M60 50L90 50 M25 25L42 42 M58 58L75 75 M75 25L58 42 M42 58L25 75" />
                    <circle cx="50" cy="50" r="10" />
                </svg>
            </div>

            <div className="container-custom relative z-10 flex flex-col items-center text-center">

                {/* Main Hero Note */}
                <div className="relative w-full">
                    {/* Purple Tape */}
                    <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-24 h-8 bg-[#8B5CF6] border-2 border-[#0B1D3A] z-20 shadow-sm" style={{ transform: 'rotate(-2deg)' }}>
                        <div className="absolute inset-0 flex items-center justify-center opacity-30">
                            <svg width="12" height="12" viewBox="0 0 24 24" stroke="black" strokeWidth="2"><path d="M2 12h20L12 2l-10 10" /></svg>
                        </div>
                    </div>

                    {/* Connecting Top Line (Dashboard root) */}
                    <div className="absolute pointer-events-none hidden md:block" style={{ top: '100%', left: '50%', height: '80px', width: '2px', borderLeft: '2px dashed #0B1D3A', zIndex: 0 }}>
                        <div className="absolute -bottom-1 -left-[5px] w-2 h-2 border-b-2 border-r-2 border-[#0B1D3A] rotate-45" />
                    </div>

                    <div className="bg-white border-2 border-[#0B1D3A] rounded-sm p-10 md:p-14 shadow-[12px_12px_0px_#2563EB] flex flex-col items-center relative transition-transform hover:-translate-y-1">

                        {/* Eyebrow badge (Animated Label) */}
                        <div className="mb-8 inline-flex items-center gap-2 bg-[#F0F5FF] border-2 border-[#0B1D3A] px-5 py-2.5 shadow-[4px_4px_0px_#0B1D3A] text-[13px] font-bold tracking-widest uppercase text-[#0B1D3A]"
                            style={{
                                opacity: fade ? 1 : 0,
                                transform: fade ? 'translateY(0) rotate(-1deg)' : 'translateY(8px) rotate(-1deg)',
                                transition: 'opacity 0.5s ease, transform 0.5s ease',
                            }}>
                            <span className="w-2.5 h-2.5 rounded-full bg-[#16A34A] animate-pulse inline-block border border-[#0B1D3A]" />
                            {tag}
                        </div>

                        {/* Massive Animated Centered Headline */}
                        <div style={{ minHeight: '190px' }} className="w-full flex justify-center max-md:min-h-[140px]">
                            <h1 className="font-extrabold text-[#0B1D3A] leading-[1.05] tracking-tight mb-8 w-full max-w-[950px]"
                                style={{
                                    fontSize: 'clamp(36px, 5.5vw, 64px)',
                                    opacity: fade ? 1 : 0,
                                    transform: fade ? 'scale(1) translateY(0)' : 'scale(0.98) translateY(12px)',
                                    transition: 'opacity 0.6s cubic-bezier(0.2, 0.8, 0.2, 1), transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)',
                                }}>
                                {title.split(' ').map((word, i) => {
                                    const highlight = ['Professional.', 'Professional', 'Customers', 'Serious', '₹4,999.'];
                                    const isHighlight = highlight.includes(word);
                                    return (
                                        <React.Fragment key={i}>
                                            {isHighlight ? (
                                                <span className="relative inline-block text-[#2563EB]">
                                                    {word}
                                                    {/* Hand-drawn underline for highlighted words */}
                                                    <svg className="absolute w-full h-3 -bottom-1 left-0 text-[#F59E0B]" viewBox="0 0 100 20" preserveAspectRatio="none">
                                                        <path d="M2 15Q25 10 50 15 T98 12" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
                                                    </svg>
                                                </span>
                                            ) : word}{' '}
                                        </React.Fragment>
                                    );
                                })}
                            </h1>
                        </div>

                        {/* Animated Subtitle */}
                        <div style={{ minHeight: '60px' }} className="flex justify-center w-full relative">
                            <p className="text-[#475569] leading-relaxed mb-10 max-w-[640px] px-4 font-bold"
                                style={{
                                    fontSize: 'clamp(16px, 1.8vw, 20px)',
                                    opacity: fade ? 1 : 0,
                                    transform: fade ? 'translateY(0)' : 'translateY(8px)',
                                    transition: 'opacity 0.5s ease 0.1s, transform 0.5s ease 0.1s',
                                }}>
                                {sub}
                            </p>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex items-center justify-center gap-6 w-full max-md:flex-col relative z-20">
                            <button onClick={openModal}
                                className="btn bg-[#0B1D3A] text-white font-black border-2 border-[#0B1D3A] rounded-lg shadow-[6px_6px_0px_#2563EB] hover:shadow-[8px_8px_0px_#1D4ED8] hover:-translate-y-1 transition-all"
                                style={{ padding: '18px 40px', fontSize: '18px', letterSpacing: '0.5px' }}>
                                Get Free Consultation
                            </button>
                            <a href="#trust"
                                className="flex items-center justify-center font-bold text-[#0B1D3A] rounded-lg border-2 border-[#0B1D3A] bg-white shadow-[4px_4px_0px_#0B1D3A] hover:bg-[#F8FAFC] hover:-translate-y-1 transition-all"
                                style={{ padding: '16px 40px', fontSize: '16px' }}>
                                View Our Work
                            </a>
                        </div>
                    </div>
                </div>

                {/* Trust/Info Strip below Note */}
                <div className="flex items-center justify-center gap-10 mt-28 flex-wrap">
                    {[
                        {
                            icon: <svg className="w-6 h-6 text-[#2563EB]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
                            text: 'Live In 48 Hours'
                        },
                        {
                            icon: <svg className="w-6 h-6 text-[#8B5CF6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>,
                            text: 'Premium Quality'
                        },
                        {
                            icon: <svg className="w-6 h-6 text-[#10B981]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
                            text: 'No Advance Payment'
                        }
                    ].map(({ icon, text }) => (
                        <div key={text} className="flex items-center gap-3 text-[16px] font-black text-[#0B1D3A] bg-white border-2 border-[#0B1D3A] px-5 py-2 shadow-[3px_3px_0px_#0B1D3A] rotate-[-1deg] transition-transform hover:rotate-[1deg]">
                            <span className="flex items-center justify-center">{icon}</span>
                            {text}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hero;
