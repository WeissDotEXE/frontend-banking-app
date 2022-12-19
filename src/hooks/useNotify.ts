import { useEffect, useState, useContext } from "react";

import { v4 as uuidv4 } from "uuid";

type NotificationType = "error" | "warning" | "success";

interface NotifyData {
    id: string;
    message: string;
    backgroundColor: string;
    title: string;
    type: NotificationType;
}

interface NotificationProps {
    notificationList: {
        id: string;
        message: string;

        backgroundColor: string;
    }[];
    position: string;
    handleClick: (id: string) => void;
}

const useNotify = () => {
    const [notifyList, setNotifyList] = useState<NotifyData[]>([]);
    useEffect(() => {
        const timer = setTimeout(deleteElementFromArr, 3000);
        return () => clearTimeout(timer);
    }, [notifyList]);

    const deleteElementFromArr = () => {
        if (notifyList.length > 0) {
            let temp = notifyList.slice();
            temp.splice(0, 1);
            setNotifyList(temp);
        }
    };

    const errorNotification = (message: string) => {
        const error: NotifyData = {
            id: uuidv4(),
            type: "error",
            title: "Error",
            message,
            backgroundColor: "bg-red-950",
        };
        setNotifyList((prevNotify) => [...prevNotify, error]);
        console.log("error works");
    };
    const warningNotification = (message: string) => {
        const warning: NotifyData = {
            id: uuidv4(),
            type: "warning",
            title: "Warning",
            message,
            backgroundColor: "bg-yellow-950",
        };
        setNotifyList((prevNotify) => [...prevNotify, warning]);
    };
    const successNotification = (message: string) => {
        const succes: NotifyData = {
            id: uuidv4(),
            type: "success",
            title: "Success",
            message,
            backgroundColor: "bg-green-600",
        };
        setNotifyList((prevNotify) => [...prevNotify, succes]);
    };

    const closeNotificationHandler = (id: string) => {
        const index = notifyList.findIndex((e: any) => e.id === id);
        notifyList.splice(index, 1);
        setNotifyList([...notifyList]);
    };

    const deleteFirstElementFromArr = () => {
        if (notifyList.length >= 1) {
            notifyList.shift();
        }
    };
    return {
        errorNotification,
        warningNotification,
        successNotification,
        closeNotificationHandler,
        notifyList,
        deleteFirstElementFromArr,
    };
};

export default useNotify;
