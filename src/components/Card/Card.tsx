import React, { FC, ReactNode } from "react";
import styles from "./Card.module.scss";
import cn from "classnames";

interface CardProps {
    children: ReactNode;
    className?: string;
    onClose?: () => void;
}

const Card: FC<CardProps> = (props: CardProps) => {
    const { children, className, onClose } = props;

    const rootCls = cn(
        styles.Card,
        className,
        "bg-white-950",
        "drop-shadow-2xl",
        "py-4",
        "px-6 lg:px-20",
        "rounded-lg"
        // "w-full"
    );

    return (
        <div className={rootCls} data-testid="Card">
            {children}
        </div>
    );
};

export default Card;
