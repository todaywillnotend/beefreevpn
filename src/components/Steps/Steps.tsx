import React, { forwardRef } from "react";
import styles from "./Steps.module.scss";

// Импорт URL для ссылки на Telegram бота из констант
import { TELEGRAM_BOT_URL } from "../../constants/links";

interface StepItemData {
  stepNumber: number;
  title: string;
  description: React.ReactNode; // Может содержать JSX, например, ссылку
}

const stepsData: StepItemData[] = [
  {
    stepNumber: 1,
    title: "Шаг 1",
    description: (
      <>
        Откройте Телеграм и запустите нашего{" "}
        <a
          href={TELEGRAM_BOT_URL} // Используем константу
          target="_blank"
          rel="noopener noreferrer"
          className={styles.stepLink}
        >
          Telegram бота
        </a>
      </>
    ),
  },
  {
    stepNumber: 2,
    title: "Шаг 2",
    description: "Следуйте инструкциям нашего бота",
  },
  {
    stepNumber: 3,
    title: "Шаг 3",
    description: "Скачайте одно из приложений и начните пользоваться VPN",
  },
];

interface StepsProps {}

const Steps = forwardRef<HTMLElement, StepsProps>((props, ref) => {
  return (
    <section
      className={`${styles.stepsSection} section-padding`}
      ref={ref}
      id="instructions"
    >
      <div className={`${styles.stepsContainer} container`}>
        <div className={styles.stepsHeader}>
          <h2 className={styles.sectionTitle}>
            Выполните простые шаги для
            <br />
            подписки на VPN
          </h2>
        </div>
        <div className={styles.stepsGrid}>
          {stepsData.map((step, index) => (
            <div key={step.stepNumber} className={styles.stepItem}>
              <div className={styles.stepNumberCircle}>
                <span>{step.stepNumber}</span>
              </div>
              {/* Пунктирная линия-коннектор (только на десктопе) */}
              {index < stepsData.length - 1 && (
                <div className={styles.stepConnector}></div>
              )}
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDescription}>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

Steps.displayName = "Steps"; // Полезно для инструментов разработки React

export default Steps;
