import React, { FC, useEffect, useState } from "react";
import styles from "./Home.module.scss";
import cn from "classnames";
import BalanceCard from "components/BalanceCard/BalanceCard";
import TransactionsCard from "components/TransactionsCard/TransactionsCard";
import ProfileCard from "components/ProfileCard/ProfileCard";
import { RegularSubtitle } from "components/Typography/Typography";
import FriendsCard from "components/FriendsCard/FriendsCard";
import { UseWindowSize } from "functions/UseWindowSize";
import { IsMobile } from "functions/Platform";
import Button from "components/Button/Button";
import { Icon } from "components/Icon/Icon";
import colors from "colors.module.scss";
import axios from "axios";

export interface userDataInterface {
    _id: string;
    fullName: string;
    email: string;
    avatarImg: string;
    joinDate: string;
    iban: string;
}

const Home: FC = () => {
    const rootCls = cn(
        styles.Home,
        "grid",
        "lg:grid-cols-2",
        "lg:px-16",
        "mt-10"
    );

    const [userData, setUserData] = useState<userDataInterface>();

    const [width] = UseWindowSize();
    const [showProfile, setShowProfile] = useState(false);

    const leftCardsCls = cn("lg:mr-20", "mb-10");

    const userId = localStorage.getItem("userId");

    const getUserData = async () => {
        try {
            const response = await axios.get(
                `${process.env.REACT_APP_BASE_URL}/user/${userId}`
            );
            setUserData(response.data.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getUserData();
    }, []);

    return (
        <div className="px-8 lg:px-0">
            <div className="flex items-center justify-around lg:justify-start">
                <RegularSubtitle className="text-center truncate lg:text-left text-white-950 font-bold text-4xl lg:text-6xl lg:ml-16 mt-5">
                    Hello {userData?.fullName}
                </RegularSubtitle>
                {IsMobile(width) && (
                    <Button type="button" className="p-2 rounded-full mt-5">
                        <Icon
                            name="avatarIcon"
                            color={colors.white}
                            className="justify-center items-center"
                            onClick={() => setShowProfile((v) => !v)}
                        />
                    </Button>
                )}
            </div>
            {IsMobile(width) && showProfile && (
                <ProfileCard
                    userData={userData!}
                    className="mt-24"
                    refetchData={getUserData}
                />
            )}
            <div className={rootCls} data-testid="Home">
                <div>
                    <BalanceCard className={leftCardsCls} />
                    <FriendsCard className={leftCardsCls} />
                    <TransactionsCard className={leftCardsCls} />
                </div>
                {!IsMobile(width) && (
                    <ProfileCard
                        className="lg:fixed lg:right-20 lg:w-2/5"
                        userData={userData!}
                        refetchData={getUserData}
                    />
                )}
            </div>
        </div>
    );
};

export default Home;
