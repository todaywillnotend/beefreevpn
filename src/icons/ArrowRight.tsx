import React, { FC, SVGAttributes } from "react";

export const ArrowRight: FC<SVGAttributes<SVGElement>> = (props) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8.2045 19.5455C7.76517 19.1062 7.76517 18.3938 8.2045 17.9545L14.159 12L8.2045 6.0455C7.76516 5.60616 7.76516 4.89385 8.2045 4.45451C8.64384 4.01517 9.35615 4.01517 9.79549 4.45451L16.5455 11.2045C16.9848 11.6438 16.9848 12.3562 16.5455 12.7955L9.79549 19.5455C9.35615 19.9848 8.64384 19.9848 8.2045 19.5455Z"
        fill="black"
      />
    </svg>
  );
};

export default ArrowRight;
