import React, { FC, useState } from "react";
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

interface BankingCardItemList {
    id: string;
    type: "premium" | "normal";
    cardNumber: number;
    name: string;
    expireDate: string;
    processing: "visa" | "mastercard";
    className?: string;
}

const BankingCards: FC<BankingCardsProps> = (props: BankingCardsProps) => {
    const [cardList, setCardList] = useState<BankingCardItemList[]>([]);

    const rootCls = cn(styles.rootCls, "p-4 md:p-10", "w-full");
    const cardsCls = cn(
        styles.cards,
        "lg:flex grid justify-items-center",
        "overflow-auto",
        "lg:flex-nowrap"
    );
    return (
        <div className={rootCls}>
            <img
                src={background}
                className="absolute top-0 left-0 h-full w-full"
            />
            <div className="md:flex justify-between mb-10">
                <div className="flex justify-center items-center">
                    <RegularSubtitle
                        position={"text-left"}
                        bold
                        color={"white-950"}
                        className="text-6xl"
                    >
                        Your Cards
                    </RegularSubtitle>
                    <RegularSubtitle
                        color={"gray-950"}
                        bold
                        className="text-3xl"
                        position={"text-left"}
                    >
                        {cardList.length > 0 &&
                            `You have {cardList.length} cards`}
                    </RegularSubtitle>
                </div>
                {cardList.length < 3 && (
                    <div className="flex justify-center mt-10">
                        <Button className="flex items-center">
                            Generate Card{" "}
                            <img className="w-8 ml-3" src={addIcon} />
                        </Button>
                    </div>
                )}
            </div>

            {cardList.length === 0 ? (
                <RegularSubtitle
                    bold
                    color={"white-950"}
                    position={"text-center"}
                >
                    No cards yet. Generate One
                </RegularSubtitle>
            ) : (
                <div className={cardsCls}>
                    {cardList.map((item, index) => {
                        return (
                            <BankingCardItem
                                id={item.id}
                                type={item.type}
                                cardNumber={item.cardNumber}
                                name={item.name}
                                expireDate={item.expireDate}
                                processing={item.processing}
                            />
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default BankingCards;
