import React, { FC } from "react";
import styles from "./TransactionsCard.module.scss";
import cn from "classnames";
import Card from "components/Card/Card";
import axios from "axios";
import { RegularSubtitle } from "components/Typography/Typography";
import TransactionItem from "components/TransactionItem/TransactionItem";
interface TransactionsCardProps {
    className?: string;
}

const TransactionsCard: FC<TransactionsCardProps> = (
    props: TransactionsCardProps
) => {
    const { className } = props;
    const rootCls = cn(styles.TransactionCard, className);

    return (
        <Card className={rootCls}>
            <RegularSubtitle bold color={"gray-950"} className="my-4">
                Transactions
            </RegularSubtitle>
            <div className="h-96 overflow-auto scrollbar-thin">
                <TransactionItem
                    amount={60}
                    id="ss"
                    type="deposit"
                    date="12/23"
                />
                <TransactionItem amount={60} id="ss" type="sent" date="12/23" />
                <TransactionItem
                    amount={60}
                    id="ss"
                    type="received"
                    date="12/23"
                />
                <TransactionItem
                    amount={60}
                    id="ss"
                    type="deposit"
                    date="12/23"
                />
                <TransactionItem
                    amount={60}
                    id="ss"
                    type="deposit"
                    date="12/23"
                />
                <TransactionItem
                    amount={60}
                    id="ss"
                    type="deposit"
                    date="12/23"
                />
                <TransactionItem amount={60} id="ss" type="sent" date="12/23" />
                <TransactionItem
                    amount={60}
                    id="ss"
                    type="received"
                    date="12/23"
                />
                <TransactionItem
                    amount={60}
                    id="ss"
                    type="deposit"
                    date="12/23"
                />
                <TransactionItem
                    amount={60}
                    id="ss"
                    type="deposit"
                    date="12/23"
                />
            </div>
        </Card>
    );
};

export default TransactionsCard;
