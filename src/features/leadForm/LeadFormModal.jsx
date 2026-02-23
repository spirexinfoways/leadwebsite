import React, { useState, useEffect } from 'react';
import { submitLead } from './leadService';

const LeadFormModal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        businessName: '',
        category: '',
        mobile: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
            setTimeout(() => {
                if (isSuccess) {
                    setFormData({ businessName: '', category: '', mobile: '' });
                    setIsSuccess(false);
                }
            }, 300);
        }
        return () => { document.body.style.overflow = ''; };
    }, [isOpen, isSuccess]);

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.businessName.trim() || !formData.category || !formData.mobile.trim()) {
            alert("Please fill out all fields carefully.");
            return;
        }
        setIsSubmitting(true);
        try {
            await submitLead(formData);
            setIsSuccess(true);
        } catch (error) {
            console.error('Error submitting form:', error);
            alert("There was an issue submitting your request. Please try contacting us via WhatsApp.");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!isOpen && !isSuccess) return null;

    return (
        <div className={`fixed inset-0 bg-[#0B1D3A]/80 backdrop-blur-sm z-[100] flex justify-center items-center transition-all duration-300 px-4 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
            onClick={(e) => { e.stopPropagation(); onClose(); }}>

            <div
                className={`bg-[#FFFBEB] w-full max-w-[460px] border-[3px] border-[#0B1D3A] p-10 relative transition-all duration-300 shadow-[12px_12px_0px_#2563EB] max-md:max-w-full max-md:border-b-0 max-md:absolute max-md:bottom-0 max-md:p-8 max-md:pt-14 ${isOpen ? 'translate-y-0 scale-100 opacity-100' : 'translate-y-5 scale-95 opacity-0 max-md:translate-y-full'}`}
                onClick={e => e.stopPropagation()}
            >
                {/* Purple Tape */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-20 h-8 bg-[#8B5CF6] border-2 border-[#0B1D3A] z-20 shadow-sm" style={{ transform: 'rotate(-2deg)' }}>
                    <div className="absolute inset-0 flex items-center justify-center opacity-30">
                        <svg width="10" height="10" viewBox="0 0 24 24" stroke="black" strokeWidth="2"><path d="M2 12h20L12 2l-10 10" /></svg>
                    </div>
                </div>

                {/* Close Button Cross Doodle */}
                <div onClick={(e) => { e.stopPropagation(); onClose(); }}
                    className="absolute top-5 right-5 w-10 h-10 border-2 border-[#0B1D3A] bg-white flex items-center justify-center text-xl text-[#0B1D3A] cursor-pointer transition-transform hover:scale-110 hover:-rotate-12 hover:bg-[#FEF2F2] max-md:top-3 max-md:right-3 shadow-[2px_2px_0px_#0B1D3A]"
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6L6 18M6 6l12 12" /></svg>
                </div>

                {!isSuccess ? (
                    <div>
                        <div className="text-center mb-8 relative">
                            {/* Doodle outline around title */}
                            <h3 className="text-3xl font-black text-[#0B1D3A] mb-2 leading-tight relative inline-block">
                                Get Your Demo
                                <svg className="absolute w-[110%] h-[120%] -top-[10%] -left-[5%] text-[#FCD34D] -z-10" viewBox="0 0 100 100" preserveAspectRatio="none">
                                    <path d="M5 20 Q50 5 95 20 Q105 50 95 80 Q50 95 5 80 Q-5 50 5 20" fill="currentColor" stroke="#0B1D3A" strokeWidth="1" />
                                </svg>
                            </h3>
                            <p className="text-[15px] text-[#475569] font-bold mt-4">Fill out the form below. We'll show you the demo fast.</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-[14px] font-black uppercase text-[#0B1D3A] mb-2" htmlFor="businessName">Business Name / Your Name</label>
                                <input
                                    type="text"
                                    id="businessName"
                                    name="businessName"
                                    value={formData.businessName}
                                    onChange={handleChange}
                                    className="w-full p-4 border-2 border-[#0B1D3A] bg-white text-[16px] font-bold text-[#0B1D3A] outline-none transition-all shadow-inner focus:shadow-[4px_4px_0px_#2563EB] focus:-translate-y-1"
                                    placeholder="e.g. Acme Corp"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-[14px] font-black uppercase text-[#0B1D3A] mb-2" htmlFor="category">Business Category</label>
                                <select
                                    id="category"
                                    name="category"
                                    value={formData.category}
                                    onChange={handleChange}
                                    className="w-full p-4 border-2 border-[#0B1D3A] bg-white text-[16px] font-bold text-[#0B1D3A] outline-none transition-all shadow-inner focus:shadow-[4px_4px_0px_#2563EB] focus:-translate-y-1 appearance-none"
                                    style={{ backgroundImage: 'linear-gradient(45deg, transparent 50%, #0B1D3A 50%), linear-gradient(135deg, #0B1D3A 50%, transparent 50%)', backgroundPosition: 'calc(100% - 20px) calc(1em + 6px), calc(100% - 15px) calc(1em + 6px)', backgroundSize: '5px 5px, 5px 5px', backgroundRepeat: 'no-repeat' }}
                                    required
                                >
                                    <option value="" disabled>Select Category</option>
                                    <option value="retail">Retail / Shop</option>
                                    <option value="service">Service Provider</option>
                                    <option value="clinic">Clinic / Hospital</option>
                                    <option value="restaurant">Restaurant / Cafe</option>
                                    <option value="agency">Agency / Consulting</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-[14px] font-black uppercase text-[#0B1D3A] mb-2" htmlFor="mobile">WhatsApp Number</label>
                                <input
                                    type="tel"
                                    id="mobile"
                                    name="mobile"
                                    value={formData.mobile}
                                    onChange={handleChange}
                                    className="w-full p-4 border-2 border-[#0B1D3A] bg-white text-[16px] font-bold text-[#0B1D3A] outline-none transition-all shadow-inner focus:shadow-[4px_4px_0px_#2563EB] focus:-translate-y-1"
                                    placeholder="+91 98765 43210"
                                    pattern="[0-9\+\-\s]{10,15}"
                                    required
                                />
                            </div>

                            <button
                                onClick={e => e.stopPropagation()}
                                type="submit"
                                className={`w-full bg-[#0B1D3A] text-white font-black border-2 border-[#0B1D3A] py-4 text-[18px] tracking-wide shadow-[6px_6px_0px_#10B981] hover:shadow-[8px_8px_0px_#059669] hover:-translate-y-1 transition-all ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Submitting...' : 'Claim My Demo →'}
                            </button>

                            <div className="text-center text-[12px] font-bold text-[#64748B] flex items-center justify-center gap-2">
                                <svg className="w-4 h-4 text-[#16A34A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                                100% Secure. No Spam.
                            </div>
                        </form>
                    </div>
                ) : (
                    <div className="text-center py-10">
                        {/* Huge checkmark scribble */}
                        <div className="text-[#10B981] flex justify-center mb-6 animate-[bounce_1s_ease-in-out_infinite]">
                            <svg width="80" height="80" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M20 50 L40 70 L80 20" />
                            </svg>
                        </div>
                        <h3 className="text-3xl font-black text-[#0B1D3A] mb-4">You're All Set!</h3>
                        <p className="text-[18px] font-bold text-[#475569] mb-8">Our team will message you on WhatsApp within 24 hours.</p>
                        <button onClick={(e) => { e.stopPropagation(); onClose(); }} className="btn bg-white text-[#0B1D3A] font-black border-2 border-[#0B1D3A] py-3 px-10 text-[16px] shadow-[4px_4px_0px_#0B1D3A] hover:bg-[#F8FAFC]">
                            Close
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default LeadFormModal;
