import React, { FC, useEffect, useState } from "react";
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
import axios from "axios";

interface BankingCardsProps {
    className?: string;
}

export interface BankingCardItemInteface {
    id: string;
    type: bankingCardTypeEnum;
    cardNumber: number;
    userId: {
        _id: string;
        fullName: string;
        email: string;
        avatarImg: string;
        iban: string;
        joinDate: string;
    };
    cvv: number;
    expireDate: string;
    color: bankingCardColorEnum;
    className?: string;
}

const BankingCards: FC<BankingCardsProps> = (props: BankingCardsProps) => {
    const [bankingCard, setBankingCard] =
        useState<BankingCardItemInteface | null>(null);

    const navigate = useNavigate();

    const rootCls = cn(
        styles.rootCls,
        "p-4 md:p-10",
        "w-full",
        "z-0",
        "relative"
    );
    const cardsCls = cn(
        styles.cards,
        "flex flex-col lg:flex-row justify-around items-center lg:items-start",
        "overflow-auto",
        "lg:flex-nowrap",
        "h-screen"
    );

    const getUserBankingCardsHandler = async () => {
        try {
            const userId = localStorage.getItem("userId");
            const url = `${process.env.REACT_APP_BASE_URL}/bankingCards/${userId}`;
            const response = await axios.get(url);
            if (response.status === 200) {
                setBankingCard(response.data.data[0]);
                console.log(bankingCard);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getUserBankingCardsHandler();
    }, []);

    return (
        <div className={rootCls}>
            <img
                src={background}
                className="absolute top-0 left-0 h-full w-full z-0"
                alt={""}
            />
            <div className="relative md:flex justify-between mb-10 z-10">
                <div className="flex-col justify-center items-center">
                    <RegularSubtitle
                        position={"text-left"}
                        bold
                        color={"white-950"}
                        className="text-6xl"
                    >
                        Your Card
                    </RegularSubtitle>
                </div>
                {!bankingCard && (
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

            {!!bankingCard ? (
                <div className={cardsCls}>
                    <BankingCardItem
                        id={bankingCard!.id}
                        color={bankingCard!.color}
                        cardNumber={bankingCard!.cardNumber}
                        userId={bankingCard!.userId}
                        expireDate={bankingCard!.expireDate}
                        type={bankingCard!.type}
                        cvv={bankingCard!.cvv}
                    />
                </div>
            ) : (
                <RegularSubtitle
                    bold
                    color={"white-950"}
                    position={"text-center"}
                >
                    No cards yet. Generate One
                </RegularSubtitle>
            )}
        </div>
    );
};

export default BankingCards;
