//here I will fetch account data such as
//balance in every account user has
import React, { FC, useState } from "react";
import styles from "./BalanceCard.module.scss";
import cn from "classnames";
import Card from "components/Card/Card";
import axios from "axios";
import { RegularSubtitle } from "components/Typography/Typography";
import Button from "components/Button/Button";
import dropDownIcon from "assets/icons/dropDownIcon.svg";
import { useTransition, animated } from "react-spring";
import AccountItem from "components/AccountItem/AccountItem";

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
    ];

    return (
        <Card className={rootCls}>
            <RegularSubtitle className="text-3xl text-gray-950" bold={true}>
                Your Balance
            </RegularSubtitle>
            <RegularSubtitle className="text-6xl" bold={true}>
                $60.53
            </RegularSubtitle>

            {transition((style, item) =>
                item ? (
                    <animated.div
                        style={style}
                        className="bg-white-950 p-6 drop-shadow-lg"
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
            <div className="grid grid-cols-2 mt-6 justify-items-center">
                <Button>Add Money</Button>
                <Button>Send Money</Button>
            </div>

            <img
                src={dropDownIcon}
                className="absolute top-16 right-20 cursor-pointer"
                onClick={() => setShowAccounts((v) => !v)}
            />
        </Card>
    );
};

export default BalanceCard;
