import React, { forwardRef } from "react";
import styles from "./Features.module.scss";
import SpeedIcon from "../../icons/SpeedIcon";
import SecurityIcon from "../../icons/SecurityIcon";
import StabilityIcon from "../../icons/StabilityIcon";
import SimplicityIcon from "../../icons/SimplicityIcon";
import BeeFreeLogo from "../../icons/BeeFreeLogo";
import ArrowRight from "../../icons/ArrowRight";
import { TELEGRAM_BOT_URL } from "../../constants/links";

interface FeatureItemData {
  icon: React.ElementType;
  title: string;
  description: string;
  className: string;
}

const featuresData: FeatureItemData[] = [
  {
    icon: SpeedIcon,
    title: "Быстрый",
    description:
      "Работает без потери скорости. Мы не допускаем перегрузки наших серверов. Огромный серверный парк в лучших дата центрах мира.",
    className: styles.featureItem1,
  },
  {
    icon: StabilityIcon,
    title: "Стабильный",
    description:
      "VPN работает при любых условиях, какие бы препятствия не были бы на его пути. Держит постоянное соединение как на телефонах так и на компьютерах.",
    className: styles.featureItem2,
  },
  {
    icon: SecurityIcon,
    title: "Безопасный",
    description:
      "Новый протокол с повышенной защитой данных и конфиденциальностью. Защитите вашу приватность в публичных Wi-Fi сетях.",
    className: styles.featureItem3,
  },
  {
    icon: SimplicityIcon,
    title: "Простой",
    description:
      "Устанавливается и управляется вами в Telegram боте за считанные секунды. Забудьте о мануалах – все управление у вас под рукой в Telegram боте.",
    className: styles.featureItem4,
  },
];

const FeatureCard: React.FC<FeatureItemData> = ({
  icon: IconComponent,
  title,
  description,
  className,
}) => (
  <div className={`${styles.featureItem} ${className}`}>
    <div className={styles.featureIconWrapper}>
      <IconComponent className={styles.featureIcon} />
    </div>
    <div className={styles.featureTextContent}>
      <h3 className={styles.featureTitle}>{title}</h3>
      <p className={styles.featureDescription}>{description}</p>
    </div>
  </div>
);

interface FeaturesProps {}

const Features = forwardRef<HTMLElement, FeaturesProps>((props, ref) => {
  return (
    <section
      className={`${styles.featuresSection} section-padding`}
      ref={ref}
      id="community"
    >
      <div className={`${styles.featuresContainer} container`}>
        <div className={styles.featuresHeader}>
          <h2 className={styles.sectionTitle}>
            Преимущества для вашего
            <br />
            безопасного и свободного интернета
          </h2>
        </div>
        <div className={styles.featuresLayout}>
          <div className={styles.decorativeTextFeatures}>
            BEE
            <br />
            FREE
            <br />
            VPN
          </div>
          <div className={`${styles.featureItem} ${styles.featureItem5}`}>
            BEEFREEVPN
          </div>
          {featuresData.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
          <div className={`${styles.featureItem} ${styles.featureItem6}`}>
            BEE
            <BeeFreeLogo className={styles.beeIcon} />
            FREE
          </div>
        </div>
        <div className={styles.featuresCta}>
          <a
            href={TELEGRAM_BOT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButton}
          >
            Начать пользоваться <ArrowRight className={styles.ctaButtonIcon} />
          </a>
        </div>
      </div>
    </section>
  );
});
Features.displayName = "Features";
export default Features;
