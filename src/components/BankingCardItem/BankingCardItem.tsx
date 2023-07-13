import React, { FC, useState } from "react";
import styles from "./BankingCardItem.module.scss";
import cn from "classnames";
import { RegularSubtitle } from "components/Typography/Typography";
import { Icon } from "components/Icon/Icon";
import bankingCardTypeEnum from "../../enums/bankingCardTypeEnum";
import bankingCardColorEnum from "../../enums/bankingCardColorEnum";
import { BankingCardItemInteface } from "../../pages/BankingCards/BankingCards";
import stringToStars from "../../functions/stringToStars";

const BankingCardItem: FC<BankingCardItemInteface> = (props) => {
    const { cardNumber, userId, expireDate, color, type, cvv, className } =
        props;

    const [isProtected, setIsProtected] = useState(true);

    const cardCls = cn(
        className,
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
        <div
            className={cardCls}
            onClick={() => {
                setIsProtected(!isProtected);
            }}
            data-testid="BankingCards"
        >
            <div className="text-gray-950 flex items-center px-6 mt-10 justify-between">
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
                        className={"mt-3 text-lg  md:w-full"}
                    >
                        {isProtected
                            ? stringToStars(insertSpaces(cardNumber.toString()))
                            : insertSpaces(cardNumber.toString())}
                    </RegularSubtitle>
                </div>
                <Icon name="cardSimIcon" className={""} />
            </div>
            {!isProtected && (
                <div className={"flex justify-end mr-6"}>
                    <RegularSubtitle
                        className={`
                            ${
                                color === bankingCardColorEnum.white
                                    ? "text-black"
                                    : "text-white-950"
                            } text-lg
                        `}
                    >
                        CVV {cvv}
                    </RegularSubtitle>
                </div>
            )}
            <div className={bottomPartCls}>
                <RegularSubtitle bold className={"truncate text-xl w-1/2"}>
                    {isProtected
                        ? stringToStars(userId!.fullName)
                        : userId!.fullName}
                </RegularSubtitle>
                <RegularSubtitle className={"text-xl"}>
                    {isProtected
                        ? stringToStars(expireDate.slice(2, 7))
                        : expireDate.slice(2, 7)}
                </RegularSubtitle>

                {type === bankingCardTypeEnum.mastercard ? (
                    <Icon name="mastercardIcon" width={10} />
                ) : (
                    <Icon name="visaIcon" className={"w-10 md:w-20"} />
                )}
            </div>
        </div>
    );
};

export default BankingCardItem;
