import React, { ChangeEvent, FC, useEffect, useState } from "react";
import styles from "./SendMoneyPage.module.scss";
import cn from "classnames";
import Card from "../../components/Card/Card";
import { RegularSubtitle } from "../../components/Typography/Typography";
import AccountItem from "../../components/AccountItem/AccountItem";
import axios from "axios";
import { changeBankingAccount } from "../../redux/bankAccountReducer";
import { AccountInterface } from "../../components/BalanceCard/BalanceCard";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { userDataInterface } from "../Home/Home";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import * as process from "process";
import InputBankingCardModal from "../../components/InputBankingCardModal/InputBankingCardModal";

interface SendMoneyPageProps {}

const SendMoneyPage: FC<SendMoneyPageProps> = () => {
    const dispatch = useDispatch();
    const { userId, friendId } = useParams();
    const [bankingAccountsList, setBankingAccountsList] = useState<
        AccountInterface[]
    >([]);
    const [selectedAccount, setSelectedAccount] = useState(
        useSelector((state: any) => state.bankAccountReducer)
    );
    const [amount, setAmount] = useState<number>(0);
    const [friendData, setFriendData] = useState<userDataInterface>();
    const [friendAccounts, setFriendAccount] = useState<AccountInterface[]>([]);
    const [bankingCard, setBankingCard] = useState();

    const [error, setError] = useState<string | null>(null);
    const [showCardInput, setShowCardInput] = useState(false);

    const [patchObj, setPatchObj] = useState();

    const rootCls = cn(
        styles.sendMoneyPage,
        "md:flex ",
        "justify-around",
        "p-4"
    );

    const getBankingAccountsHandler = async () => {
        try {
            const userId = localStorage.getItem("userId");
            const url = `${process.env.REACT_APP_BASE_URL}/bankingAccounts/${userId}`;
            const response = await axios.get(url);
            setBankingAccountsList(response.data.data);
            dispatch(changeBankingAccount(response.data.data[0]));
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

    const getFriendData = async () => {
        try {
            const response = await axios.get(
                `${process.env.REACT_APP_BASE_URL}/user/${friendId}`
            );
            console.log(response.data.data);
            setFriendData(response.data.data);
            const responseAccount = await axios.get(
                `${process.env.REACT_APP_BASE_URL}/bankingaccounts/${friendId}`
            );
            setFriendAccount(responseAccount.data.data);
        } catch (error) {
            console.log(error);
        }
    };

    const getBankingCardHandler = async () => {
        try {
            const URL = `${process.env.REACT_APP_BASE_URL}/bankingCards/${userId}`;
            const response = await axios.get(URL);
            setBankingCard(response.data.data[0]);
        } catch (error) {
            console.log(error);
        }
    };

    const toCardInput = async () => {
        try {
            if (amount === 0) {
                setError("Type amount");
                return;
            }
            //function for selecting friend account with same currency
            let selectedFriendAccount: AccountInterface = friendAccounts.filter(
                (account) => account.currency === selectedAccount.currency
            )[0];
            setPatchObj({
                //@ts-ignore
                amount: parseInt(amount),
                userBalance: parseInt(selectedAccount.balance, 10),
                userAccountId: selectedAccount._id,
                recipientAccountId: selectedFriendAccount._id,
                currency: parseInt(selectedAccount.currency, 10),
                recipientBalance: selectedFriendAccount.balance,
            });
            // //function for selecting friend account with same currency
            // let selectedFriendAccount: AccountInterface = friendAccounts.filter(
            //     (account) => account.currency === selectedAccount.currency
            // )[0];

            setShowCardInput(true);
        } catch (error) {}
    };

    useEffect(() => {
        getFriendData();
    }, []);

    useEffect(() => {
        getBankingAccountsHandler();
        getBankingCardHandler();
    }, []);

    return (
        <>
            <RegularSubtitle
                color={"white-950"}
                size={"4xl"}
                bold={true}
                className={"mt-24"}
            >
                Send Money
            </RegularSubtitle>
            {showCardInput && (
                <InputBankingCardModal
                    onClose={() => setShowCardInput(false)}
                    bankingCard={bankingCard!}
                    patchObj={patchObj!}
                />
            )}
            <div className={rootCls}>
                <Card className={"my-5 md:w-1/2"}>
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
                </Card>
                <Card>
                    <RegularSubtitle className={"my-3"}>
                        Select User
                    </RegularSubtitle>
                    <div
                        className={"flex flex-col justify-center items-center"}
                    >
                        <img
                            src={friendData?.avatarImg}
                            className={"rounded-full drop-shadow-xl w-36"}
                            alt={""}
                        />
                        <RegularSubtitle>
                            {friendData?.fullName}
                        </RegularSubtitle>
                        <Input
                            type={"number"}
                            placeholder={"Amount"}
                            label={""}
                            value={amount}
                            name={"amount"}
                            onChange={changeAmountHandler}
                        />
                        <Button
                            type={"button"}
                            className={"mt-10"}
                            onClick={toCardInput}
                        >
                            Send Money
                        </Button>
                    </div>
                    {error && (
                        <RegularSubtitle
                            bold={false}
                            className={"text-red-600 my-4"}
                            size={"xl"}
                        >
                            {error}
                        </RegularSubtitle>
                    )}
                </Card>
            </div>
        </>
    );
};

export default SendMoneyPage;
