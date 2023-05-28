import React, { FC } from "react";
import styles from "./BankingCardItem.module.scss";
import cn from "classnames";
import { RegularSubtitle } from "components/Typography/Typography";
import { Icon } from "components/Icon/Icon";
import bankingCardTypeEnum from "../../enums/bankingCardTypeEnum";
import bankingCardColorEnum from "../../enums/bankingCardColorEnum";
import { BankingCardItemInteface } from "../../pages/BankingCards/BankingCards";

const BankingCardItem: FC<BankingCardItemInteface> = (props) => {
    const { id, cardNumber, name, expireDate, color, cardType, className } =
        props;

    const cardCls = cn(
        color === bankingCardColorEnum.white && "bg-white-950",
        color === bankingCardColorEnum.purple && styles.purpleCard,
        color === bankingCardColorEnum.orange && styles.orangeCard,
        "w-80 md:w-2/4 lg:w-2/6",
        "h-1/4 md:h-1/3",
        "bg-blue-950",
        "rounded-lg",
        "drop-shadow-2xl"
    );

    const bottomPartCls = cn(
        styles.bottomPart,
        "absolute",
        // cardType === "premium"
        //     ? "bg-gradient-to-r from-orange-500 via-purple-500 to-blue-500"
        //     : "bg-gradient-to-r from-cyan-500 to-blue-500",
        "bottom-0",
        "left-0",
        "w-full",
        "h-1/4",
        "rounded-b-lg",
        "flex",
        "px-6",
        "justify-between",
        "items-center",
        color === bankingCardColorEnum.white ? "text-black" : "text-white-950"
    );

    const insertSpaces = (str: string) => {
        return str.replace(/(.{4})/g, "$1 ");
    };

    return (
        <div className={cardCls} data-testid="BankingCards">
            <div className="text-gray-950 flex items-center px-6 mt-10">
                <div
                    className={`flex flex-col w-4/5 ${
                        color === bankingCardColorEnum.white
                            ? "text-black"
                            : "text-white-950"
                    }`}
                >
                    <RegularSubtitle bold position={"text-left"}>
                        Banking App
                    </RegularSubtitle>
                    <RegularSubtitle
                        position={"text-left"}
                        className={"mt-3 truncate w-2/3 md:w-full"}
                    >
                        {insertSpaces(cardNumber.toString())}
                    </RegularSubtitle>
                </div>
                <Icon name="cardSimIcon" className={""} />
            </div>
            <div className={bottomPartCls}>
                <RegularSubtitle bold className={"truncate w-1/2"}>
                    {name}
                </RegularSubtitle>
                <RegularSubtitle>{expireDate}</RegularSubtitle>

                {cardType === bankingCardTypeEnum.mastercard ? (
                    <Icon name="mastercardIcon" />
                ) : (
                    <Icon name="visaIcon" />
                )}
            </div>
        </div>
    );
};

export default BankingCardItem;
