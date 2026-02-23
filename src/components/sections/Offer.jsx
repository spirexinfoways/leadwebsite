import React from 'react';

const Offer = ({ openModal }) => {
    return (
        <section id="offer" className="relative py-24 bg-white overflow-hidden text-[#0B1D3A]" style={{ minHeight: '90vh' }}>
            {/* Grid Background */}
            <div className="absolute inset-0 pointer-events-none opacity-40"
                style={{
                    backgroundImage: 'linear-gradient(#CBD5E1 1px, transparent 1px), linear-gradient(90deg, #CBD5E1 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                    backgroundPosition: 'center center'
                }}
            />

            {/* Doodle: Megaphone (Top Left) */}
            <div className="absolute top-20 left-10 pointer-events-none hidden lg:block" style={{ opacity: 0.8 }}>
                <svg width="120" height="120" viewBox="0 0 100 100" fill="none" stroke="#2563EB" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    {/* Speaker */}
                    <path d="M20 40L45 25V75L20 60H10V40H20Z" />
                    {/* Handle */}
                    <path d="M25 68L30 85H40L35 60" />
                    {/* Sound waves */}
                    <path d="M55 35C65 40 65 60 55 65" />
                    <path d="M65 25C80 35 80 65 65 75" />
                    <path d="M75 15C95 30 95 70 75 85" />
                </svg>
            </div>

            {/* Doodle: Target/Dart (Bottom Right) */}
            <div className="absolute bottom-10 right-10 pointer-events-none max-md:hidden" style={{ opacity: 0.6 }}>
                <svg width="120" height="120" viewBox="0 0 100 100" fill="none" stroke="#DC2626" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    {/* Target */}
                    <circle cx="50" cy="50" r="40" strokeDasharray="8 6" />
                    <circle cx="50" cy="50" r="25" />
                    <circle cx="50" cy="50" r="10" fill="#DC2626" />
                    {/* Dart */}
                    <path d="M75 25L55 45" stroke="#0B1D3A" strokeWidth="4" />
                    <path d="M85 15L75 25L80 30Z" fill="#0B1D3A" />
                </svg>
            </div>

            <div className="container-custom relative z-10">
                <div className="text-center mb-16 flex flex-col items-center">
                    <div className="bg-[#FEE2E2] text-[#B91C1C] px-6 py-1.5 rounded-full text-[14px] font-extrabold mb-6 shadow-sm tracking-wide border-2 border-[#B91C1C]">
                        Our Unbeatable Guarantee
                    </div>
                </div>

                {/* Main Offer Card - Big Sticky Note */}
                <div className="relative mx-auto w-full transition-transform hover:-translate-y-1">

                    {/* Double purple tape */}
                    <div className="absolute -top-4 left-1/4 w-20 h-8 bg-[#8B5CF6] border-2 border-[#0B1D3A] z-20 shadow-sm" style={{ transform: 'rotate(-3deg)' }}>
                        <div className="absolute inset-0 flex items-center justify-center opacity-30">
                            <svg width="10" height="10" viewBox="0 0 24 24" stroke="black" strokeWidth="2"><path d="M2 12h20L12 2l-10 10" /></svg>
                        </div>
                    </div>
                    <div className="absolute -top-3 right-1/4 w-20 h-8 bg-[#8B5CF6] border-2 border-[#0B1D3A] z-20 shadow-sm" style={{ transform: 'rotate(4deg)' }}>
                        <div className="absolute inset-0 flex items-center justify-center opacity-30">
                            <svg width="10" height="10" viewBox="0 0 24 24" stroke="black" strokeWidth="2"><path d="M2 12h20L12 2l-10 10" /></svg>
                        </div>
                    </div>

                    {/* Desktop Dashed Connecting Lines (Top Branch) extending around */}
                    <div className="absolute pointer-events-none hidden md:block" style={{ top: '100%', left: '50%', height: '100px', width: '2px', borderLeft: '2px dashed #0B1D3A', zIndex: 0 }}>
                        <div className="absolute -bottom-1 -left-[5px] w-2 h-2 border-b-2 border-r-2 border-[#0B1D3A] rotate-45" />
                    </div>

                    {/* Giant Sticky Card */}
                    <div className="bg-[#FFFBEB] border-2 border-[#0B1D3A] rounded-sm p-10 md:p-16 shadow-[12px_12px_0px_#2563EB] flex flex-col items-center text-center relative max-md:p-8">

                        {/* Scribble Price Tag */}
                        <div className="absolute -left-6 -top-6 bg-[#FCD34D] border-2 border-[#0B1D3A] px-6 py-3 rounded-xl rotate-[-12deg] shadow-[4px_4px_0px_#0B1D3A] z-30 transition-transform hover:rotate-[-5deg]">
                            <span className="font-black text-[#0B1D3A] text-2xl">₹4,999</span>
                        </div>

                        <h2 className="font-black text-[#0B1D3A] tracking-tight leading-[1.1] mb-6" style={{ fontSize: 'clamp(36px, 5vw, 60px)' }}>
                            See Demo First.<br />
                            Pay Later.
                        </h2>

                        <p className="text-[#475569] font-medium leading-relaxed text-[18px] max-w-[500px] mb-12">
                            We build your website. You see the live demo. If you love it, you pay. If not, you pay zero. No advance. No risk.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-10 text-left">
                            {[
                                { text: 'No Advance Required', icon: 'M5 13l4 4L19 7' },
                                { text: 'Ready in 48 Hours', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
                                { text: 'No Hidden Charges', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
                            ].map(({ text, icon }) => (
                                <div key={text} className="flex items-center gap-3 bg-white border-2 border-[#0B1D3A] p-4 shadow-[3px_3px_0px_#0B1D3A] transition-transform hover:-translate-y-1">
                                    <div className="text-[#16A34A]">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                            <path d={icon} />
                                        </svg>
                                    </div>
                                    <span className="font-bold text-[#0B1D3A] text-[15px]">{text}</span>
                                </div>
                            ))}
                        </div>

                        <button onClick={openModal}
                            className="btn bg-[#0B1D3A] text-white font-black rounded-lg border-2 border-[#0B1D3A] shadow-[4px_4px_0px_#EF4444] hover:shadow-[6px_6px_0px_#DC2626] hover:-translate-y-1 transition-all w-full max-w-[400px]"
                            style={{ padding: '20px', fontSize: '18px', letterSpacing: '0.5px' }}>
                            Claim Your Risk-Free Demo →
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Offer;
