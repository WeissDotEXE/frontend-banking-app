//TO DO
//1. fetch transactions based on user id
//3. add loading id using pulse animation from tailwind

import React, { FC, useEffect, useState } from "react";
import styles from "./TransactionsCard.module.scss";
import cn from "classnames";
import Card from "components/Card/Card";
import axios from "axios";
import { RegularSubtitle } from "components/Typography/Typography";
import TransactionItem from "components/TransactionItem/TransactionItem";
import transactionEnum from "../../enums/transactionEnum";
import currencyEnum from "../../enums/currencyEnum";
import receiverRecipientEnum from "../../enums/receiverRecipientEnum";
import { Icon } from "../Icon/Icon";
interface TransactionsCardProps {
    className?: string;
}

interface transactionItem {
    _id: string;
    amount: number;
    type: transactionEnum;
    transactionDate: string;
    fieldFound: receiverRecipientEnum;
    currency: currencyEnum;
}

const TransactionsCard: FC<TransactionsCardProps> = (
    props: TransactionsCardProps
) => {
    const { className } = props;
    const rootCls = cn(styles.TransactionCard, className, "relative");

    const [transactionList, setTransactionList] = useState<transactionItem[]>(
        []
    );

    const getTransactionHandler = async () => {
        try {
            const userId = localStorage.getItem("userId");
            const response = await axios.get(
                `${process.env.REACT_APP_BASE_URL}/transaction/${userId}`
            );
            setTransactionList(response.data.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getTransactionHandler();
    }, []);

    return (
        <Card className={rootCls}>
            <RegularSubtitle bold className="my-4">
                Transactions
            </RegularSubtitle>
            <div
                className={"absolute right-10 top-8"}
                onClick={getTransactionHandler}
            >
                <Icon
                    name="refreshIcon"
                    className={"hover:cursor-pointer"}
                    color={"black"}
                    onClick={getTransactionHandler}
                />
            </div>
            <div className="h-96 overflow-auto scrollbar-thin">
                {transactionList && transactionList.length > 0 ? (
                    transactionList.map(
                        (item: transactionItem, index: number) => (
                            <TransactionItem
                                key={index}
                                id={item._id}
                                amount={item.amount}
                                type={item.type}
                                date={item.transactionDate}
                                currency={item.currency}
                                fieldFound={item.fieldFound}
                            />
                        )
                    )
                ) : (
                    <div className="flex justify-center items-center h-full">
                        <RegularSubtitle color={"gray-950"}>
                            No transactions yet.
                        </RegularSubtitle>
                    </div>
                )}
            </div>
        </Card>
    );
};

export default TransactionsCard;
