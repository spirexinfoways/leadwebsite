import React from 'react';

const portfolioItems = [
    { label: 'Restaurant Business', tag: 'Food & Dining', shadow: '#F59E0B' }, // Orange
    { label: 'Boutique & Fashion', tag: 'Retail', shadow: '#EC4899' }, // Pink
    { label: 'Clinic / Healthcare', tag: 'Medical', shadow: '#14B8A6' }, // Teal
];

const Trust = ({ openModal }) => {
    return (
        <section id="trust" className="relative py-24 bg-white overflow-hidden text-[#0B1D3A]" style={{ minHeight: '90vh' }}>
            {/* Grid Background */}
            <div className="absolute inset-0 pointer-events-none opacity-40"
                style={{
                    backgroundImage: 'linear-gradient(#CBD5E1 1px, transparent 1px), linear-gradient(90deg, #CBD5E1 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                    backgroundPosition: 'center center'
                }}
            />

            {/* Doodle: Star bursts (Various positions) */}
            <div className="absolute top-10 left-10 pointer-events-none hidden md:block" style={{ opacity: 0.8 }}>
                <svg width="80" height="80" viewBox="0 0 100 100" fill="none" stroke="#FCD34D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M50 10L50 30 M50 70L50 90 M10 50L30 50 M70 50L90 50 M20 20L35 35 M65 65L80 80 M80 20L65 35 M35 65L20 80" />
                </svg>
            </div>

            <div className="container-custom relative z-10">
                <div className="text-center mb-16 flex flex-col items-center">
                    <div className="bg-[#E0E7FF] text-[#4338CA] px-6 py-2 my-[-90px] mb-[100px] rounded-full text-[14px] font-extrabold mb-6 shadow-sm tracking-wide border-2 border-[#4338CA]">
                        Real Work. Real Results.
                    </div>
                </div>

                {/* Dashed line connecting from top */}
                <div className="absolute pointer-events-none hidden md:block" style={{ top: '-40px', left: '50%', height: '140px', width: '2px', borderLeft: '2px dashed #0B1D3A', zIndex: 0 }}>
                    {/* Horizontal split for portfolio */}
                    <div className="absolute bottom-0 left-[-300px] right-[-300px] border-b-2 border-dashed border-[#0B1D3A]" />
                    <div className="absolute -bottom-[2px] left-[-300px] w-2 h-2 border-b-2 border-r-2 border-[#0B1D3A] rotate-45" />
                    <div className="absolute -bottom-[2px] right-[-300px] w-2 h-2 border-b-2 border-r-2 border-[#0B1D3A] rotate-45" />
                </div>

                {/* Portfolio Grid - Note Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 pt-4 relative px-4">
                    {portfolioItems.map(({ label, tag, shadow }, i) => (
                        <div key={label} className="relative transition-transform hover:-translate-y-2 cursor-pointer group">
                            {/* Tape */}
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-14 h-6 bg-[#8B5CF6] border-2 border-[#0B1D3A] z-20 shadow-sm" style={{ transform: `rotate(${i % 2 === 0 ? '-3deg' : '2deg'})` }}>
                                <div className="absolute inset-0 flex items-center justify-center opacity-30">
                                    <svg width="10" height="10" viewBox="0 0 24 24" stroke="black" strokeWidth="2"><path d="M2 12h20L12 2l-10 10" /></svg>
                                </div>
                            </div>

                            {/* Card Details */}
                            <div className="bg-white border-2 border-[#0B1D3A] rounded-sm h-[320px] flex flex-col p-6 text-center transition-all duration-300 group-hover:bg-[#F8FAFC]"
                                style={{ boxShadow: `8px 8px 0px ${shadow}` }}>

                                {/* Photo frame mockup */}
                                <div className="w-full flex-grow border-2 border-[#0B1D3A] bg-[#F1F5F9] mb-6 flex flex-col relative overflow-hidden">
                                    {/* Browser dot header */}
                                    <div className="border-b-2 border-[#0B1D3A] h-6 flex items-center gap-1.5 px-3 shrink-0 bg-[#E2E8F0]">
                                        <div className="w-2 h-2 rounded-full border-2 border-[#0B1D3A] bg-white" />
                                        <div className="w-2 h-2 rounded-full border-2 border-[#0B1D3A] bg-white" />
                                    </div>
                                    <div className="flex-1 w-full bg-[#CBD5E1] opacity-50 relative flex items-center justify-center">
                                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#475569" strokeWidth="2"><path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                    </div>
                                </div>

                                <div>
                                    <span className="font-black text-[#0B1D3A] text-[12px] uppercase tracking-wider mb-1 block opacity-70 border-b-2 border-[#0B1D3A] border-dashed inline-block pb-1">{tag}</span>
                                    <h3 className="font-extrabold text-[#0B1D3A] text-[18px]">{label}</h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Founder Strip - Profile Note */}
                <div className="relative max-w-[700px] mx-auto transition-transform hover:-translate-y-1">
                    {/* Tape */}
                    <div className="absolute -top-3 right-8 w-16 h-6 bg-[#8B5CF6] border-2 border-[#0B1D3A] z-20 shadow-sm" style={{ transform: 'rotate(2deg)' }}>
                        <div className="absolute inset-0 flex items-center justify-center opacity-30">
                            <svg width="10" height="10" viewBox="0 0 24 24" stroke="black" strokeWidth="2"><path d="M2 12h20L12 2l-10 10" /></svg>
                        </div>
                    </div>

                    {/* Connecting line */}
                    <div className="absolute pointer-events-none hidden md:block" style={{ top: '-60px', left: '50%', height: '60px', width: '2px', borderLeft: '2px dashed #0B1D3A', zIndex: 0 }}>
                        <div className="absolute -bottom-1 -left-[5px] w-2 h-2 border-b-2 border-r-2 border-[#0B1D3A] rotate-45" />
                    </div>

                    <div className="bg-[#EFF6FF] border-2 border-[#0B1D3A] p-8 md:p-10 shadow-[8px_8px_0px_#3B82F6] rounded-sm flex items-center gap-8 max-md:flex-col max-md:text-center">
                        <div className="w-24 h-24 rounded-full border-2 border-[#0B1D3A] bg-white shrink-0 flex items-center justify-center shadow-[4px_4px_0px_#0B1D3A] overflow-hidden">
                            <span className="font-bold text-[#475569] text-xs">Photo</span>
                        </div>
                        <div>
                            <h4 className="font-extrabold text-[#0B1D3A] text-[22px] mb-2">Spirex Infoways</h4>
                            <p className="text-[#2563EB] font-bold text-[13px] mb-3 uppercase tracking-wider border-b-2 border-[#2563EB] border-dashed inline-block pb-1">Built 200+ Websites</p>
                            <p className="text-[#475569] font-medium leading-relaxed italic">
                                "We don't just build websites. We build lead-generation assets. You literally see your demo before you pay a single rupee. Complete transparency."
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Trust;
