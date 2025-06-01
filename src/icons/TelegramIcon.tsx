import React, { FC, SVGAttributes } from "react";

const TelegramIcon: FC<SVGAttributes<SVGElement>> = (props) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 11.9c-.88-.25-.89-.86.2-1.3l15.97-5.85c.73-.27 1.36.17 1.15.99L16.09 19.5c-.24.85-1.02 1.03-1.59.67l-4.28-2.99-2.52 2.42z" />
    </svg>
  );
};

export default TelegramIcon;
