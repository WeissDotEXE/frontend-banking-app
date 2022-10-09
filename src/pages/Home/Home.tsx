import React, { FC } from "react";
import styles from "./Home.module.scss";
import cn from "classnames";
import BalanceCard from "components/BalanceCard/BalanceCard";
import TransactionsCard from "components/TransactionsCard/TransactionsCard";
import ProfileCard from "components/ProfileCard/ProfileCard";
interface HomeProps {}

const Home: FC<HomeProps> = () => {
    const rootCls = cn(
        styles.Home,
        "grid",
        "lg:grid-cols-2",
        "lg:px-16",
        "mt-10"
    );

    const leftCardsCls = cn("mr-20", "mb-10");

    return (
        <div className={rootCls} data-testid="Home">
            <div>
                <BalanceCard className={leftCardsCls} />
                <TransactionsCard className={leftCardsCls} />
            </div>
            <ProfileCard />
        </div>
    );
};

export default Home;
