import React, { FC } from "react";
import styles from "./BankingCardItem.module.scss";
import cn from "classnames";

interface BankingCardItemProps {
    id: string;
    type: "premium" | "normal";
    cardNumber: number;
    name: string;
    expireDate: string;
    processing: "visa" | "mastercard";
    className?: string;
}

const BankingCardItem: FC<BankingCardItemProps> = (props) => {
    const { id, cardNumber, name, expireDate, processing, type, className } =
        props;

    const rootCls = cn(
        type === "premium" ? styles.premiumCard : styles.normalCard,
        className
    );

    return (
        <div className={rootCls} data-testid="BankingCards">
            Hellloooo
        </div>
    );
};

export default BankingCardItem;
