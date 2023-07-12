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
import { useNavigate, useParams } from "react-router-dom";
import FriendItem from "../../components/FriendItem/FriendItem";
import { fetchFriends } from "../../redux/friendReducer";
import { friendItem } from "../../components/FriendsCard/FriendsCard";
import friendIdDeceider from "functions/friendIdDeceider";
import { userDataInterface } from "../Home/Home";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { Icon } from "../../components/Icon/Icon";
import * as process from "process";

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
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    const [friendData, setFriendData] = useState<userDataInterface>();
    const [friendAccounts, setFriendAccount] = useState<AccountInterface[]>([]);

    const rootCls = cn(
        styles.sendMoneyPage,
        "md:flex ",
        "justify-around",
        "p-4"
    );

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

    const friends = useSelector((state: any) => state.friendReducer.friends);

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
            setFriendData(response.data.data);
            const responseAccount = await axios.get(
                `${process.env.REACT_APP_BASE_URL}/bankingaccounts/${friendId}`
            );
            setFriendAccount(responseAccount.data.data);
        } catch (error) {
            console.log(error);
        }
    };

    const sendMoneyHandler = async () => {
        try {
            if (amount === 0) {
                setError("Type amount");
                return;
            }

            //function for selecting friend account with same currency
            let selectedFriendAccount: AccountInterface = friendAccounts.filter(
                (account) => account.currency === selectedAccount.currency
            )[0];

            const response = await axios.patch(
                `${process.env.REACT_APP_BASE_URL}/bankingAccounts/sendMoney`,
                {
                    //@ts-ignore
                    amount: parseInt(amount),
                    userBalance: parseInt(selectedAccount.balance, 10),
                    userAccountId: selectedAccount._id,
                    recipientAccountId: selectedFriendAccount._id,
                    currency: parseInt(selectedAccount.currency, 10),
                    recipientBalance: selectedFriendAccount.balance,
                }
            );
            if (response.status === 200) {
                setIsLoading(true);
                setTimeout(() => {
                    navigate("/");
                }, 5000);
            }
        } catch (error) {}
    };

    useEffect(() => {
        getFriendData();
    }, []);

    useEffect(() => {
        getBankingAccountsHandler();
    }, []);

    return (
        <>
            <RegularSubtitle
                color={"white-950"}
                size={"4xl"}
                bold={true}
                className={"mt-24"}
            >
                {isLoading && (
                    <div className={loadingCls}>
                        <RegularSubtitle>Loading...</RegularSubtitle>
                        <Icon name={"loadingIcon"} className={"animate-spin"} />
                    </div>
                )}
                Send Money
            </RegularSubtitle>
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
                    {!!friendId ? (
                        <div
                            className={
                                "flex flex-col justify-center items-center"
                            }
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
                                onClick={sendMoneyHandler}
                            >
                                Send Money
                            </Button>
                        </div>
                    ) : (
                        <div>
                            {friends!.map((item: friendItem, index: number) => {
                                // @ts-ignore
                                return (
                                    <FriendItem
                                        _id={item._id}
                                        key={index}
                                        fullName={
                                            //@ts-ignore
                                            item[friendIdDeceider(item)]
                                                .fullName
                                        }
                                        avatarImg={
                                            //@ts-ignore
                                            item[friendIdDeceider(item)]
                                                .avatarImg
                                        }
                                        refreshData={() =>
                                            //@ts-ignore
                                            dispatch(fetchFriends())
                                        }
                                        status={item.status}
                                        onClick={() => console.log("test")}
                                    />
                                );
                            })}
                        </div>
                    )}
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
