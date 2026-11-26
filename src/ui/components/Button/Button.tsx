import React from "react";
import styles from './Button.module.css';
import { Link } from "../Link/Link";
import { cc } from "../utils/cc";
import { Text } from "../Text/Text";
import { ArrowIcon } from "../icons/ArrowIcon";

type ButtonProps = {
    children: React.ReactNode;
    className?: string;
    href?: string;
};

export const Button: React.FC<ButtonProps> = ({children, href, className}) => {
    const buttonClassName = cc(styles['button'], styles['button_view_cta'], className);

    if (href) {
        return <Link className={buttonClassName} href={href}><Text as="span" variant="label">{children}</Text><ArrowIcon size={23} /></Link>;
    }

    return <button type='button' className={buttonClassName}><Text as="span" variant="label">{children}</Text><ArrowIcon size={23} /></button>;
};
