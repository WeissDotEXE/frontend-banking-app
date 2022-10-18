import React, { FC } from "react";
import styles from "./TransactionModal.module.scss";
import cn from "classnames";
import Card from "components/Card/Card";
import { RegularSubtitle } from "components/Typography/Typography";
import Button from "components/Button/Button";
import downloadIcon from "assets/icons/downloadIcon.svg";
interface TransactionModalProps {
    date: string;
    amount: number;
    type: "send" | "receive";
    name: string;
    className?: string;
}

const TransactionModal: FC<TransactionModalProps> = (props) => {
    const { date, amount, type, name, className } = props;

    const rootCls = cn(styles.TransactionModal);

    const staticDataList = [
        { title: "Type: ", data: type },
        { title: "Date: ", data: date },
        { title: type === "receive" ? "Sent From: " : "Send To: ", data: name },
        { title: "Amount: ", data: amount },
    ];

    return (
        <Card>
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
                                {item.title}
                            </RegularSubtitle>
                            <RegularSubtitle position={"text-left"}>
                                {item.data}
                            </RegularSubtitle>
                        </div>
                    );
                })}
            </div>
            <div className="flex justify-center">
                <Button className="flex items-center">
                    Download Invoice <img src={downloadIcon} className="ml-4" />
                </Button>
            </div>
        </Card>
    );
};

export default TransactionModal;
