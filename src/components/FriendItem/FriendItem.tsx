import React, { FC } from "react";
import styles from "./FriendItem.module.scss";
import cn from "classnames";
import { RegularSubtitle } from "components/Typography/Typography";
import FriendModal from "components/FriendModal/FriendModal";

export interface FriendItemProps {
    _id: string;
    fullName: string;
    avatarImg: string;
    className?: string;
    refreshData: () => void;
    onClick: () => void;
    showModal?: boolean;
    status: number;
    userId: string;
}

const FriendItem: FC<FriendItemProps> = (props: FriendItemProps) => {
    const {
        _id,
        fullName,
        avatarImg,
        className,
        onClick,
        refreshData,
        showModal,
        userId,
    } = props;

    const rootCLs = cn(
        styles.FriendItem,
        className,
        "grid",
        // "justify-items-center",
        "md:w-54",
        "mr-6",
        "cursor-pointer"
    );

    console.log(props);

    return (
        <>
            <div
                className={rootCLs}
                data-testid="FriendItGem"
                onClick={onClick}
            >
                <img
                    src={avatarImg}
                    className="rounded-full w-20 h-20 md:h-54"
                    alt={""}
                />
                <RegularSubtitle size="lg" className="w-20 truncate">
                    {fullName}
                </RegularSubtitle>
            </div>
            {showModal && (
                <FriendModal
                    avatarImg={avatarImg}
                    _id={_id}
                    //@ts-ignore
                    userId={userId._id}
                    fullName={fullName}
                    onClose={onClick}
                    refreshData={refreshData}
                />
            )}
        </>
    );
};

export default FriendItem;
