import React from 'react';

const MobileStickyCTA = ({ openModal }) => {
    return (
        <div className="fixed bottom-0 left-0 w-full bg-[#1E293B] p-4 shadow-[0_-8px_0px_#0B1D3A] z-[90] hidden max-md:block border-t-[4px] border-[#0B1D3A]">
            <button
                // We use stopPropagation so we don't trigger the global click twice,
                // though the global click also calls openModal.
                onClick={(e) => { e.stopPropagation(); openModal(); }}
                className="w-full bg-[#FCD34D] text-[#0B1D3A] font-black border-[3px] border-[#0B1D3A] py-4 rounded-lg shadow-[4px_4px_0px_#0B1D3A] active:shadow-none active:translate-y-[4px] active:translate-x-[4px] transition-all text-[18px] uppercase tracking-wider"
            >
                Start My Project Now
            </button>

            {/* WhatsApp Floating Button for Mobile - Doodle Style */}
            <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noreferrer"
                className="fixed bottom-[110px] right-4 bg-[#22C55E] text-white w-[60px] h-[60px] rounded-full flex justify-center items-center shadow-[4px_4px_0px_#0B1D3A] border-[3px] border-[#0B1D3A] z-[80] transition-transform hover:scale-105 hover:-rotate-12 active:translate-y-[4px] active:translate-x-[4px] active:shadow-none"
                aria-label="Chat on WhatsApp"
            >
                {/* Hand-drawn style WhatsApp icon */}
                <svg viewBox="0 0 24 24" className="w-[34px] h-[34px] fill-current" stroke="#0B1D3A" strokeWidth="1">
                    <path d="M12.031 3c-4.97 0-9 4.032-9 9.003 0 1.637.447 3.195 1.282 4.542L3 21l4.585-1.204a8.96 8.96 0 0 0 4.446 1.173h.001c4.969 0 9-4.032 9-9.002s-4.03-9.004-9-9.004zm0 16.516a7.487 7.487 0 0 1-3.794-1.026l-.271-.161-2.822.74.752-2.753-.177-.282a7.442 7.442 0 0 1-1.156-3.992c0-4.14 3.366-7.505 7.505-7.505s7.505 3.366 7.505 7.505-3.365 7.505-7.505 7.505zm3.899-5.32c-.214-.107-1.266-.624-1.463-.695-.196-.071-.34-.107-.482.107-.143.214-.554.695-.678.838-.125.143-.25.161-.464.054-.214-.107-.905-.334-1.722-1.066-.636-.57-1.065-1.275-1.19-1.489-.125-.214-.013-.33.094-.436.096-.096.214-.251.321-.375.107-.125.143-.214.214-.357.071-.143.036-.268-.018-.375-.054-.107-.482-1.16-.659-1.589-.174-.418-.352-.361-.482-.368-.125-.007-.268-.007-.41-.007s-.375.054-.572.268c-.196.214-.75.733-.75 1.787s.768 2.074.875 2.217c.107.143 1.516 2.316 3.674 3.245.513.22 9.135.378 1.23.46.302.083.695.275.952.22.285-.061.905-.371 1.031-.727.125-.357.125-.662.089-.727-.035-.064-.142-.1-.356-.208z" />
                </svg>
            </a>
        </div>
    );
};

export default MobileStickyCTA;
