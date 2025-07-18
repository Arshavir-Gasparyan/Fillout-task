import { IconProps } from "../_lib/types/icon";

const PlusIcon = (props: IconProps) => (
  <svg
    width="8"
    height="8"
    viewBox="0 0 8 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_1_26)">
      <path
        d="M3.99999 1.16667V4.00001M3.99999 4.00001V6.83334M3.99999 4.00001H1.16666M3.99999 4.00001H6.83332"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_1_26">
        <rect width="8" height="8" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default PlusIcon;
