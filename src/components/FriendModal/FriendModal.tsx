import React, { FC } from "react";
import styles from "./FriendModal.module.scss";
import cn from "classnames";
import { RegularSubtitle } from "components/Typography/Typography";
import Modal from "components/Modal/Modal";
import Button from "components/Button/Button";
import ProfileCard from "components/ProfileCard/ProfileCard";
import deleteIcon from "assets/icons/deleteIcon.svg";

interface FriendModalProps {
    name: string;
    avatar_link: string;
    id: string;
    onClose: () => void;
    className?: string;
}

const FriendModal: FC<FriendModalProps> = (props: FriendModalProps) => {
    const { name, avatar_link, id, onClose, className } = props;

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
        <Modal onClose={onClose} className="relative">
            <ProfileCard type="friend" className="drop-shadow-none" />
        </Modal>
    );
};

export default FriendModal;
