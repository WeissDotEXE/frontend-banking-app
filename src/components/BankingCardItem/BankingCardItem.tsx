import React, { FC } from "react";
import styles from "./BankingCardItem.module.scss";
import cn from "classnames";
import { RegularSubtitle } from "components/Typography/Typography";
import { Icon } from "components/Icon/Icon";

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
        "w-96",
        "h-72",
        "relative",
        "border-2",
        "lg:mr-20",
        "my-8 lg:my-2",
        "backdrop-blur-sm",
        type === "normal" && "bg-white-950",
        "cursor-pointer"
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
            <div className="text-gray-950 flex items-center justify-between px-6 mt-10">
                <div className="col-span-3 flex flex-col ">
                    <RegularSubtitle bold position={"text-left"}>
                        Banking App
                    </RegularSubtitle>
                    <RegularSubtitle position={"text-left"} className="mt-3">
                        {cardNumber}
                    </RegularSubtitle>
                </div>
                <div className="flex items-center">
                    <Icon name="cardSimIcon" />
                </div>
            </div>
            <div className={bottomPartCls}>
                <RegularSubtitle bold>{name}</RegularSubtitle>
                <RegularSubtitle>{expireDate}</RegularSubtitle>

                {processing === "mastercard" ? (
                    <Icon name="mastercardIcon" />
                ) : (
                    <Icon name="visaIcon" />
                )}
            </div>
        </div>
    );
};

export default BankingCardItem;
