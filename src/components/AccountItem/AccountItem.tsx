import React, { FC } from "react";
import styles from "./AccountItem.module.scss";
import cn from "classnames";
import { RegularSubtitle } from "components/Typography/Typography";
import { AccountInterface } from "../BalanceCard/BalanceCard";
import currencyEnum from "../../enums/currencyEnum";
import { Icon } from "../Icon/Icon";

const AccountItem: FC<AccountInterface> = (props: AccountInterface) => {
    const { userId, balance, currency, onClick, isSelected, className } = props;

    const rootCls = cn(
        styles.AccountItem,
        "grid",
        "grid-cols-6",
        "p-5",
        "mb-10",
        "rounded-lg",
        isSelected && "border-gray-950",
        "border-b-2",
        "items-center",
        "cursor-pointer",
        "drop-shadow-lg",
        isSelected ? "bg-gray-200" : "bg-white-950",

        className
    );

    return (
        <div className={rootCls} data-testid="AccountItem" onClick={onClick}>
            {currency === currencyEnum.ron && <Icon name={"ronIcon"} />}
            {currency === currencyEnum.euro && <Icon name={"euroIcon"} />}
            {currency === currencyEnum.dollar && <Icon name={"dollarIcon"} />}
            <div className="grid col-span-4 ">
                <RegularSubtitle position="text-start" size="xl" bold>
                    {currency === currencyEnum.dollar && "Dollars"}
                    {currency === currencyEnum.ron && "Ron"}
                    {currency === currencyEnum.euro && "Euros"}
                </RegularSubtitle>
            </div>
            <RegularSubtitle bold size="xl" className="my-auto">
                {balance} {currency === currencyEnum.dollar && "$"}
                {currency === currencyEnum.ron && "RON"}
                {currency === currencyEnum.euro && "€"}
            </RegularSubtitle>
        </div>
    );
};

export default AccountItem;
