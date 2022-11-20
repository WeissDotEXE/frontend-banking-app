import React, { FC } from "react";
import styles from "./User.module.scss";
import ProfileCard from "components/ProfileCard/ProfileCard";
import cn from "classnames";
import { useParams } from "react-router-dom";

interface UserProps {}

const User: FC<UserProps> = () => {
    const { id } = useParams();
    const rootCls = cn(
        styles.User,
        "h-screen",
        "flex",
        "justify-center",
        "items-center",
        "align-items-center"
    );

    return (
        <div className={rootCls} data-testid="User">
            <ProfileCard type="profile" className="" />
        </div>
    );
};

export default User;
