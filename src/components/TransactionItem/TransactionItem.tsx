import React, { FC, useState } from "react";
import styles from "./TransactionItem.module.scss";
import cn from "classnames";
import { RegularSubtitle } from "components/Typography/Typography";
import infoIcon from "assets/icons/infoIcon.svg";
import { useTransition, animated } from "react-spring";
interface TransactionItemProps {
    id: string;
    type: "sent" | "deposit" | "received";
    amount: number;
    date: string;
    className?: string;
}

const TransactionItem: FC<TransactionItemProps> = (
    props: TransactionItemProps
) => {
    const { id, type, amount, date, className } = props;

    const [showDetails, setShowDetails] = useState(false);

    const rootCls = cn(
        styles.Transaction,
        className,
        "grid",
        showDetails ? "grid-cols-7" : "grid-cols-8",
        "bg-blue-940",
        "pl-4",
        "rounded-lg",
        "my-auto",
        "mb-5"
    );

    const transition = useTransition(showDetails, {
        from: { x: 20, opacity: 0, duration: 150 },
        enter: { x: 0, opacity: 1 },
        leave: { x: 20, opacity: 0, duration: 150 },
    });

    return (
        <div
            className={rootCls}
            data-testid="TransactionItem"
            onMouseEnter={() => setShowDetails(true)}
            onMouseLeave={() => setTimeout(() => setShowDetails(false), 800)}
        >
            <div
                className={`grid ${
                    showDetails ? "col-span-6" : "col-span-7"
                } grid-cols-5 py-4`}
            >
                <RegularSubtitle
                    bold
                    size="xl"
                    position="text-start"
                    className={`${
                        showDetails ? "col-span-3" : "col-span-4"
                    } my-auto`}
                    color={"white-950"}
                >
                    Received
                </RegularSubtitle>
                <RegularSubtitle color={"white-950"}>
                    {type === "deposit" || type === "received" ? "+" : "-"}
                    {amount}
                </RegularSubtitle>
            </div>
            {/* {showDetails && (
                <div className="bg-pink-950 p-1 rounded-r-lg flex justify-center">
                    <img src={infoIcon} className="mx-auto my-auto" />
                </div>
            )} */}
            {transition((style, item) =>
                item ? (
                    <animated.div
                        style={style}
                        className="bg-pink-950 p-1 rounded-r-lg flex justify-center"
                    >
                        <img src={infoIcon} className="mx-auto my-auto" />
                    </animated.div>
                ) : (
                    ""
                )
            )}
        </div>
    );
};

export default TransactionItem;
