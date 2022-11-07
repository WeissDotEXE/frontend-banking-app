import React, { FC } from "react";
import styles from "./BankingCards.module.scss";
import cn from "classnames";
import BankingCardItem from "components/BankingCardItem/BankingCardItem";
import { RegularSubtitle } from "components/Typography/Typography";
import Button from "components/Button/Button";
import background from "assets/images/cardsBackground.svg";
import addIcon from "assets/icons/addIcon.svg";

interface BankingCardsProps {
    className?: string;
}

const BankingCards: FC<BankingCardsProps> = (props: BankingCardsProps) => {
    const rootCls = cn(styles.rootCls, "p-4 md:p-10", "w-full");
    const cardsCls = cn(
        styles.cards,
        "flex",
        "overflow-auto",
        "flex-nowrap",
        "w-full"
    );
    return (
        <div className={rootCls}>
            <img
                src={background}
                className="absolute top-0 left-0 h-full w-full"
            />
            <div className="flex justify-between mb-10">
                <div className="">
                    <RegularSubtitle
                        position={"text-left"}
                        bold
                        color={"white-950"}
                        className="text-7xl"
                    >
                        Your Cards
                    </RegularSubtitle>
                    <RegularSubtitle
                        color={"gray-950"}
                        bold
                        className="text-3xl"
                        position={"text-left"}
                    >
                        You have 3 cards
                    </RegularSubtitle>
                </div>
                <Button className="flex items-center">
                    Generate Card <img className="w-8 ml-3" src={addIcon} />
                </Button>
            </div>
            <div className={cardsCls}>
                <BankingCardItem
                    id="hello"
                    type="premium"
                    cardNumber={7239648713264933}
                    name="John John"
                    expireDate="03/23"
                    processing="visa"
                />
                <BankingCardItem
                    id="hello"
                    type="normal"
                    cardNumber={7239648713264933}
                    name="John John"
                    expireDate="03/23"
                    processing="mastercard"
                />
            </div>
        </div>
    );
};

export default BankingCards;
