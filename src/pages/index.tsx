import React, { useState, useRef } from "react";
import Layout from "../components/Layout/Layout";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Steps from "../components/Steps/Steps";
import Features from "../components/Features/Features";
import Footer from "../components/Footer/Footer";

import { SECTION_IDS } from "../constants/links";

export type SectionId = (typeof SECTION_IDS)[keyof typeof SECTION_IDS];

export interface NavItem {
  id: SectionId;
  label: string;
  ref?: React.RefObject<HTMLElement>; // Для скролла
  path?: string;
}

const IndexPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<SectionId>(SECTION_IDS.HERO);

  const heroRef = useRef<HTMLElement>(null);
  const instructionsRef = useRef<HTMLElement>(null);
  const communityRef = useRef<HTMLElement>(null);

  const navItems: NavItem[] = [
    { id: SECTION_IDS.HERO, label: "Главная", ref: heroRef },
    { id: SECTION_IDS.INSTRUCTIONS, label: "Инструкции", ref: instructionsRef },
    {
      id: SECTION_IDS.COMMUNITY_FEATURES,
      label: "Преимущества",
      ref: communityRef,
    },
  ];

  const handleNavClick = (id: SectionId) => {
    setActiveTab(id);
    const item = navItems.find((navItem) => navItem.id === id);
    item?.ref?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <Layout
      title="Лучший ВПН для России"
      description="Бесплатный, быстрый, безопасный и анонимный VPN-сервис полностью управляемый вами в Telegram боте @beefreevpnbot"
    >
      <Header
        navItems={navItems}
        activeTab={activeTab}
        onNavClick={handleNavClick}
      />
      <Hero
        ref={heroRef}
        onArrowClick={() => handleNavClick(SECTION_IDS.INSTRUCTIONS)}
      />
      <Steps ref={instructionsRef} />
      <Features ref={communityRef} />
      <Footer navItems={navItems} onNavClick={handleNavClick} />{" "}
    </Layout>
  );
};

export default IndexPage;
