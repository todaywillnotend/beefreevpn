import React, { FC, SVGAttributes } from "react";

export const ArrowDown: FC<SVGAttributes<SVGElement>> = (props) => {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M31.6666 15L20 26.6667L8.33331 15"
        stroke="#FFAE00"
        stroke-width="2"
        stroke-linecap="square"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default ArrowDown;
