import React, { FC, useState } from "react";
import styles from "./NotificationItem.module.scss";
import cn from "classnames";
import { Icon } from "components/Icon/Icon";
import Button from "components/Button/Button";
import notificationEnum from "../../enums/notificationEnum";
import axios from "axios";
import { useDispatch } from "react-redux";
import { acceptFriend, deleteFriendNotification } from "redux/friendReducer";

interface NotificationItemProps {
    id: string;
    name: string;
    avatarLink: string;
    message: string;
    type: number;
    refreshData: () => void;
    senderId: string;
    friendDocumentId: string | undefined;
}


const NotificationItem: FC<NotificationItemProps> = (
    props: NotificationItemProps
) => {
    const { id, avatarLink, message, name, type, refreshData, senderId, friendDocumentId } = props;
    const dispatch = useDispatch();
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

    const refreshIconCls = cn(
        "absolute",
        "top-0",
        "right-0",
        "hover:cursor-pointer"
    );

    const [showMore, setShowMore] = useState(false);

    const deleteNotification = async () => {
        try {
            //delete notification
            console.log(id);
            const response = await axios.delete(`${process.env.REACT_APP_BASE_URL}/notification/deleteone/${id}`);
            if (response.status === 204) {
                refreshData();
            }
        } catch (error) {
            console.log(error);
        }
    };

    const declineFriendRequestHandler = async () => {
        try {
            // @ts-ignore
            dispatch(deleteFriendNotification(id, friendDocumentId));
            const response = await axios.delete(`${process.env.REACT_APP_BASE_URL}/notification/deleteone/${id}`);
            if (response.status === 204) {
                refreshData();
            }
        } catch (error) {
            console.log(error);
        }
    };

    const acceptFriendRequestHandler = async () => {
        try {
            console.log(senderId);
            // @ts-ignore
            dispatch(acceptFriend(senderId));
            const response = await axios.delete(`${process.env.REACT_APP_BASE_URL}/notification/deleteone/${id}`);
            if (response.status === 204) {
                refreshData();
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <div className={rootCls} data-testid="NotificationItem">
                <Icon name="refreshIcon" className={refreshIconCls} color={"black"} onClick={refreshData} />
                <img alt={""} src={avatarLink} className={avatarCls} />
                <p
                    className={`${!showMore && "truncate"} col-span-3`}
                    onClick={() => setShowMore(!showMore)}
                >
                    {name} {message}
                </p>
                <Icon name="closeIcon" className="col-span-1 cursor-pointer" onClick={deleteNotification} />
            </div>
            {type === notificationEnum.friendRequest && (
                <div className={buttonsCls}>
                    {/*@ts-ignore*/}
                    <Button type="button" onClick={acceptFriendRequestHandler}>
                        Accept
                    </Button>
                    {/*@ts-ignore*/}
                    <Button type="button" onClick={declineFriendRequestHandler}
                    >
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
