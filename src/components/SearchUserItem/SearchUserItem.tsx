import React, { FC } from "react";
import { userDataInterface } from "../../pages/Home/Home";
import cn from "classnames";
import { RegularSubtitle } from "../Typography/Typography";
import Button from "../Button/Button";
import getLastUserCode from "../../functions/getLastUserCode";
import axios from "axios";
import { Link } from "react-router-dom";

interface userDataWithFriends extends userDataInterface {
    friendship: {
        _id: string;
        recipientId?: string;
        requesterId?: string;
        status: number;
    };
}

const SearchUserItem: FC<userDataWithFriends> = (
    props: userDataWithFriends
) => {
    const { _id, fullName, avatarImg } = props;
    const userId = localStorage.getItem("userId");

    const rootCls = cn(
        "flex md:flex-row flex-col",
        "bg-white-950",
        "rounded-lg",
        "items-center",
        "drop-shadow-xl",
        "my-4",
        "justify-center md:justify-between",
        "hover:cursor-pointer",
        "hover:bg-gray-300",
        "ease-in duration-200"
    );

    const avatarImgCls = cn("w-24", "h-24");

    const userCodeCls = cn("text-gray-400", "ml-4", "text-xl");
    const buttonsCls = cn(
        "flex flex-col md:flex-row",
        "justify-between",
        "md:mr-6"
    );

    const sendFriendRequestUrl = `${process.env.REACT_APP_BASE_URL}/friends/sendFriendRequest`;
    const addFriendHandler = async () => {
        try {
            const response = await axios.patch(
                `${sendFriendRequestUrl}/${userId}`,
                { friendId: _id }
            );
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className={rootCls} data-testid="SearchUserItem">
            <div
                className={
                    "flex md:flex-row flex-col justify-center items-center"
                }
            >
                <img src={avatarImg} className={avatarImgCls} alt={""} />
                <RegularSubtitle className={"ml-0 md:ml-6"}>
                    {fullName}
                </RegularSubtitle>
                <RegularSubtitle className={userCodeCls}>
                    #{getLastUserCode(_id)}
                </RegularSubtitle>
            </div>
            <div className={buttonsCls}>
                <Button type={"button"} onClick={addFriendHandler}>
                    Add Friend
                </Button>
                <Link to={`/sendMoney/${userId}/${_id}`}>
                    <Button type={"button"} className={"my-3 md:my-0"}>
                        Send Money
                    </Button>
                </Link>
            </div>
        </div>
    );
};
export default SearchUserItem;
