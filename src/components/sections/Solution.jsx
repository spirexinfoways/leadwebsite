import React from 'react';

const features = [
    {
        icon: <svg className="w-10 h-10 text-[#FCD34D]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
        title: '48-Hour Delivery',
        desc: 'Your complete website goes live within 2 days — guaranteed. No delays, no excuses.',
        tilt: '-2deg',
        shadow: '#FCD34D'
    },
    {
        icon: <svg className="w-10 h-10 text-[#8B5CF6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>,
        title: 'Premium Design',
        desc: 'Pixel-perfect aesthetics built to impress every visitor and convert them into customers.',
        tilt: '1deg',
        shadow: '#8B5CF6'
    },
    {
        icon: <svg className="w-10 h-10 text-[#3B82F6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><line x1="12" y1="18" x2="12.01" y2="18" /></svg>,
        title: 'Mobile-First',
        desc: 'Flawless experience across all devices. 70%+ of your customers browse on mobile.',
        tilt: '-1deg',
        shadow: '#3B82F6'
    },
    {
        icon: <svg className="w-10 h-10 text-[#10B981]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>,
        title: 'Google Optimised',
        desc: 'SEO-ready structure from day one so your local business gets found on Google.',
        tilt: '2deg',
        shadow: '#10B981'
    },
    {
        icon: <svg className="w-10 h-10 text-[#F97316]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>,
        title: 'WhatsApp Button',
        desc: 'One tap connects customers directly to your WhatsApp. Never miss a lead again.',
        tilt: '-1.5deg',
        shadow: '#F97316'
    },
    {
        icon: <svg className="w-10 h-10 text-[#EC4899]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>,
        title: 'Free Support',
        desc: 'Post-launch help included. We\'re with you until everything runs perfectly.',
        tilt: '1.5deg',
        shadow: '#EC4899'
    }
];

const Solution = ({ openModal }) => {
    return (
        <section id="solution" className="relative py-24 overflow-hidden text-[#0B1D3A]" style={{ backgroundColor: '#ffffffff' }}>
            {/* Grid Background */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.35]"
                style={{
                    backgroundImage: 'linear-gradient(#CBD5E1 1px, transparent 1px), linear-gradient(90deg, #CBD5E1 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                    backgroundPosition: 'center center'
                }}
            />

            {/* Doodle: Lightbulb (Top Left) */}
            <div className="absolute top-16 left-12 pointer-events-none max-md:-left-6" style={{ opacity: 0.8 }}>
                <svg width="100" height="120" viewBox="0 0 100 120" fill="none" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M50 80C30 80 25 60 25 45C25 25 35 15 50 15C65 15 75 25 75 45C75 60 70 80 50 80Z" />
                    <rect x="35" y="80" width="30" height="15" rx="2" />
                    <path d="M40 95H60V100C60 105 40 105 40 100V95Z" fill="#F59E0B" opacity="0.2" />
                    <path d="M40 85H60 M40 90H60" />
                    {/* Filament */}
                    <path d="M45 80L45 55L50 45L55 55L55 80" />
                    {/* Glow lines */}
                    <path d="M50 0L50 8 M80 15L74 21 M95 45L87 45 M80 75L74 69 M20 15L26 21 M5 45L13 45 M20 75L26 69" />
                </svg>
            </div>

            {/* Doodle: Checkmarks (Bottom Right) */}
            <div className="absolute bottom-12 right-12 pointer-events-none hidden lg:block" style={{ opacity: 0.6 }}>
                <svg width="80" height="100" viewBox="0 0 80 100" fill="none" stroke="#10B981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10 30L30 50L70 10" />
                    <path d="M10 70L30 90L70 50" />
                </svg>
            </div>


            <div className="container-custom relative z-10">
                {/* Header */}
                <div className="text-center mb-20 flex flex-col items-center">
                    <div className="bg-[#DBEAFE] text-[#1D4ED8] px-6 py-1.5 rounded-full text-[14px] font-extrabold mb-6 shadow-sm tracking-wide border-2 border-[#1D4ED8]">
                        The Perfect Solution
                    </div>
                    <h2 className="font-extrabold text-[#0B1D3A] tracking-tight leading-[1.1] mb-6"
                        style={{ fontSize: 'clamp(36px, 5vw, 56px)' }}>
                        Everything You Need.<br />
                        <span className="relative inline-block mt-2">
                            Nothing You Don't.
                            {/* Underline drawn */}
                            <svg className="absolute w-full h-4 -bottom-2 left-0 text-[#2563EB]" viewBox="0 0 200 20" preserveAspectRatio="none">
                                <path d="M5 15Q50 5 100 10 T195 10" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                            </svg>
                        </span>
                    </h2>
                </div>

                {/* Sticky Notes Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14 pt-4 px-4">
                    {features.map(({ icon, title, desc, tilt, shadow }) => (
                        <div key={title}
                            onClick={openModal}
                            className="relative transition-transform duration-300 hover:-translate-y-2 cursor-pointer group"
                        >
                            {/* Tape */}
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-14 h-6 bg-[#8B5CF6] border-2 border-[#0B1D3A] z-20 shadow-sm" style={{ transform: `rotate(${Math.random() > 0.5 ? '2deg' : '-2deg'})` }}>
                                <div className="absolute inset-0 flex items-center justify-center opacity-30">
                                    <svg width="10" height="10" viewBox="0 0 24 24" stroke="black" strokeWidth="2"><path d="M2 12h20L12 2l-10 10" /></svg>
                                </div>
                            </div>

                            {/* Sticky Card */}
                            <div className="bg-white border-2 border-[#0B1D3A] rounded-sm p-8 h-full flex flex-col items-center text-center transition-all duration-300 group-hover:bg-[#F8FAFC]"
                                style={{
                                    transform: `rotate(${tilt})`,
                                    boxShadow: `6px 6px 0px ${shadow}`
                                }}>

                                <div className="mb-5 flex justify-center opacity-100">{icon}</div>
                                <h3 className="font-bold text-[#0B1D3A] text-[22px] mb-3 leading-tight">{title}</h3>
                                <p className="text-[#475569] font-medium leading-relaxed text-[14px]">
                                    {desc}
                                </p>

                                {/* Corner scribble */}
                                <div className="absolute bottom-3 right-3 opacity-30">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0B1D3A" strokeWidth="2" strokeLinecap="round">
                                        <path d="M4 20L20 4 M4 16L16 4 M8 20L20 8" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-24 text-center">
                    <button onClick={openModal}
                        className="btn bg-[#0B1D3A] text-white font-black rounded-lg border-2 border-[#0B1D3A] shadow-[4px_4px_0px_#2563EB] hover:shadow-[6px_6px_0px_#1D4ED8] hover:-translate-y-1 transition-all"
                        style={{ padding: '16px 40px', fontSize: '16px', letterSpacing: '0.5px' }}>
                        Get All Features For ₹4,999 →
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Solution;
