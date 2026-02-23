import React from 'react';

const Problem = ({ openModal }) => {
    return (
        <section id="problem" className="relative py-24 bg-white overflow-hidden text-[#0B1D3A]" style={{ minHeight: '100vh' }}>
            {/* Grid Background */}
            <div className="absolute inset-0 pointer-events-none opacity-40"
                style={{
                    backgroundImage: 'linear-gradient(#CBD5E1 1px, transparent 1px), linear-gradient(90deg, #CBD5E1 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                    backgroundPosition: 'center center'
                }}
            />

            {/* Doodle: Sun (Top Right) */}
            <div className="absolute top-10 right-10 pointer-events-none max-md:-right-10 max-md:-top-5" style={{ opacity: 0.8 }}>
                <svg width="120" height="120" viewBox="0 0 100 100" fill="none" stroke="#0B1D3A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="50" cy="50" r="22" />
                    <path d="M50 15V5M50 95V85M85 50H95M5 50H15M75 25L82 18M18 82L25 75M75 75L82 82M18 18L25 25" />
                    {/* Face */}
                    <path d="M40 45Q45 40 50 45" />
                    <path d="M50 45Q55 40 60 45" />
                    <path d="M40 55Q50 65 60 55" />
                </svg>
            </div>

            {/* Doodle: Computer (Top Left) */}
            <div className="absolute top-32 left-8 pointer-events-none hidden lg:block" style={{ opacity: 0.9 }}>
                <svg width="140" height="120" viewBox="0 0 140 120" fill="none" stroke="#0B1D3A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {/* Monitor */}
                    <rect x="20" y="20" width="70" height="50" rx="4" />
                    <path d="M45 70L30 85H80L65 70" />
                    {/* Keyboard */}
                    <rect x="15" y="90" width="80" height="15" rx="2" transform="skewX(-20)" />
                    {/* Mouse and wire */}
                    <rect x="110" y="80" width="16" height="24" rx="8" />
                    <path d="M110 92H126" />
                    <path d="M118 80V70C118 60 90 60 90 70V75" strokeDasharray="4 4" />
                </svg>
            </div>

            <div className="container-custom relative z-10">
                <div className="text-center mb-16 flex flex-col items-center">
                    {/* Yellow pill badge top */}
                    <div className="bg-[#FCD34D] text-[#92400E] px-6 py-1.5 rounded-full text-[14px] font-extrabold mb-6 shadow-sm tracking-wide">
                        Digital Reality Check
                    </div>

                    <h2 className="font-extrabold text-[#0B1D3A] tracking-tight leading-[1.1] mb-4"
                        style={{ fontSize: 'clamp(44px, 6vw, 68px)' }}>
                        No Website ={' '}
                        <span className="block mt-2" style={{ color: '#0B1D3A' }}>
                            Lost Customers
                        </span>
                    </h2>
                </div>

                {/* Dashboard / Notes Area */}
                <div className="relative w-full mx-auto pt-6">

                    {/* Desktop Dashed Connecting Lines (Top Branch) */}
                    <div className="absolute pointer-events-none hidden md:block" style={{ top: '-40px', left: 0, right: 0, height: '100px', zIndex: 0 }}>
                        <svg width="100%" height="100%" style={{ overflow: 'visible' }}>
                            {/* Center drop down */}
                            <path d="M 50%,0 L 50%,40" stroke="#0B1D3A" strokeWidth="2" strokeDasharray="6 6" fill="none" />
                            {/* Horizontal split */}
                            <path d="M 25%,40 L 75%,40" stroke="#0B1D3A" strokeWidth="2" strokeDasharray="6 6" fill="none" />
                            {/* Drop to Left Card */}
                            <path d="M 25%,40 L 25%,90" stroke="#0B1D3A" strokeWidth="2" strokeDasharray="6 6" fill="none" />
                            {/* Drop to Right Card (slightly lower) */}
                            <path d="M 75%,40 L 75%,120" stroke="#0B1D3A" strokeWidth="2" strokeDasharray="6 6" fill="none" />

                            {/* Arrow heads */}
                            <path d="M 25%,90 L 22%,85 M 25%,90 L 28%,85" stroke="#0B1D3A" strokeWidth="2" fill="none" />
                            <path d="M 75%,120 L 72%,115 M 75%,120 L 78%,115" stroke="#0B1D3A" strokeWidth="2" fill="none" />
                        </svg>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 relative z-10 pl-2 pr-2">

                        {/* Note 1 (Green/Good - Left) */}
                        <div className="relative transition-transform hover:-translate-y-1 mt-0">
                            {/* Purple Tape */}
                            <div className="absolute -top-3 left-[20%] w-16 h-6 bg-[#8B5CF6] border-2 border-[#0B1D3A] z-20 shadow-sm" style={{ transform: 'rotate(-2deg)' }}>
                                <div className="absolute inset-0 flex items-center justify-center opacity-30">
                                    <svg width="10" height="10" viewBox="0 0 24 24" stroke="black" strokeWidth="2"><path d="M2 12h20L12 2l-10 10" /></svg>
                                </div>
                            </div>

                            {/* Connecting dashed line from bottom of Card 1 to Card 3 */}
                            <div className="absolute hidden md:block" style={{ top: '100%', left: '50%', width: '2px', height: '60px', borderLeft: '2px dashed #0B1D3A' }}>
                                <div className="absolute -bottom-1 -left-[5px] w-2 h-2 border-b-2 border-r-2 border-[#0B1D3A] rotate-45" />
                            </div>

                            {/* Sticky Card */}
                            <div className="bg-white border-2 border-[#0B1D3A] rounded-sm p-8 shadow-[6px_6px_0px_#16A34A] h-full flex flex-col items-center text-center">
                                <h3 className="font-extrabold text-[#0B1D3A] text-[28px] mb-4 leading-tight">Instant Trust</h3>
                                <p className="text-[#475569] font-medium leading-relaxed text-[15px]">
                                    75% of users judge a business’s credibility by its website. A premium design makes you look established and safe.
                                </p>
                                {/* Green Scribble */}
                                <div className="mt-8 text-[#16A34A] self-end">
                                    <svg width="40" height="20" viewBox="0 0 40 20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M5 10L15 20L35 2" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Note 2 (Red/Bad - Right) */}
                        <div className="relative transition-transform hover:-translate-y-1 mt-0 md:mt-8">
                            {/* Purple Tape */}
                            <div className="absolute -top-3 left-[40%] w-16 h-6 bg-[#8B5CF6] border-2 border-[#0B1D3A] z-20 shadow-sm" style={{ transform: 'rotate(1deg)' }}>
                                <div className="absolute inset-0 flex items-center justify-center opacity-30">
                                    <svg width="10" height="10" viewBox="0 0 24 24" stroke="black" strokeWidth="2"><path d="M2 12h20L12 2l-10 10" /></svg>
                                </div>
                            </div>

                            {/* Connecting dashed line from bottom of Card 2 to Card 4 */}
                            <div className="absolute hidden md:block" style={{ top: '100%', left: '50%', width: '2px', height: '40px', borderLeft: '2px dashed #0B1D3A' }}>
                                <div className="absolute -bottom-1 -left-[5px] w-2 h-2 border-b-2 border-r-2 border-[#0B1D3A] rotate-45" />
                            </div>

                            {/* Sticky Card */}
                            <div className="bg-white border-2 border-[#0B1D3A] rounded-sm p-8 shadow-[6px_6px_0px_#DC2626] h-full flex flex-col items-center text-center">
                                <h3 className="font-extrabold text-[#0B1D3A] text-[28px] mb-4 leading-tight">Looks Sketchy</h3>
                                <p className="text-[#475569] font-medium leading-relaxed text-[15px]">
                                    Only relying on outdated directories or old Facebook pages makes customers assume your business is closed.
                                </p>
                                {/* Red Scribble */}
                                <div className="mt-8 text-[#DC2626] self-end">
                                    <svg width="30" height="20" viewBox="0 0 30 20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M3 3L27 17M3 17L27 3" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Note 3 (Green/Good - Left) */}
                        <div className="relative transition-transform hover:-translate-y-1 mt-6 md:mt-10">
                            {/* Purple Tape */}
                            <div className="absolute -top-3 right-[30%] w-16 h-6 bg-[#8B5CF6] border-2 border-[#0B1D3A] z-20 shadow-sm" style={{ transform: 'rotate(-1deg)' }}>
                                <div className="absolute inset-0 flex items-center justify-center opacity-30">
                                    <svg width="10" height="10" viewBox="0 0 24 24" stroke="black" strokeWidth="2"><path d="M2 12h20L12 2l-10 10" /></svg>
                                </div>
                            </div>

                            {/* Sticky Card */}
                            <div className="bg-white border-2 border-[#0B1D3A] rounded-sm p-8 shadow-[6px_6px_0px_#16A34A] h-full flex flex-col items-center text-center">
                                <h3 className="font-extrabold text-[#0B1D3A] text-[28px] mb-4 leading-tight">1-Click Contact</h3>
                                <p className="text-[#475569] font-medium leading-relaxed text-[15px]">
                                    A professional site lets clients WhatsApp you or find your shop on Google Maps with just a single tap from their phone.
                                </p>
                                <div className="mt-8 text-[#16A34A] self-end">
                                    <svg width="40" height="20" viewBox="0 0 40 20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M5 10L15 20L35 2" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Note 4 (Red/Bad - Right) */}
                        <div className="relative transition-transform hover:-translate-y-1 mt-6 md:mt-4">
                            {/* Purple Tape */}
                            <div className="absolute -top-3 left-[25%] w-16 h-6 bg-[#8B5CF6] border-2 border-[#0B1D3A] z-20 shadow-sm" style={{ transform: 'rotate(2deg)' }}>
                                <div className="absolute inset-0 flex items-center justify-center opacity-30">
                                    <svg width="10" height="10" viewBox="0 0 24 24" stroke="black" strokeWidth="2"><path d="M2 12h20L12 2l-10 10" /></svg>
                                </div>
                            </div>

                            {/* Sticky Card */}
                            <div className="bg-white border-2 border-[#0B1D3A] rounded-sm p-8 shadow-[6px_6px_0px_#DC2626] h-full flex flex-col items-center text-center">
                                <h3 className="font-extrabold text-[#0B1D3A] text-[28px] mb-4 leading-tight">Invisible to 97%</h3>
                                <p className="text-[#475569] font-medium leading-relaxed text-[15px]">
                                    97% of people use Google to find local businesses. Without a website, you don’t exist, and competitors win them.
                                </p>
                                <div className="mt-8 text-[#DC2626] self-end">
                                    <svg width="30" height="20" viewBox="0 0 30 20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M3 3L27 17M3 17L27 3" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Bottom Brain Doodle & CTA Button */}
                <div className="mt-20 text-center flex flex-col items-center relative z-10">
                    <div className="mb-6 opacity-80 animate-pulse">
                        <svg width="90" height="90" viewBox="0 0 100 100" fill="none" stroke="#0B1D3A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            {/* Brain */}
                            <path d="M50 80C30 80 20 65 20 50C20 40 25 30 40 25C40 15 60 15 60 25C75 30 80 40 80 50C80 65 70 80 50 80Z" />
                            <path d="M50 20V80" strokeDasharray="4 4" />
                            <path d="M35 35Q45 40 45 30" />
                            <path d="M65 35Q55 40 55 30" />
                            <path d="M30 50Q40 50 40 40" />
                            <path d="M70 50Q60 50 60 40" />
                            {/* Rays */}
                            <path d="M50 2L50 12M82 18L75 25M98 50L88 50M82 82L75 75M50 98L50 88M18 82L25 75M2 50L12 50M18 18L25 25" strokeWidth="2.5" />
                        </svg>
                    </div>
                    <button onClick={openModal}
                        className="btn bg-[#0B1D3A] text-white font-black rounded-full border-2 border-[#0B1D3A] shadow-none hover:shadow-[4px_4px_0px_#2563EB] hover:-translate-y-1 transition-all"
                        style={{ padding: '16px 40px', fontSize: '18px', letterSpacing: '0.5px' }}>
                        Start Your Website Now →
                    </button>
                </div>

            </div>
        </section>
    );
};

export default Problem;
