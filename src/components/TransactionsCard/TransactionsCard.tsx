import React, { FC } from "react";
import styles from "./TransactionsCard.module.scss";
import cn from "classnames";
import Card from "components/Card/Card";
import axios from "axios";
import { RegularSubtitle } from "components/Typography/Typography";
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
            <div className="h-1/3 overflow-auto scroll-hidden"></div>
        </Card>
    );
};

export default TransactionsCard;
