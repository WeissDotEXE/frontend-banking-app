import React, { FC, ReactNode } from "react";
import styles from "./Button.module.scss";
import cn from "classnames";
interface ButtonProps {
    children: ReactNode;
    className?: string;
    bgColor?: string;
    txtColor?: string;
    disable?: boolean;
    type: "button" | "submit" | "reset";
}

const Button: FC<ButtonProps> = (props: ButtonProps) => {
    const {
        children,
        className,
        txtColor = "white-950",
        disable = false,
        type = "button",
    } = props;

    const rootCls = cn(
        styles.Button,
        className,
        "rounded-lg",
        "text-center",
        `${disable ? "bg-pink-disable" : "bg-pink-950"}`,
        `text-${txtColor}`,
        "p-4",
        "mx-2",
        "font-medium md:font-bold",
        "text-md md:text-xl",
        `${disable && "cursor-not-allowed"}`
    );

    return (
        <button
            className={rootCls}
            data-testid="Button"
            disabled={disable}
            type={type}
        >
            {children}
        </button>
    );
};

export default Button;
