// TO DO
// 1. fetch avalaible currencies from personal account for later use in money transfer

import React, { FC } from "react";
import styles from "./AddMoney.module.scss";
import cn from "classnames";
import Input from "components/Input/Input";
import Card from "components/Card/Card";
import { RegularSubtitle } from "components/Typography/Typography";

interface AddMoneyProps {
    id: string;
    name: string;
}

const AddMoney: FC<AddMoneyProps> = (props: AddMoneyProps) => {
    const { id, name } = props;

    const rootCls = cn(styles.AddMoney);

    return (
        <Card className={rootCls} data-testid="AddMoney">
            <RegularSubtitle>Send Money to {name}</RegularSubtitle>
            <Input label="Amount" placeholder="Amount" type={"number"} />
            <Input
                label="Account"
                placeholder="Choose from which account you want to transfer"
                type="text"
            />
        </Card>
    );
};

export default AddMoney;
