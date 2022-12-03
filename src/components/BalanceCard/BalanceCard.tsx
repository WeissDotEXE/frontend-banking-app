//here I will fetch account data such as
//balance in every account user has
import React, { FC, useState } from "react";
import styles from "./BalanceCard.module.scss";
import cn from "classnames";
import Card from "components/Card/Card";
import axios from "axios";
import { RegularSubtitle } from "components/Typography/Typography";
import Button from "components/Button/Button";
import { useTransition, animated } from "react-spring";
import AccountItem from "components/AccountItem/AccountItem";
import { Icon } from "components/Icon/Icon";

interface BalanceCardProps {
    className?: string;
}

const BalanceCard: FC<BalanceCardProps> = (props: BalanceCardProps) => {
    const { className } = props;
    const rootCls = cn(styles.BalanceCard, className, "relative");

    const [showAccounts, setShowAccounts] = useState(false);
    const transition = useTransition(showAccounts, {
        from: { y: -40, opacity: 0, duration: 150 },
        enter: { y: 0, opacity: 1 },
        leave: { y: -40, opacity: 0, duration: 150 },
    });
    const accounsList = [
        { currency: "romanian leu", code: "gb", balance: 200 },
        { currency: "romanian leu", code: "gb", balance: 200 },
        { currency: "romanian leu", code: "gb", balance: 200 },
        { currency: "romanian leu", code: "gb", balance: 200 },
    ];

    return (
        <Card className={rootCls}>
            <RegularSubtitle bold className="mb-2">
                Balance
            </RegularSubtitle>
            <div className="flex justify-around items-center w-full">
                <RegularSubtitle className="text-4xl md:text-6xl" bold>
                    $60.53
                </RegularSubtitle>
                <Icon
                    name="dropDownIcon"
                    className="cursor-pointer"
                    onClick={() => setShowAccounts((v) => !v)}
                />
            </div>

            {transition((style, item) =>
                item ? (
                    <animated.div
                        style={style}
                        className="bg-white-950 p-6 drop-shadow-lg h-52 overflow-auto"
                    >
                        {accounsList.map((item, index) => {
                            return (
                                <AccountItem
                                    key={index}
                                    balance={item.balance}
                                    currency={item.currency}
                                    code="gb"
                                />
                            );
                        })}
                    </animated.div>
                ) : (
                    ""
                )
            )}
            <div className="flex mt-6 justify-around">
                <Button
                    bgColor={"pink-950"}
                    txtColor={"white-950"}
                    type="button"
                >
                    Add Money
                </Button>
                <Button
                    bgColor={"pink-950"}
                    txtColor={"white-950"}
                    type="button"
                >
                    Send Money
                </Button>
            </div>
        </Card>
    );
};

export default BalanceCard;
