import React, { FC } from "react";
import styles from "./AccountItem.module.scss";
import cn from "classnames";
import roFlag from "assets/icons/countries/ro_flag.svg";
import gbFlag from "assets/icons/countries/gb_flag.svg";
import euFlag from "assets/icons/countries/eu_flag.svg";
import { RegularSubtitle } from "components/Typography/Typography";
interface AccountItemProps {
    currency: string;
    code: "ro" | "gb" | "eu";
    balance: number;
    className?: string;
}

const AccountItem: FC<AccountItemProps> = (props: AccountItemProps) => {
    const { currency, code, balance, className } = props;

    const rootCls = cn(
        styles.AccountItem,
        "grid",
        "grid-cols-6",
        "p-5",
        "mb-5",
        "border-gray-950",
        "border-b-2"
    );

    return (
        <div className={rootCls} data-testid="AccountItem">
            <img src={roFlag} className="w-12 h-12 my-auto" />
            <div className="grid col-span-4 ">
                <RegularSubtitle position="text-start" size="xl" bold>
                    {currency}
                </RegularSubtitle>
                <RegularSubtitle position="text-start">{code}</RegularSubtitle>
            </div>
            <RegularSubtitle bold size="xl" className="my-auto">
                {balance}
            </RegularSubtitle>
        </div>
    );
};

export default AccountItem;
