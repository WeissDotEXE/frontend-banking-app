//TO DO
// 1. fetch data about user by using the id from useParams
// 2. Pass the data to AddMoney component: id,name

import React, { FC, useState } from "react";
import styles from "./User.module.scss";
import cn from "classnames";
import { useParams } from "react-router-dom";
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

    //todo create custom card for user page ( when searching for user)
    return (
        <div className={rootCls} data-testid="User">
            {showAddMoney && (
                <Icon
                    name="transferMoneyIcon"
                    className="m-8"
                    color={"white"}
                    width={120}
                />
            )}
        </div>
    );
};

export default User;
