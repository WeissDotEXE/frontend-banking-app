import React, { FC, useState } from "react";
import styles from "./FriendItem.module.scss";
import cn from "classnames";
import { RegularSubtitle } from "components/Typography/Typography";
import FriendModal from "components/FriendModal/FriendModal";

interface FriendItemProps {
    className?: string;
    id: string;
    name: string;
    avatar_link: string;
}

const FriendItem: FC<FriendItemProps> = (props: FriendItemProps) => {
    const { id, name, avatar_link, className } = props;

    const [showModal, setShowModal] = useState(false);

    const rootCLs = cn(
        styles.FriendItem,
        className,
        "grid",
        "justify-items-center",
        "md:w-54",
        "mr-6",
        "cursor-pointer"
    );

    const showDetailsHandler = () => {
        setShowModal(true);
    };

    return (
        <div
            className={rootCLs}
            data-testid="FriendItem"
            onClick={showDetailsHandler}
        >
            <img
                src={avatar_link}
                className="rounded-full w-20 md:w-96 md:h-54"
            />
            <RegularSubtitle size="lg" className="w-20 truncate">
                {name}
            </RegularSubtitle>
            {showModal && (
                <FriendModal
                    avatar_link={avatar_link}
                    id={id}
                    name={name}
                    onClose={() => setShowModal(!showModal)}
                />
            )}
        </div>
    );
};

export default FriendItem;
