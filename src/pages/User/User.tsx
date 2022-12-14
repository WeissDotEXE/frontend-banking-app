//TO DO
// 1. fetch data about user by using the id from useParams
// 2. Pass the data to AddMoney component: id,name

import React, { FC, useState } from "react";
import styles from "./User.module.scss";
import ProfileCard from "components/ProfileCard/ProfileCard";
import cn from "classnames";
import { useParams } from "react-router-dom";
import AddMoney from "components/AddMoney/AddMoney";
import { Icon } from "components/Icon/Icon";

interface UserProps {}

const User: FC<UserProps> = () => {
    const { id } = useParams();
    const rootCls = cn(
        styles.User,
        "h-screen",
        "flex flex-col md:flex-row",
        "px-10",
        "justify-around",
        "items-center",
        "align-items-center"
    );

    const [showAddMoney, setShowAddMoney] = useState(false);

    return (
        <div className={rootCls} data-testid="User">
            <ProfileCard
                type="profile"
                className={`${showAddMoney && "mt-52 md:mt-0"}`}
                isFriend={false}
                sendMoneyHandler={() => setShowAddMoney(true)}
            />
            {showAddMoney && (
                <Icon
                    name="transferMoneyIcon"
                    className="m-8"
                    color={"white"}
                    width={120}
                />
            )}
            {showAddMoney && (
                <AddMoney
                    name="John"
                    id={id!}
                    closeHandler={() => setShowAddMoney(false)}
                />
            )}
        </div>
    );
};

export default User;
