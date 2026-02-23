import React, { useState, useEffect } from 'react';

// Layout
import Header from './layout/Header';
import Footer from './layout/Footer';

// Sections
import Hero from './components/sections/Hero';
import Problem from './components/sections/Problem';
import Solution from './components/sections/Solution';
import Offer from './components/sections/Offer';
import Trust from './components/sections/Trust';

// UI & Features
import MobileStickyCTA from './components/ui/MobileStickyCTA';
import LeadFormModal from './features/leadForm/LeadFormModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Auto-open modal after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      openModal();
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header openModal={openModal} />

      {/* Clicking anywhere on the main body opens the modal */}
      <main className="flex-grow cursor-pointer" onClick={openModal}>
        <Hero openModal={openModal} />
        <Problem openModal={openModal} />
        <Solution openModal={openModal} />
        <Offer openModal={openModal} />
        <Trust openModal={openModal} />
      </main>

      <Footer />

      <MobileStickyCTA openModal={openModal} />
      <LeadFormModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default App;
