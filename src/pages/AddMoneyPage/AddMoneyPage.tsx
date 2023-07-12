import React, { ChangeEvent, FC, useEffect, useState } from "react";
import styles from "./AddMoneyPage.module.scss";
import Card from "../../components/Card/Card";
import { RegularSubtitle } from "../../components/Typography/Typography";
import cn from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { AccountInterface } from "../../components/BalanceCard/BalanceCard";
import axios from "axios";
import { changeBankingAccount } from "../../redux/bankAccountReducer";
import Button from "../../components/Button/Button";
import { Icon } from "../../components/Icon/Icon";
import Input from "../../components/Input/Input";
import currencyEnum from "../../enums/currencyEnum";
import AccountItem from "../../components/AccountItem/AccountItem";
import { useNavigate } from "react-router-dom";

interface AddMoneyPageProps {}

const AddMoneyPage: FC<AddMoneyPageProps> = () => {
    const dispatch = useDispatch();
    const [bankingAccountsList, setBankingAccountsList] = useState<
        AccountInterface[]
    >([]);
    const [selectedAccount, setSelectedAccount] = useState(
        useSelector((state: any) => state.bankAccountReducer)
    );
    const [amount, setAmount] = useState<number>(0);
    const [isLoading, setIsLoading] = useState(false);

    const rootCls = cn(styles.AddMoneyPage, "p-10");
    const navigate = useNavigate();
    const contentCls = cn("flex", "justify-around", "items-center");

    const loadingCls = cn(
        "backdrop-blur-md",
        "absolute",
        "w-full",
        "h-screen",
        "top-0",
        "left-0",
        "z-20",
        "bg-gray-300",
        "bg-opacity-70",
        "flex",
        "justify-center",
        "items-center"
    );

    const getBankingAccountsHandler = async () => {
        try {
            const userId = localStorage.getItem("userId");
            const url = `${process.env.REACT_APP_BASE_URL}/bankingAccounts/${userId}`;
            const response = await axios.get(url);
            console.log(response.data.data);
            setBankingAccountsList(response.data.data);
            dispatch(changeBankingAccount(response.data.data[0]));
            console.log(selectedAccount);
        } catch (error) {
            console.log(error);
        }
    };

    const changeAmountHandler = (event: ChangeEvent<HTMLInputElement>) => {
        // @ts-ignore
        setAmount(event.target.value);
    };

    const changeAccountHandler = (item: AccountInterface) => {
        setSelectedAccount(item);
    };

    const addMoneyHandler = async () => {
        try {
            if (amount <= 0) {
                return;
            }
            if (amount > 2000) {
                return;
            }
            const url = `${process.env.REACT_APP_BASE_URL}/bankingAccounts/addMoney/${selectedAccount._id}`;
            const response = await axios.patch(url, {
                amount: Number(amount),
                balance: selectedAccount.balance,
                receiverUserId: localStorage.getItem("userId"),
                currency: selectedAccount.currency,
            });
            console.log(response);
            if (response.status === 200) {
                setIsLoading(true);
                setTimeout(() => {
                    navigate("/");
                }, 5000);
            }

            console.log(amount);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getBankingAccountsHandler();
    }, []);

    return (
        <>
            {isLoading && (
                <div className={loadingCls}>
                    <RegularSubtitle>Loading...</RegularSubtitle>
                    <Icon name={"loadingIcon"} className={"animate-spin"} />
                </div>
            )}
            <Card className={rootCls}>
                <RegularSubtitle>Add Money</RegularSubtitle>

                <div className={contentCls}>
                    <div className={"flex-col justify-center"}>
                        <RegularSubtitle>Select Account</RegularSubtitle>
                        {bankingAccountsList.map((item, index) => {
                            return (
                                <AccountItem
                                    key={index}
                                    userId={item.userId}
                                    balance={item.balance}
                                    currency={item.currency}
                                    _id={item._id}
                                    onClick={() => changeAccountHandler(item)}
                                    isSelected={
                                        selectedAccount._id === item._id
                                    }
                                />
                            );
                        })}
                    </div>

                    <div>
                        <div className={"flex-col items-center"}>
                            <Input
                                type={"number"}
                                placeholder={"Amount"}
                                label={"Amount"}
                                value={amount}
                                name={"amount"}
                                min={0}
                                onChange={changeAmountHandler}
                            />
                            {selectedAccount.currency === currencyEnum.ron && (
                                <RegularSubtitle>Rons</RegularSubtitle>
                            )}
                            {selectedAccount.currency === currencyEnum.euro && (
                                <RegularSubtitle>Euros</RegularSubtitle>
                            )}
                            {selectedAccount.currency ===
                                currencyEnum.dollar && (
                                <RegularSubtitle>Dollars</RegularSubtitle>
                            )}
                        </div>
                    </div>
                </div>
                <div className={"flex justify-center"}>
                    <Button
                        type={"button"}
                        className={"flex justify-between items-center my-6"}
                        onClick={addMoneyHandler}
                    >
                        Add Money <Icon name={"secureIcon"} />
                    </Button>
                </div>
            </Card>
        </>
    );
};

export default AddMoneyPage;
