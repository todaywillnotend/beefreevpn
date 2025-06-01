import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import styles from "./Header.module.scss";

import BeeFreeLogo from "../../icons/BeeFreeLogo";
import TelegramIcon from "../../icons/TelegramIcon";
import { NavItem } from "../../pages/index";
import { SECTION_IDS } from "../../constants/links";
export type SectionId = (typeof SECTION_IDS)[keyof typeof SECTION_IDS];

import { TELEGRAM_BOT_URL } from "../../constants/links";

interface HeaderProps {
  navItems: NavItem[];
  activeTab: SectionId;
  onNavClick: (id: SectionId) => void;
}

const Header: React.FC<HeaderProps> = ({ navItems, activeTab, onNavClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={`${styles.headerContainer} container`}>
        <Link
          to="/"
          className={styles.logoLink}
          aria-label="BEE FREE VPN Главная"
        >
          <BeeFreeLogo className={styles.logoIcon} />
        </Link>

        <nav
          id="main-navigation"
          className={`${styles.navigation} ${isMenuOpen ? styles.open : ""}`}
          aria-label="Основная навигация"
        >
          {navItems.map((item) => (
            <button
              key={item.id} // item.id теперь соответствует значениям из SECTION_IDS
              className={`${styles.navButton} ${
                activeTab === item.id ? styles.active : ""
              }`}
              onClick={() => {
                onNavClick(item.id);
                if (isMenuOpen) setIsMenuOpen(false);
              }}
              aria-current={activeTab === item.id ? "page" : undefined}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <a
          href={TELEGRAM_BOT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.telegramButton}
        >
          <TelegramIcon /> Telegram Bot
        </a>

        <button
          className={`${styles.menuToggle} ${isMenuOpen ? styles.open : ""}`}
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-controls="main-navigation"
          aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
        >
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
