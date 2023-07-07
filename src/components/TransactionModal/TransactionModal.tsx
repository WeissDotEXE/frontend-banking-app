import React, { FC } from "react";
import styles from "./TransactionModal.module.scss";
import cn from "classnames";
import { RegularSubtitle } from "components/Typography/Typography";
import Button from "components/Button/Button";
import Modal from "components/Modal/Modal";
import { Icon } from "components/Icon/Icon";
import transactionEnum from "../../enums/transactionEnum";
import currencyEnum from "../../enums/currencyEnum";

interface TransactionModalProps {
    date: string;
    amount: number;
    type: transactionEnum;
    name: string;
    currency: currencyEnum;
    className?: string;
    onClose: () => void;
}

const TransactionModal: FC<TransactionModalProps> = (props) => {
    const { date, amount, type, name, currency, className, onClose } = props;

    const rootCls = cn(styles.TransactionModal);

    //todo change what data is shown based on transaction type(deposit/user transaction)
    //todo fix date not showing data (date is undefined based on console.log)
    const staticDataList = [
        {
            title: "Type",
            data:
                (type === transactionEnum.received && "Received") ||
                (type === transactionEnum.send && "Sent") ||
                (transactionEnum.deposit && "Deposit"),
        },
        { title: "Date", data: date.slice(0, 10) },
        {
            title:
                (type === transactionEnum.received && "Received") ||
                (type === transactionEnum.send && "Sent") ||
                (transactionEnum.deposit && "Deposit"),
            data: name,
        },
        { title: "Amount", data: amount },
        {
            title: "Currency",
            data:
                (currency === currencyEnum.dollar && "DOLLAR") ||
                (currency === currencyEnum.euro && "EURO") ||
                "RON",
        },
    ];

    return (
        <Modal onClose={onClose} className={rootCls}>
            <RegularSubtitle bold>Transaction Info</RegularSubtitle>
            <div className="my-10">
                {staticDataList.map((item, index) => {
                    return (
                        <div className="grid grid-cols-2" key={index}>
                            <RegularSubtitle
                                bold
                                className="mr-3"
                                position={"text-left"}
                            >
                                {item.title}:
                            </RegularSubtitle>
                            <RegularSubtitle position={"text-left"}>
                                {item.data}
                            </RegularSubtitle>
                        </div>
                    );
                })}
            </div>
            <div className="flex justify-center">
                <Button type="button" className="flex items-center">
                    Download Invoice
                    <Icon name="downloadIcon" className="ml-4" />
                </Button>
            </div>
        </Modal>
    );
};

export default TransactionModal;
