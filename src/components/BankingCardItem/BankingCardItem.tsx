import React, { FC } from "react";
import styles from "./BankingCardItem.module.scss";
import cn from "classnames";
import { RegularSubtitle } from "components/Typography/Typography";
import cardSim from "assets/icons/cardSimIcon.svg";

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
        "w-2/5",
        "h-80",
        "relative",
        "border-2",
        "mr-20",
        "mb-2",
        "p-4"
    );

    const bottomPartCls = cn(
        styles.bottomPart,
        "absolute",
        "bg-gradient-to-r from-purple-600 to-blue-600",
        "bottom-0",
        "left-0",
        "w-full",
        "h-1/4",
        "rounded-b-lg"
    );

    return (
        <div className={rootCls} data-testid="BankingCards">
            <div className="text-gray-950 grid grid-cols-2">
                <div className="">
                    <RegularSubtitle position={"text-left"}>
                        Banking Cards
                    </RegularSubtitle>
                    <RegularSubtitle>8237592175</RegularSubtitle>
                </div>
                <img className="" src={cardSim} />
            </div>
            <div className={bottomPartCls}></div>
        </div>
    );
};

export default BankingCardItem;
