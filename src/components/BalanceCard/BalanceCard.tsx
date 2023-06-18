//here I will fetch account data such as
//balance in every account user has
import React, { FC, useEffect, useState } from "react";
import styles from "./BalanceCard.module.scss";
import cn from "classnames";
import Card from "components/Card/Card";
import axios from "axios";
import { RegularSubtitle } from "components/Typography/Typography";
import Button from "components/Button/Button";
import AccountItem from "components/AccountItem/AccountItem";
import { Icon } from "components/Icon/Icon";
import currencyEnum from "../../enums/currencyEnum";
import * as process from "process";
import { useDispatch, useSelector } from "react-redux";
import { changeBankingAccount } from "../../redux/bankAccountReducer";
import { Link } from "react-router-dom";

interface BalanceCardProps {
    className?: string;
}

export interface AccountInterface {
    userId: string;
    balance: number;
    currency: currencyEnum;
    _id: string;
    onClick?: () => void;
    className?: string;
}

const BalanceCard: FC<BalanceCardProps> = (props: BalanceCardProps) => {
    const { className } = props;
    const rootCls = cn(styles.BalanceCard, className, "relative");
    const dispatch = useDispatch();

    const [showAccounts, setShowAccounts] = useState(false);
    const [bankingAccountsList, setBankingAccountsList] = useState<
        AccountInterface[]
    >([]);

    const selectedAccount = useSelector(
        (state: any) => state.bankAccountReducer
    );
    const getBankingAccountsHandler = async () => {
        try {
            const userId = localStorage.getItem("userId");
            const url = `${process.env.REACT_APP_BASE_URL}/bankingAccounts/${userId}`;
            const response = await axios.get(url);
            console.log(response.data.data);
            setBankingAccountsList(response.data.data);
            dispatch(changeBankingAccount(response.data.data[0]));
        } catch (error) {
            //todo add notification for error
            console.log(error);
        }
    };

    const changeAccountHandler = (account: AccountInterface) => {
        dispatch(changeBankingAccount(account));
        setShowAccounts(false);
    };

    useEffect(() => {
        getBankingAccountsHandler();
    }, []);

    return (
        <Card className={rootCls}>
            <RegularSubtitle bold className="mb-2">
                Balance
            </RegularSubtitle>
            <div className="flex justify-around items-center w-full">
                <RegularSubtitle className="text-4xl md:text-6xl" bold>
                    {selectedAccount.balance}{" "}
                    {selectedAccount.currency === currencyEnum.ron && "RON"}
                    {selectedAccount.currency === currencyEnum.euro && "€"}
                    {selectedAccount.currency === currencyEnum.dollar && "$"}
                </RegularSubtitle>
                <Icon
                    name="dropDownIcon"
                    className="cursor-pointer"
                    onClick={() => setShowAccounts((v) => !v)}
                />
            </div>
            {showAccounts && (
                <div className="bg-white-950 p-6 drop-shadow-lg h-72 overflow-auto">
                    {bankingAccountsList.map(
                        (item: AccountInterface, index: number) => {
                            return (
                                <AccountItem
                                    key={index}
                                    _id={item._id}
                                    userId={item.userId}
                                    balance={item.balance}
                                    currency={item.currency}
                                    onClick={() => changeAccountHandler(item)}
                                />
                            );
                        }
                    )}
                </div>
            )}

            <div className="flex mt-6 justify-around">
                <Link to={`/addMoney/${localStorage.getItem("userId")}`}>
                    <Button
                        bgColor={"pink-950"}
                        txtColor={"white-950"}
                        type="button"
                    >
                        Add Money
                    </Button>
                </Link>
                <Button
                    bgColor={"pink-950"}
                    txtColor={"white-950"}
                    type="button"
                >
                    Send Money
                </Button>
            </div>
        </Card>
    );
};

export default BalanceCard;
