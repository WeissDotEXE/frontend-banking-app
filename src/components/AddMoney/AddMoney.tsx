// TO DO
// 1. fetch avalaible currencies from personal account for later use in money transfer
// 2. create a POST request for sending money to specific user based on his id.
// 3. disable button as long as POST request is happening
// 4. add notification for letting user know about transaction status
// 5. test

import React, { FC } from "react";
import styles from "./AddMoney.module.scss";
import cn from "classnames";
import Input from "components/Input/Input";
import Card from "components/Card/Card";
import { RegularSubtitle } from "components/Typography/Typography";
import Button from "components/Button/Button";
import { Icon } from "components/Icon/Icon";

interface AddMoneyProps {
    id: string;
    name: string;
    closeHandler: () => void;
}

const AddMoney: FC<AddMoneyProps> = (props: AddMoneyProps) => {
    const { id, name, closeHandler } = props;

    const accounts: string[] = ["Euro", "GBP", "Dollar"];

    const rootCls = cn(styles.AddMoney);

    return (
        <Card className={rootCls} data-testid="AddMoney">
            <Icon
                name="closeIcon"
                className="absolute right-5 cursor-pointer"
                onClick={closeHandler}
            />
            <RegularSubtitle className="mt-6">
                Send Money to {name}
            </RegularSubtitle>
            <Input label="Amount" placeholder="Amount" type={"number"} />
            <Input
                label="Account"
                placeholder="Choose from which account you want to transfer"
                type="select"
                options={accounts}
            />
            <div className="flex justify-center my-4">
                <Button type="submit">Send</Button>
            </div>
        </Card>
    );
};

export default AddMoney;
