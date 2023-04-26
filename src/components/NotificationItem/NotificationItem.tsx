import React, { FC, useState } from "react";
import styles from "./NotificationItem.module.scss";
import cn from "classnames";
import { Icon } from "components/Icon/Icon";
import Button from "components/Button/Button";
import notificationEnum from "../../enums/notificationEnum";

interface NotificationItemProps {
    id: string;
    name: string;
    avatarLink: string;
    message: string;
    type: number;
}

const FriendRequestNotification = () => {
};

const NotificationItem: FC<NotificationItemProps> = (
    props: NotificationItemProps
) => {
    const { id, avatarLink, message, name, type } = props;
    const rootCls = cn(
        styles.NotificationItem,
        "grid",
        "grid-cols-6",
        "bg-white-950",
        "py-6",
        "w-full",
        "items-center",
        type === notificationEnum.sendMoney && "border-b-2",
        "border-slate-500"
    );
    const avatarCls = cn(
        styles.avatar,
        "rounded-full",
        "w-14",
        "h-14",
        "object-cover",
        "col-span-2"
    );

    const buttonsCls = cn(
        styles.buttons,
        "flex",
        "justify-center",
        "items-center",
        "border-b-2",
        "border-slate-500",
        "pb-4"
    );

    const [showMore, setShowMore] = useState(false);



    return (
        <>
            <div className={rootCls} data-testid="NotificationItem">
                <img alt={""} src={avatarLink} className={avatarCls} />
                <p
                    className={`${!showMore && "truncate"} col-span-3`}
                    onClick={() => setShowMore(!showMore)}
                >
                    {name} {message}
                </p>
                {/*todo implement delete notification when click on close icon*/}
                <Icon name="closeIcon" className="col-span-1 cursor-pointer" />
            </div>
            {type === notificationEnum.friendRequest && (
                <div className={buttonsCls}>
                    <Button type="button" onClick={() => console.log("accept friend request")}>
                        Accept
                    </Button>
                    {/*todo implement accept friend request by sending request to backend*/}
                    <Button
                        type="button"
                        onClick={() => console.log("decline friend request")}
                    >
                        {/*todo implement decline friend request by sending request to backend
                        */}
                        Decline
                    </Button>
                </div>
            )}
            {type === notificationEnum.requestMoney && (
                <div className={buttonsCls}>
                    <Button
                        type="button"
                        onClick={() => console.log("send money")}
                    >
                        Send Money
                    </Button>
                </div>
            )}
        </>
    );
};

export default NotificationItem;
