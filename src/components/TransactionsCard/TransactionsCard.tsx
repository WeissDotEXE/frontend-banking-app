import React, { FC } from "react";
import styles from "./TransactionsCard.module.scss";
import cn from "classnames";
import Card from "components/Card/Card";
import axios from "axios";
interface TransactionsCardProps {
    className?: string;
}

const TransactionsCard: FC<TransactionsCardProps> = (
    props: TransactionsCardProps
) => {
    const { className } = props;
    const rootCls = cn(styles.TransactionCard, className);

    return <Card className={rootCls}>Transactions</Card>;
};

export default TransactionsCard;
