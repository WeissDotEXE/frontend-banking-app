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
import currencyEnum from "../../enums/currencyEnum";
import { useNavigate } from "react-router-dom";
import Input from "../../components/Input/Input";

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

    const predefinedAmountValues = [100, 200, 500, 1000, 1500, 2000];

    const rootCls = cn(
        styles.AddMoneyPage,
        "p-0",
        "2xl:w-1/2",
        "w-full",
        "relative"
    );
    const navigate = useNavigate();
    const contentCls = cn(
        "flex",
        "justify-around",
        "items-center",
        "z-10",
        "relative",
        "mt-4"
    );

    const loadingCls = cn(
        "backdrop-blur-md",
        "absolute",
        "w-full",
        "h-full",
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
        console.log(amount);
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
                }, 3000);
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
            <div
                className={"flex justify-center items-center w-full h-full p-5"}
            >
                <Card className={rootCls}>
                    <div
                        className={
                            "absolute w-full top-0 left-0 bg-pink-950 h-2/4 rounded-t-xl z-0"
                        }
                    ></div>
                    <div
                        className={
                            "relative right-2 z-10 text-white-950 flex-col w-full justify-center text-center"
                        }
                    >
                        <RegularSubtitle bold={true}>
                            {selectedAccount.balance}
                        </RegularSubtitle>
                        <RegularSubtitle>Money In Your Account</RegularSubtitle>
                    </div>

                    <div className={contentCls}>
                        {bankingAccountsList.map((item, index) => {
                            return (
                                <div
                                    key={index}
                                    className={` rounded-2xl border-2 border-gray-200 px-10 py-5 ${
                                        selectedAccount.currency ===
                                        item.currency
                                            ? "text-white-950 bg-pink-950 border-white-950 drop-shadow-2xl"
                                            : "bg-white-950"
                                    }`}
                                    onClick={() => changeAccountHandler(item)}
                                >
                                    {item.currency === currencyEnum.euro &&
                                        "EURO"}
                                    {item.currency === currencyEnum.dollar &&
                                        "DOLLAR"}
                                    {item.currency === currencyEnum.ron &&
                                        "RON"}
                                </div>
                            );
                        })}
                    </div>
                    <div
                        className={
                            "bg-white-950 drop-shadow-xl rounded- p-10 mt-10 rounded-xl"
                        }
                    >
                        <Input
                            type={"number"}
                            placeholder={"Enter Amount"}
                            label={"Add Money"}
                            value={amount}
                            name={"amount"}
                            onChange={changeAmountHandler}
                            className={"justify-center items-center"}
                        />
                        <div
                            className={
                                "flex flex-col md:flex-row justify-around h-96 md:h-full pt-48 md:pt-0 overflow-y-auto"
                            }
                        >
                            {predefinedAmountValues.map((item, index) => {
                                return (
                                    <div
                                        key={index}
                                        className={`${
                                            Number(amount) === Number(item) &&
                                            "bg-pink-950 text-white-950"
                                        } border-2 border-gray-400 rounded-lg p-5 mt-6 `}
                                        onClick={() => setAmount(item)}
                                    >
                                        <RegularSubtitle size={"xl"}>
                                            {item}
                                        </RegularSubtitle>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className={"flex justify-center"}>
                        <Button
                            type={"button"}
                            className={"flex justify-between items-center my-6"}
                            onClick={addMoneyHandler}
                        >
                            Proceed to add{" "}
                            <Icon name={"secureIcon"} className={"ml-3"} />
                        </Button>
                    </div>
                </Card>
            </div>
        </>
    );
};

export default AddMoneyPage;
