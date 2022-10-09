import React, { FC } from "react";
import styles from "./ProfileCard.module.scss";
import cn from "classnames";
import Card from "components/Card/Card";
import axios from "axios";

interface ProfileCardProps {
    className?: string;
}

const ProfileCard: FC<ProfileCardProps> = (props: ProfileCardProps) => {
    const { className } = props;
    const rootCls = cn(styles.profileCard, className);

    return <Card className={rootCls}>test</Card>;
};

export default ProfileCard;
