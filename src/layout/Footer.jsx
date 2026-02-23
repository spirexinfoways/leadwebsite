import React from 'react';

const Footer = () => {
    return (
        <footer className="relative bg-white text-[#0B1D3A] max-md:pb-[100px] border-t-2 border-[#0B1D3A] overflow-hidden">
            {/* Grid Background */}
            <div className="absolute inset-0 pointer-events-none opacity-40"
                style={{
                    backgroundImage: 'linear-gradient(#CBD5E1 1px, transparent 1px), linear-gradient(90deg, #CBD5E1 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                    backgroundPosition: 'center center'
                }}
            />

            {/* Top wavy connecting line */}
            <div className="absolute top-0 left-0 w-full h-4 text-[#0B1D3A] overflow-hidden leading-zero">
                <svg viewBox="0 0 1200 20" preserveAspectRatio="none" className="w-full h-full">
                    <path d="M0,10 C150,20 350,0 600,10 C850,20 1050,0 1200,10" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="8 8" />
                </svg>
            </div>

            <div className="container-custom relative z-10 py-[64px]">
                {/* Top row */}
                <div className="grid gap-12 pb-12 mb-8 border-b-2 border-dashed border-[#0B1D3A]/30" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>

                    {/* Brand Note */}
                    <div className="bg-[#FFF8E7] border-2 border-[#0B1D3A] p-6 shadow-[6px_6px_0px_#0B1D3A] rounded-sm transform rotate-[-1deg] self-start max-w-[320px]">
                        {/* Tape */}
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-5 bg-[#8B5CF6] border-2 border-[#0B1D3A] z-20 shadow-sm" style={{ transform: 'rotate(2deg)' }}>
                            <div className="absolute inset-0 flex items-center justify-center opacity-30">
                                <svg width="8" height="8" viewBox="0 0 24 24" stroke="black" strokeWidth="2"><path d="M2 12h20L12 2l-10 10" /></svg>
                            </div>
                        </div>

                        <div style={{ fontSize: '24px', fontWeight: 900, letterSpacing: '-0.02em', marginBottom: '8px', color: '#0B1D3A' }}>
                            Spirex<span style={{ color: '#2563EB' }}>.</span>
                            <span style={{ fontSize: '11px', fontWeight: 800, color: '#0B1D3A', marginLeft: '4px', letterSpacing: '0.05em', textTransform: 'uppercase', verticalAlign: 'middle' }}>
                                Infoways
                            </span>
                        </div>
                        <p style={{ color: '#475569', fontSize: '14px', lineHeight: '1.6', fontWeight: 600 }}>
                            Professional websites for Indian small businesses. Delivered in 48 hours. Starting at <span className="text-[#DC2626] font-black">₹4,999</span>.
                        </p>
                    </div>

                    {/* Contact */}
                    <div className="mt-4 md:ml-8">
                        <p className="inline-block border-2 border-[#2563EB] bg-[#DBEAFE] text-[#1D4ED8] px-3 py-1 rounded-sm text-[12px] font-extrabold uppercase tracking-wider mb-6 rotate-[-2deg]">Contact Info</p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            <a href="mailto:info@spirexinfoways.com"
                                className="font-bold text-[#475569] text-[15px] underline underline-offset-4 decoration-2 decoration-[#CBD5E1] transition-colors hover:text-[#2563EB] hover:decoration-[#2563EB]"
                            >
                                info@spirexinfoways.com
                            </a>
                            <a href="tel:+919876543210"
                                className="font-bold text-[#475569] text-[15px] underline underline-offset-4 decoration-2 decoration-[#CBD5E1] transition-colors hover:text-[#2563EB] hover:decoration-[#2563EB]"
                            >
                                +91 98765 43210
                            </a>
                        </div>
                    </div>

                    {/* Legal */}
                    <div className="mt-4">
                        <p className="inline-block border-2 border-[#DC2626] bg-[#FEE2E2] text-[#B91C1C] px-3 py-1 rounded-sm text-[12px] font-extrabold uppercase tracking-wider mb-6 rotate-[2deg]">Legal boring stuff</p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            {['Privacy Policy', 'Terms of Service', 'Refund Policy'].map(link => (
                                <a key={link} href="#"
                                    className="font-bold text-[#475569] text-[15px] hover:text-[#0B1D3A] hover:-translate-y-0.5 transition-all flex items-center gap-2"
                                >
                                    <span className="w-2 h-2 rounded-full border border-[#0B1D3A] bg-[#CBD5E1]" />
                                    {link}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom row */}
                <div className="flex items-center justify-between max-md:flex-col max-md:gap-4 max-md:text-center font-bold">
                    <p style={{ color: '#64748B', fontSize: '13px' }}>
                        © 2026 Spirex Infoways. All rights reserved.
                    </p>
                    <p style={{ color: '#64748B', fontSize: '13px' }}>
                        Crafted by{' '}
                        <a href="https://spirexinfoways.com" target="_blank" rel="noreferrer"
                            className="text-[#2563EB] relative inline-block group ml-1">
                            <span className="relative z-10">spirexinfoways.com</span>
                            <span className="absolute bottom-0 left-0 w-full h-[6px] bg-[#BFDBFE] -z-10 group-hover:h-full transition-all"></span>
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
