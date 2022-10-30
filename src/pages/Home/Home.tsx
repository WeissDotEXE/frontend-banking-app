import React, { FC, useState } from "react";
import styles from "./Home.module.scss";
import cn from "classnames";
import BalanceCard from "components/BalanceCard/BalanceCard";
import TransactionsCard from "components/TransactionsCard/TransactionsCard";
import ProfileCard from "components/ProfileCard/ProfileCard";
import { RegularSubtitle } from "components/Typography/Typography";
import FriendsCard from "components/FriendsCard/FriendsCard";
import TransactionModal from "components/TransactionModal/TransactionModal";
interface HomeProps {}

const Home: FC<HomeProps> = () => {
    const rootCls = cn(
        styles.Home,
        "grid",
        "lg:grid-cols-2",
        "lg:px-16",
        "mt-10"
    );

    const leftCardsCls = cn("lg:mr-20", "mb-10");

    return (
        <div className="px-8 lg:px-0">
            <RegularSubtitle className="text-center lg:text-left text-white-950 font-bold text-4xl lg:text-7xl lg:ml-16 mt-5">
                Hello Jesse Jayce
            </RegularSubtitle>
            <div className={rootCls} data-testid="Home">
                <div>
                    <BalanceCard className={leftCardsCls} />
                    <FriendsCard className={leftCardsCls} />
                    <TransactionsCard className={leftCardsCls} />
                </div>
                <ProfileCard />
            </div>
        </div>
    );
};

export default Home;
