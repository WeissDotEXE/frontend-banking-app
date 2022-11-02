import React, { FC } from "react";
import styles from "./BankingCards.module.scss";
import cn from "classnames";
import BankingCardItem from "components/BankingCardItem/BankingCardItem";

interface BankingCardsProps {
    className?: string;
}

const BankingCards: FC<BankingCardsProps> = (props: BankingCardsProps) => {
    return (
        <div>
            <BankingCardItem
                id="hello"
                type="premium"
                cardNumber={7239648713264933}
                name="John John"
                expireDate="03/23"
                processing="mastercard"
            />
            <BankingCardItem
                id="hello"
                type="premium"
                cardNumber={7239648713264933}
                name="John John"
                expireDate="03/23"
                processing="visa"
            />
        </div>
    );
};

export default BankingCards;
