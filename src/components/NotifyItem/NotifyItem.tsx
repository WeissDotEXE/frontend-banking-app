import React, { FC, useState, useEffect, useContext } from "react";
import ReactDom from "react-dom";
import cn from "classnames";
import styles from "./NotifyItem.module.scss";
import useNotify from "../../hooks/useNotify";
import { Icon } from "components/Icon/Icon";

interface NotificationProps {
    notificationList: {
        id: string;
        message: string;
        title: string;
        backgroundColor: string;
        type: NotificationType;
    }[];
    position: string;
    handleClick: (id: string) => void;
}
type NotificationType = "error" | "warning" | "success";

const Notification: FC<NotificationProps> = (props: NotificationProps) => {
    // const { notificationList, position, handleClick } = props
    const { position, handleClick, notificationList } = props;
    // const [list, setList] = useState(notify)
    const { deleteFirstElementFromArr, closeNotificationHandler, notifyList } =
        useNotify();
    const rootCls = cn(
        styles.NotifyItem,

        "rounded-lg",
        "p-3",
        "m-4",
        "hover:bg-sky-700",
        "z-50",
        "bg-white",
        "grid grid-cols-6",
        "bg-white-950"
    );
    const containerCls = cn(
        styles.container,
        "fixed",
        "top-0",
        "right-0",
        "z-50"
    );

    // const modalRoot = document.getElementById('portal') as HTMLElement

    return (
        <div className={`${containerCls} ${position}`}>
            {notificationList.map((notify, i) => (
                <div
                    key={i}
                    className={`${rootCls} ${position} drop-shadow-lg`}
                >
                    <div className="items-center flex">
                        <Icon
                            className="flex justify-center items-center h-10 w-10"
                            name={`${notify.type}Icon`}
                        />
                        <div
                            className={`h-full w-1 ${notify.backgroundColor}`}
                        ></div>
                    </div>
                    <div className="flex flex-col text-left col-span-4 mx-2">
                        <h1 className="font-extrabold">{notify.title}</h1>
                        <p>{notify.message}</p>
                    </div>
                    <div
                        onClick={() => handleClick(notify.id)}
                        className=" flex items-center justify-center cursor-pointer "
                    >
                        <Icon
                            className="w-6 h-4 flex items-center"
                            name="closeIcon"
                        />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Notification;
