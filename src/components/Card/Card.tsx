import React, { FC, ReactNode } from "react";
import styles from "./Card.module.scss";
import cn from "classnames";

interface CardProps {
    children: ReactNode;
    className?: string;
    onClose?: () => void;
    noPadding?: boolean;
}

const Card: FC<CardProps> = (props: CardProps) => {
    const { children, className, onClose, noPadding } = props;

    const rootCls = cn(
        styles.Card,
        className,
        "bg-white-950",
        "drop-shadow-2xl",
        !noPadding && "py-4",
        !noPadding && "px-6 lg:px-20",
        "rounded-xl"
        // "w-full"
    );

    return (
        <div className={rootCls} data-testid="Card">
            {children}
        </div>
    );
};

export default Card;
