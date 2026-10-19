import React, { Suspense, lazy } from 'react';
import { ScrollProgress } from './components/ScrollProgress';
import { Navbar } from './components/Navbar';
import { FloatingPetals } from './components/FloatingPetals';
import { Hero } from './components/Hero';
import { CelebrationSection } from './sections/CelebrationSection';

const WisdomSection = lazy(() => import('./sections/WisdomSection').then(m => ({ default: m.WisdomSection })));
const LearningSection = lazy(() => import('./sections/LearningSection').then(m => ({ default: m.LearningSection })));
const TogethernessSection = lazy(() => import('./sections/TogethernessSection').then(m => ({ default: m.TogethernessSection })));
const FutureSection = lazy(() => import('./sections/FutureSection').then(m => ({ default: m.FutureSection })));
const BlessingsSection = lazy(() => import('./sections/BlessingsSection').then(m => ({ default: m.BlessingsSection })));


export const App: React.FC = () => {
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

        {/* Below-the-fold sections wrapped in Suspense for lightning-fast initial page view */}
        <Suspense fallback={<div style={{ minHeight: '60vh', background: 'var(--color-cream-light)' }} />}>
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
        </Suspense>
      </main>
    </div>
  );
};

export default App;
