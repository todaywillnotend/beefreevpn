import React, { forwardRef } from "react";
import styles from "./Hero.module.scss";

import ArrowRight from "../../icons/ArrowRight";
import ArrowDown from "../../icons/ArrowDown";

import { TELEGRAM_BOT_URL } from "../../constants/links";
import BeeFreeLogo from "../../icons/BeeFreeLogo";

interface HeroProps {
  onArrowClick: () => void;
} // Можно добавить пропсы, если понадобятся в будущем

const Hero = forwardRef<HTMLElement, HeroProps>(({ onArrowClick }, ref) => {
  return (
    <section
      className={`${styles.heroSection} section-padding`}
      ref={ref}
      id="hero"
    >
      <div className={`${styles.heroContent} container`}>
        <h1 className={styles.title}>BEE FREE VPN</h1>
        <h2 className={styles.subtitle}>
          Быстро, безопасно, анонимно
          <br />— ваш VPN-выбор
        </h2>
        <a
          href={TELEGRAM_BOT_URL} // Используем константу
          target="_blank"
          rel="noopener noreferrer"
          className={styles.ctaButton}
        >
          Начать пользоваться <ArrowRight className={styles.ctaIcon} />{" "}
        </a>
      </div>
      <BeeFreeLogo className={styles.beeIcon} />
      <div className={styles.scrollIndicator} onClick={onArrowClick}>
        <p>Простые шаги для использования</p> {/* Текст из макета */}
        <ArrowDown className={styles.scrollIcon} />
      </div>
    </section>
  );
});

Hero.displayName = "Hero";

export default Hero;
