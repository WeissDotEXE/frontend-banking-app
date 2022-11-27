//TO DO
// 1. fetch data about user by using the id from useParams
// 2. Pass the data to AddMoney component: id,name

import React, { FC } from "react";
import styles from "./User.module.scss";
import ProfileCard from "components/ProfileCard/ProfileCard";
import cn from "classnames";
import { useParams } from "react-router-dom";
import AddMoney from "components/AddMoney/AddMoney";

interface UserProps {}

const User: FC<UserProps> = () => {
    const { id } = useParams();
    const rootCls = cn(
        styles.User,
        "h-screen",
        "flex",
        "justify-around",
        "items-center",
        "align-items-center"
    );

    return (
        <div className={rootCls} data-testid="User">
            <ProfileCard type="profile" className="" isFriend={false} />
            <AddMoney name="Marcel" id={id!} />
        </div>
    );
};

export default User;
