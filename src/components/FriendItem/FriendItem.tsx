import React, { FC, useState } from "react";
import styles from "./FriendItem.module.scss";
import cn from "classnames";
import { RegularSubtitle } from "components/Typography/Typography";
import FriendModal from "components/FriendModal/FriendModal";

interface FriendItemProps {
    _id: string;
    fullName: string;
    avatarImg: string;
    className?: string;
    refreshData:()=>void;
}

const FriendItem: FC<FriendItemProps> = (props: FriendItemProps) => {
    const { _id, fullName, avatarImg, className,refreshData } = props;

    const [showModal, setShowModal] = useState(false);

    const rootCLs = cn(
        styles.FriendItem,
        className,
        "grid",
        // "justify-items-center",
        "md:w-54",
        "mr-6",
        "cursor-pointer"
    );

    const showDetailsHandler = () => {
        setShowModal(true);
    };

    return (
        <>
            <div
                className={rootCLs}
                data-testid="FriendItGem"
                onClick={showDetailsHandler}
            >
                <img src={avatarImg} className="rounded-full w-20 md:h-54" alt={""} />
                <RegularSubtitle size="lg" className="w-20 truncate">
                    {fullName}
                </RegularSubtitle>

            </div>
            {showModal && (
                <FriendModal
                    avatarImg={avatarImg}
                    _id={_id}
                    fullName={fullName}
                    onClose={() => {
                        setShowModal(false);
                    }}
                    refreshData={refreshData}
                />
            )}
        </>
    );
};

export default FriendItem;
