//TO DO
//1. fetch transactions based on user id
//3. add loading id using pulse animation from tailwind

import React, { FC, useState } from "react";
import styles from "./TransactionsCard.module.scss";
import cn from "classnames";
import Card from "components/Card/Card";
import axios from "axios";
import { RegularSubtitle } from "components/Typography/Typography";
import TransactionItem from "components/TransactionItem/TransactionItem";
interface TransactionsCardProps {
    className?: string;
}

interface transactionItem {
    id: string;
    amount: number;
    type: "deposit" | "receive";
    date: string;
}

const TransactionsCard: FC<TransactionsCardProps> = (
    props: TransactionsCardProps
) => {
    const { className } = props;
    const rootCls = cn(styles.TransactionCard, className);

    const [transactionList, setTransactionList] = useState<transactionItem[]>(
        []
    );

    return (
        <Card className={rootCls}>
            <RegularSubtitle bold className="my-4">
                Transactions
            </RegularSubtitle>
            <div className="h-96 overflow-auto scrollbar-thin">
                {transactionList.length > 0 ? (
                    transactionList.map(
                        (item: transactionItem, index: number) => (
                            <TransactionItem
                                key={index}
                                id={item.id}
                                amount={item.amount}
                                type={item.type}
                                date={item.date}
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
