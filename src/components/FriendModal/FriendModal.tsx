import React, { FC } from "react";
import styles from "./FriendModal.module.scss";
import cn from "classnames";
import Modal from "components/Modal/Modal";
import ProfileCard from "components/ProfileCard/ProfileCard";

interface FriendModalProps {
    fullName: string;
    avatarImg: string;
    _id: string;
    onClose: () => void;
    className?: string;
}
//todo resolve modal close by clicking outside of the card/close button
const FriendModal: FC<FriendModalProps> = (props: FriendModalProps) => {
    const { fullName, avatarImg, _id, onClose, className } = props;

    const rootCls = cn(
        styles.profileCard,
        className,
        "lg:fixed",
        "lg:right-20",
        "lg:w-2/5"
    );
    const avatarCls = cn(
        styles.avatar,
        "rounded-full",
        "absolute",
        "w-36 md:w-44",
        "w-36 md:h-44",
        "drop-shadow-xl"
    );

    return (
        //todo replace with a custom div and CHANGE ProfileCard props to match only profile data
        //and not both use cases
        <Modal onClose={onClose} className="relative">
            <ProfileCard type="friend" className="drop-shadow-none" />
        </Modal>
    );
};

export default FriendModal;
