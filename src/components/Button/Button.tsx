import React, { FC, ReactNode } from "react";
import styles from "./Button.module.scss";
import cn from "classnames";
interface ButtonProps {
    children: ReactNode;
    className?: string;
    bgColor?: string;
    txtColor?: string;
}

const Button: FC<ButtonProps> = (props: ButtonProps) => {
    const { children, className, txtColor } = props;

    const rootCls = cn(
        styles.Button,
        className,
        "rounded-lg",
        "text-center",
        `bg-pink-950`,
        `text-${txtColor}`,
        "p-4",
        "font-bold",
        "text-xl"
    );

    return (
        <button className={rootCls} data-testid="Button">
            {children}
        </button>
    );
};

export default Button;
