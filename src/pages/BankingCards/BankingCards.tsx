import React, { FC, useState } from "react";
import styles from "./BankingCards.module.scss";
import cn from "classnames";
import BankingCardItem from "components/BankingCardItem/BankingCardItem";
import { RegularSubtitle } from "components/Typography/Typography";
import Button from "components/Button/Button";
import background from "assets/images/cardsBackground.svg";
import { Icon } from "components/Icon/Icon";
import colors from "colors.module.scss";
import { useNavigate } from "react-router-dom";
import bankingCardTypeEnum from "../../enums/bankingCardTypeEnum";
import bankingCardColorEnum from "../../enums/bankingCardColorEnum";

interface BankingCardsProps {
    className?: string;
}

export interface BankingCardItemInteface {
    id: string;
    cardType: bankingCardTypeEnum;
    cardNumber: number;
    name: string;
    expireDate: string;
    color: bankingCardColorEnum;
    className?: string;
}

const BankingCards: FC<BankingCardsProps> = (props: BankingCardsProps) => {
    const [cardList, setCardList] = useState<BankingCardItemInteface[]>([]);

    const navigate = useNavigate();

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
                className="absolute top-0 left-0 h-full w-full z-0"
                alt={""}
            />
            <div className="relative md:flex justify-between mb-10 z-10">
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
                    <Button
                        type="button"
                        className="flex items-center"
                        onClick={() => navigate("/generatecard")}
                    >
                        Generate Card
                        <Icon
                            name="addIcon"
                            className="w-8 ml-4"
                            color={colors.white}
                        />
                    </Button>
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
                                key={index}
                                id={item.id}
                                color={item.color}
                                cardNumber={item.cardNumber}
                                name={item.name}
                                expireDate={item.expireDate}
                                cardType={item.cardType}
                            />
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default BankingCards;
