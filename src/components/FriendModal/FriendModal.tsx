import React, { FC, useState } from "react";
import styles from "./FriendModal.module.scss";
import cn from "classnames";
import Modal from "components/Modal/Modal";
import { RegularSubtitle } from "../Typography/Typography";
import Button from "../Button/Button";
import axios from "axios";
import getLastUserCode from "../../functions/getLastUserCode";
import { Link } from "react-router-dom";

interface FriendModalProps {
    _id: string;
    fullName: string;
    avatarImg: string;
    userId: string;
    onClose: () => void;
    className?: string;
    refreshData: () => void;
}

const FriendModal: FC<FriendModalProps> = (props: FriendModalProps) => {
    const {
        fullName,
        avatarImg,
        userId,
        onClose,
        className,
        refreshData,
        _id,
    } = props;

    const [showRemove, setShowRemove] = useState(false);

    const rootCls = cn(
        styles.root,
        className,
        "relative"
        // "overflow-hidden"
    );
    const avatarCls = cn(
        styles.avatar,
        "absolute",
        "-top-28",
        "left-0",
        "rounded-full",
        "w-44",
        "h-44",
        "object-cover"
    );

    const friendContentCls = cn("mt-20");

    const buttonsCls = cn("flex", "w-full", "justify-around", "my-8");

    const deleteFriendHandler = async () => {
        try {
            const response = await axios.delete(
                `${process.env.REACT_APP_BASE_URL}/friends/deleteFriend/${_id}`
            );
            if (response.status === 204) {
                //todo add notification when user is deleted from friend list
                refreshData();
                onClose();
            } else {
                //todo add notification when user is not deleted from friendList
                console.log(response);
            }
        } catch (error) {
            //todo add notification when user is not deleted from friendList
            console.log(error);
        }
    };

    const openRemoveContent = () => {
        setShowRemove(true);
    };
    const closeRemoveContent = () => {
        setShowRemove(false);
    };

    return (
        <Modal onClose={onClose} className={rootCls}>
            <img src={avatarImg} className={avatarCls} alt={""} />
            {showRemove ? (
                <div className={friendContentCls}>
                    <RegularSubtitle>
                        Are you sure you want to remove{" "}
                        <strong>{fullName}</strong> from your friend list?
                    </RegularSubtitle>
                    <div className={buttonsCls}>
                        <Button type={"button"} onClick={deleteFriendHandler}>
                            Yes
                        </Button>
                        <Button type={"button"} onClick={closeRemoveContent}>
                            No
                        </Button>
                    </div>
                </div>
            ) : (
                <div className={friendContentCls}>
                    <RegularSubtitle>{fullName}</RegularSubtitle>
                    <RegularSubtitle className={"text-gray-500"}>
                        #{getLastUserCode(userId)}
                    </RegularSubtitle>
                    <div className={buttonsCls}>
                        <Link
                            to={`/sendMoney/${localStorage.getItem(
                                "userId"
                            )}/${userId}`}
                        >
                            <Button type={"button"}>Send Money</Button>
                        </Link>
                        <Button type={"button"} onClick={openRemoveContent}>
                            Remove
                        </Button>
                    </div>
                </div>
            )}
        </Modal>
    );
};

export default FriendModal;
