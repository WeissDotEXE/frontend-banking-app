import React, { FC } from "react";
import styles from "./FriendItem.module.scss";
import cn from "classnames";
import { RegularSubtitle } from "components/Typography/Typography";

interface FriendItemProps {
    className?: string;
    id: string;
    name: string;
    avatar_link: string;
}

const FriendItem: FC<FriendItemProps> = (props: FriendItemProps) => {
    const { id, name, avatar_link, className } = props;

    const rootCLs = cn(
        styles.FriendItem,
        className,
        "grid",
        "justify-items-center",
        "w-54"
    );

    return (
        <div className={rootCLs} data-testid="FriendItem">
            <img src={avatar_link} className="" />
            <RegularSubtitle size="xl">{name}</RegularSubtitle>
        </div>
    );
};

export default FriendItem;
