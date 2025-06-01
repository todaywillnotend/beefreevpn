import React from "react";
import { Link } from "gatsby";
import styles from "./Footer.module.scss";
import BeeFreeLogo from "../../icons/BeeFreeLogo";
import TelegramIcon from "../../icons/TelegramIcon";
import { NavItem, SectionId } from "../../pages/index"; // Импорт типов

interface FooterProps {
  navItems: NavItem[];
  onNavClick: (id: SectionId) => void; // Для скролла к секциям
}

const Footer: React.FC<FooterProps> = ({ navItems, onNavClick }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`${styles.footerContainer} container`}>
        <div className={styles.footerTop}>
          <Link
            to="/"
            className={styles.logoLink}
            aria-label="BEE FREE VPN Главная"
          >
            <BeeFreeLogo className={styles.logoIcon} />
            <span className={styles.logoText}>BEE FREE VPN</span>
          </Link>

          <nav className={styles.footerNav} aria-label="Навигация в подвале">
            {navItems.map((item) => (
              <button
                key={item.id}
                className={styles.navButton}
                onClick={() => onNavClick(item.id)}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <a
            href="https://t.me/BeeVpnBot" // Ссылка на вашего Telegram бота
            target="_blank"
            rel="noopener noreferrer"
            className={styles.telegramLink}
          >
            <TelegramIcon className={styles.telegramIcon} />
            Telegram Bot
          </a>
        </div>

        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            &copy; {currentYear} BEE FREE VPN. Все права защищены.
          </p>
          {/* Можно добавить ссылки на политику конфиденциальности и т.д. */}
          {/* <div className={styles.extraLinks}>
            <Link to="/privacy-policy">Политика конфиденциальности</Link>
            <Link to="/terms-of-service">Условия использования</Link>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
