import React, { FC, useState } from "react";
import styles from "./Home.module.scss";
import cn from "classnames";
import BalanceCard from "components/BalanceCard/BalanceCard";
import TransactionsCard from "components/TransactionsCard/TransactionsCard";
import ProfileCard from "components/ProfileCard/ProfileCard";
import { RegularSubtitle } from "components/Typography/Typography";
import FriendsCard from "components/FriendsCard/FriendsCard";
import TransactionModal from "components/TransactionModal/TransactionModal";
import { UseWindowSize } from "functions/UseWindowSize";
import { IsMobile } from "functions/Platform";
interface HomeProps {}

const Home: FC<HomeProps> = () => {
    const rootCls = cn(
        styles.Home,
        "grid",
        "lg:grid-cols-2",
        "lg:px-16",
        "mt-10"
    );

    const [width, height] = UseWindowSize();

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
                {!IsMobile(width) && (
                    <ProfileCard
                        type="personal"
                        className="lg:fixed lg:right-20 lg:w-2/5"
                    />
                )}
            </div>
        </div>
    );
};

export default Home;
