import React, { FC, useState } from "react";
import styles from "./NotificationItem.module.scss";
import cn from "classnames";
import { Icon } from "components/Icon/Icon";
interface NotificationItemProps {
    id: string;
    name: string;
    avatarLink: string;
    message: string;
}

const NotificationItem: FC<NotificationItemProps> = (
    props: NotificationItemProps
) => {
    const { id, avatarLink, message, name } = props;
    const rootCls = cn(
        styles.NotificationItem,
        "grid",
        "grid-cols-6",
        "bg-white-950",
        "border-b-2",
        "py-6",
        "border-slate-500",
        "w-full",
        "items-center"
    );
    const avatarCls = cn(
        styles.avatar,
        "rounded-full",
        "w-14",
        "h-14",
        "object-cover",
        "col-span-2"
    );

    const [showMore, setShowMore] = useState(false);

    return (
        <div className={rootCls} data-testid="NotificationItem">
            <img src={avatarLink} className={avatarCls} />
            <p
                className={`${!showMore && "truncate"} col-span-3`}
                onClick={() => setShowMore(!showMore)}
            >
                {name} {message}
            </p>
            <Icon name="closeIcon" className="col-span-1 cursor-pointer" />
        </div>
    );
};

export default NotificationItem;
