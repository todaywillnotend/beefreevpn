import React, { ReactNode } from "react";
import Seo from "../Seo"; // Импортируем SEO компонент
import "../../styles/global.scss"; // Глобальные стили
import styles from "./Layout.module.scss";

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
  // можно добавить другие SEO пропсы сюда
}

const Layout: React.FC<LayoutProps> = ({ children, title, description }) => {
  return (
    <>
      <Seo title={title} description={description} />
      <div className={styles.layoutWrapper}>
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
