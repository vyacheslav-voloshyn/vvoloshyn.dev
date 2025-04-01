import React from 'react';

import AboutSection from '@/components/sections/about';
import ContactSection from '@/components/sections/contact';
import HeaderSection from '@/components/sections/header';
import HeroSection from '@/components/sections/hero';
import ProjectsSection from '@/components/sections/projects';
import SkillsSection from '@/components/sections/skills';

export default function Home() {
  return (
    <>
      <HeaderSection />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </>
  );
}
