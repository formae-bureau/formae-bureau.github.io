import React from "react";
import styles from './Icon.module.css';
import { cc } from "../utils/cc";

type ArrowIconProps = {
    direction?: 'up-right' | 'down' | 'left' | 'right';
    className?: string;
    size?: number;
};

const paths = {
    'up-right': 'M5 19 19 5M7 5h12v12',
    down: 'M12 4v16m-7-7 7 7 7-7',
    left: 'M20 12H4m7-7-7 7 7 7',
    right: 'M4 12h16m-7-7 7 7-7 7',
};

export const ArrowIcon: React.FC<ArrowIconProps> = ({direction = 'up-right', className, size = 20}) => (
    <svg
        className={cc(styles.icon, className)}
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        focusable="false"
    >
        <path d={paths[direction]} />
    </svg>
);
