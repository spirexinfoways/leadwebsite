import React, { useState, useEffect } from 'react';

const Header = ({ openModal }) => {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }, [isMenuOpen]);

    const navLinks = [
        { label: 'Why Us', href: '#problem' },
        { label: 'What\'s Included', href: '#solution' },
        { label: 'Pricing', href: '#offer' },
        { label: 'Portfolio', href: '#trust' },
    ];

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <header
            className="fixed top-0 w-full z-40 transition-all duration-300"
            style={{
                background: scrolled ? 'rgba(255,255,255,0.95)' : '#fff',
                borderBottom: scrolled ? '2px solid #0B1D3A' : 'none',
                backdropFilter: 'blur(8px)',
                padding: '0',
            }}
        >
            <div className="container-custom flex justify-between items-center relative z-50" style={{ height: '72px' }}>
                {/* Logo */}
                <div className="relative cursor-pointer flex items-center shrink-0" onClick={() => { openModal(); closeMenu(); }}>
                    <img
                        src="/logo-full-cropped2.png"
                        alt="Spirex Infoways"
                        className="hidden sm:block"
                        style={{ height: '35px', width: 'auto', objectFit: 'contain' }}
                    />
                    <img
                        src="/logo-icon-cropped2.png"
                        alt="Spirex Infoways"
                        className="sm:hidden"
                        style={{ height: '56px', width: 'auto', objectFit: 'contain' }}
                    />
                </div>

                {/* Desktop Nav links */}
                <nav className="flex items-center gap-6 xl:gap-8 max-lg:hidden">
                    {navLinks.map(({ label, href }) => (
                        <a key={label} href={href}
                            className="relative text-[15px] font-black text-[#0B1D3A] uppercase tracking-wider transition-all hover:-translate-y-0.5 group"
                            style={{ textDecoration: 'none' }}>
                            {label}
                            {/* Hover sketch underline */}
                            <svg className="absolute w-full h-2 -bottom-1 left-0 text-[#2563EB] opacity-0 group-hover:opacity-100 transition-opacity" viewBox="0 0 100 20" preserveAspectRatio="none">
                                <path d="M5 15Q50 5 100 10 T195 10" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                            </svg>
                        </a>
                    ))}
                </nav>

                {/* Mobile Menu Toggle Button */}
                <button
                    onClick={toggleMenu}
                    className="lg:hidden flex flex-col items-center justify-center w-12 h-12 border-2 border-[#0B1D3A] bg-white shadow-[3px_3px_0px_#0B1D3A] rounded-sm z-50 transition-transform active:translate-y-1 active:translate-x-1 active:shadow-none"
                    aria-label="Toggle menu"
                >
                    <div className="relative w-6 h-5">
                        <span className={`absolute left-0 w-full h-[3px] bg-[#0B1D3A] rounded-sm transition-all duration-300 ${isMenuOpen ? 'top-2 rotate-45' : 'top-0'}`}></span>
                        <span className={`absolute left-0 top-2 w-full h-[3px] bg-[#0B1D3A] rounded-sm transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                        <span className={`absolute left-0 w-full h-[3px] bg-[#0B1D3A] rounded-sm transition-all duration-300 ${isMenuOpen ? 'top-2 -rotate-45' : 'top-4'}`}></span>
                    </div>
                </button>

                {/* Desktop CTA */}
                <button onClick={() => { openModal(); closeMenu(); }}
                    className="btn bg-[#2563EB] text-white font-black border-2 border-[#0B1D3A] shadow-[4px_4px_0px_#0B1D3A] hover:shadow-[6px_6px_0px_#0B1D3A] hover:-translate-y-0.5 transition-all hidden sm:block"
                    style={{ padding: '10px 24px', fontSize: '15px' }}>
                    Start Now →
                </button>
            </div>

            {/* Mobile Fullscreen Menu overlay */}
            <div className={`fixed inset-0 bg-[#FFFBEB] z-40 flex flex-col pt-24 pb-6 px-6 transition-all duration-300 min-h-screen ${isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'}`}>

                {/* Grid Background */}
                <div className="absolute inset-0 pointer-events-none opacity-[0.35]"
                    style={{
                        backgroundImage: 'linear-gradient(#CBD5E1 1px, transparent 1px), linear-gradient(90deg, #CBD5E1 1px, transparent 1px)',
                        backgroundSize: '40px 40px',
                        backgroundPosition: 'center center'
                    }}
                />

                <div className="relative z-10 flex flex-col h-full justify-between">
                    {/* Navigation Links */}
                    <nav className="flex flex-col gap-6 mt-8">
                        {navLinks.map(({ label, href }, index) => (
                            <a
                                key={label}
                                href={href}
                                onClick={closeMenu}
                                className="block w-full text-center"
                            >
                                <div className="inline-block relative">
                                    <h2 className="text-[32px] font-black text-[#0B1D3A] uppercase tracking-wider title-stroke hover:text-[#2563EB] transition-colors">{label}</h2>
                                    <svg className="absolute w-[110%] h-4 -bottom-1 -left-[5%] text-[#FCD34D] opacity-70" viewBox="0 0 100 20" preserveAspectRatio="none">
                                        <path d="M5 15Q50 5 100 10 T195 10" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
                                    </svg>
                                </div>
                            </a>
                        ))}
                    </nav>

                    {/* Bottom Info / CTA Area */}
                    <div className="mt-auto pt-10 border-t-2 border-dashed border-[#0B1D3A]">
                        <button
                            onClick={() => { closeMenu(); openModal(); }}
                            className="w-full bg-[#0B1D3A] text-white font-black border-[3px] border-[#0B1D3A] py-4 text-[18px] tracking-wide shadow-[6px_6px_0px_#2563EB] active:translate-y-1 active:translate-x-1 active:shadow-none transition-all mb-6"
                        >
                            Get Free Demo
                        </button>

                        <div className="text-center font-bold text-[#475569]">
                            <p className="mb-2">Need Help?</p>
                            <a href="https://wa.me/919876543210" className="text-[#16A34A] text-lg hover:underline decoration-2 underline-offset-4 flex justify-center items-center gap-2">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                Chat on WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
