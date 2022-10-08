import React, { FC } from "react";
import styles from "./NotificationItem.module.scss";
import cn from "classnames";
import closeIcon from "assets/icons/closeIcon.svg";
interface NotificationItemProps {
    id: string;
    avatarLink: string;
    message: string;
}

const NotificationItem: FC<NotificationItemProps> = (
    props: NotificationItemProps
) => {
    const { id, avatarLink, message } = props;
    const rootCls = cn(
        styles.NotificationItem,
        "grid",
        "grid-cols-6",
        "bg-white-950",
        "drop-shadow-lg"
    );
    const avatarCls = cn(
        styles.avatar,
        "rounded-full",
        "w-14",
        "h-14",
        "col-span-2"
    );
    return (
        <div className={rootCls} data-testid="NotificationItem">
            <img src={avatarLink} className={avatarCls} />
            <p className="truncate col-span-3">{message}</p>
            <img src={closeIcon} className="col-span-1" />
        </div>
    );
};

export default NotificationItem;
