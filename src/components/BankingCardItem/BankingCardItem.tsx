import React, { FC } from "react";
import styles from "./BankingCardItem.module.scss";
import cn from "classnames";
import { RegularSubtitle } from "components/Typography/Typography";
import cardSim from "assets/icons/cardSimIcon.svg";
import visaIcon from "assets/icons/visaIcon.svg";
import mastercardIcon from "assets/icons/mastercardIcon.svg";

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
        styles.BankingCardItem,
        type === "premium" ? styles.premiumCard : styles.normalCard,
        className,
        "rounded-lg",
        "w-auto",
        "h-72",
        "relative",
        "border-2",
        "mr-20",
        "mb-2",
        "p-4",
        "backdrop-blur-md"
    );

    const bottomPartCls = cn(
        styles.bottomPart,
        "absolute",
        type === "premium"
            ? "bg-gradient-to-r from-orange-500 via-purple-500 to-blue-500"
            : "bg-gradient-to-r from-cyan-500 to-blue-500",
        "bottom-0",
        "left-0",
        "w-full",
        "h-1/4",
        "rounded-b-lg",
        "flex",
        "px-4",
        "text-white-950",
        "justify-around",
        "items-center",
        "shadow-md",
        "shadow-pink-950"
    );

    return (
        <div className={rootCls} data-testid="BankingCards">
            <div className="text-gray-950 grid grid-cols-4 mt-10">
                <div className="col-span-3 flex flex-col ">
                    <RegularSubtitle bold position={"text-left"}>
                        Banking App
                    </RegularSubtitle>
                    <RegularSubtitle position={"text-left"} className="mt-3">
                        8237592175
                    </RegularSubtitle>
                </div>
                <div className="flex items-center">
                    <img src={cardSim} />
                </div>
            </div>
            <div className={bottomPartCls}>
                <RegularSubtitle bold>John John</RegularSubtitle>
                <RegularSubtitle>01/24</RegularSubtitle>
                <img
                    src={
                        processing === "mastercard" ? mastercardIcon : visaIcon
                    }
                />
            </div>
        </div>
    );
};

export default BankingCardItem;
