import React from 'react';
import { ScrollProgress } from './components/ScrollProgress';
import { Navbar } from './components/Navbar';
import { FloatingPetals } from './components/FloatingPetals';
import { Hero } from './components/Hero';
import { CelebrationSection } from './sections/CelebrationSection';
import { WisdomSection } from './sections/WisdomSection';
import { LearningSection } from './sections/LearningSection';
import { TogethernessSection } from './sections/TogethernessSection';
import { FutureSection } from './sections/FutureSection';
import { BlessingsSection } from './sections/BlessingsSection';

export const App: React.FC = () => {
  React.useEffect(() => {
    const splash = document.getElementById('splash-loader');
    if (splash) {
      splash.classList.add('hidden');
      setTimeout(() => splash.remove(), 500);
    }
  }, []);

  return (
    <div className="app-root">
      {/* Scroll Progress Bar */}
      <ScrollProgress />

      {/* Floating Breeze of Flower Petals */}
      <FloatingPetals />

      {/* Navigation Header */}
      <Navbar />

      {/* Main Single Page Scroll Story */}
      <main>
        {/* Hero: A Festive First Impression */}
        <Hero />

        {/* Section A: The Celebration */}
        <CelebrationSection />

        {/* Section B: Wisdom & Knowledge */}
        <WisdomSection />

        {/* Section C: Study, Explore, Create */}
        <LearningSection />

        {/* Section D: Gratitude & Togetherness */}
        <TogethernessSection />

        {/* Section E: Dreams & Possibilities */}
        <FutureSection />

        {/* Section F: Final Blessings */}
        <BlessingsSection />
      </main>
    </div>
  );
};

export default App;
