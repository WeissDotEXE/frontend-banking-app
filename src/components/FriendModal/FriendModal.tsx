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
const FriendModal: FC<FriendModalProps> = (props: FriendModalProps) => {
    const { fullName, avatarImg, _id, onClose, className } = props;

    return (
        //todo replace with a custom div and CHANGE ProfileCard props to match only profile data
        //and not both use cases
        <Modal onClose={onClose}>

        </Modal>
    );
};

export default FriendModal;
