import React from 'react';
import { Navigation } from './components/navigation/Navigation';
import { Hero } from './components/home/Hero';
import { About } from './components/sections/About';
import { Schedule } from './components/sections/Schedule';
import { Speakers } from './components/sections/Speakers';
import { Venue } from './components/sections/Venue';
import { FAQ } from './components/sections/FAQ';
import { Contact } from './components/sections/Contact';
import { ScrollProgress } from './components/home/ScrollProgress';
import { ParticlesBackground } from './components/shared/ParticlesBackground';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n/config';

export default function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <div className="min-h-screen bg-gradient-to-b from-primary/5 to-light/20 overflow-x-hidden">
        <ParticlesBackground />
        <ScrollProgress />
        <Navigation />
        <main className="pt-20">
          <Hero />
          <About />
          <Schedule />
          <Speakers />
          <Venue />
          <FAQ />
          <Contact />
        </main>
      </div>
    </I18nextProvider>
  );
}