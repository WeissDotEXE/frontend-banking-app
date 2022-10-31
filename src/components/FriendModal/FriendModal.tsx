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
            <img
                className={avatarCls}
                src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000"
            />
            <div className="mt-10 ">
                <div className="flex items-center justify-center">
                    <RegularSubtitle className="text-3xl font-bold">
                        {name}
                    </RegularSubtitle>
                    <img src={deleteIcon} className="w-6 md:w-8 ml-2 my-4" />
                </div>

                <div className="flex justify-around">
                    <Button>Send</Button>
                    <Button>Request</Button>
                </div>
            </div>
        </Modal>
    );
};

export default FriendModal;
