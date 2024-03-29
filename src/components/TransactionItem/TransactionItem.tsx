import React, { FC, useState } from "react";
import styles from "./TransactionItem.module.scss";
import cn from "classnames";
import { RegularSubtitle } from "components/Typography/Typography";
import { Icon } from "components/Icon/Icon";
import TransactionModal from "components/TransactionModal/TransactionModal";
import transactionEnum from "../../enums/transactionEnum";
import currencyEnum from "../../enums/currencyEnum";
import receiverRecipientEnum from "../../enums/receiverRecipientEnum";

interface TransactionItemProps {
    id: string;
    type: transactionEnum;
    amount: number;
    date: string;
    currency: currencyEnum;
    fieldFound: receiverRecipientEnum;
    className?: string;
}

const TransactionItem: FC<TransactionItemProps> = (
    props: TransactionItemProps
) => {
    const { id, type, amount, date, currency, fieldFound, className } = props;
    const [showModal, setShowModal] = useState(false);

    const rootCls = cn(
        styles.Transaction,
        className,
        "grid",
        "grid-cols-7",
        "bg-blue-940",
        "pl-4",
        "rounded-lg",
        "my-auto",
        "mb-5"
    );
    const showDetailsHandler = () => {
        // window.scrollTo({ top: 0, behavior: "smooth" });
        setShowModal(true);
    };

    return (
        <div className={rootCls} data-testid="TransactionItem">
            <div className={`grid grid-cols-2 col-span-6 py-4`}>
                <RegularSubtitle
                    bold
                    size="xl"
                    position="text-start"
                    className=" my-auto"
                    color={"white-950"}
                >
                    {type === 0
                        ? fieldFound === receiverRecipientEnum.receiver
                            ? "Sent"
                            : "Received"
                        : "Deposit"}
                </RegularSubtitle>
                <RegularSubtitle color={"white-950"}>
                    {type === 0
                        ? fieldFound === receiverRecipientEnum.recipient
                            ? "+"
                            : "-"
                        : "+"}
                    {amount}
                    {(currency === currencyEnum.dollar && "DOLLAR") ||
                        (currency === currencyEnum.euro && "EURO") ||
                        "RON"}
                </RegularSubtitle>
            </div>

            <div
                onClick={showDetailsHandler}
                className="bg-black hover:bg-pink-950 duration-500 p-1 rounded-r-lg flex justify-center cursor-pointer"
            >
                <Icon name="infoIcon" className="mx-auto my-auto" />
            </div>

            {showModal && (
                <TransactionModal
                    id={id}
                    type={type}
                    amount={amount}
                    date={date}
                    key={id}
                    name="John"
                    fieldFound={fieldFound}
                    onClose={() => setShowModal(!showModal)}
                    currency={currency}
                />
            )}
        </div>
    );
};

export default TransactionItem;
