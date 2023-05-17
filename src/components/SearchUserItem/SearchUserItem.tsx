import React, { FC } from "react";
import { userDataInterface } from "../../pages/Home/Home";
import cn from "classnames";
import { RegularSubtitle } from "../Typography/Typography";
import Button from "../Button/Button";
import getLastUserCode from "../../functions/getLastUserCode";

interface userDataWithFriends extends userDataInterface {
    friendship: {
        _id: string,
        recipientId?: string,
        requesterId?: string,
        status: number
    };
}

const SearchUserItem: FC<userDataWithFriends> = (props: userDataWithFriends) => {

        const { _id, fullName, email, avatarImg, joinDate } = props;

        const rootCls = cn(
            "flex",
            "bg-white-950",
            "rounded-full",
            "items-center",
            "drop-shadow-xl",
            "my-4",
            "justify-between",
            "hover:cursor-pointer",
            "hover:bg-gray-300",
            "ease-in duration-200"
        );

        const avatarImgCls = cn(
            "rounded-full",
            "w-24",
            ""
        );

        const userCodeCls = cn(
            "text-gray-400",
            "ml-4",
            "text-xl"
        );
        const buttonsCls = cn(
            "flex",
            "justify-between",
            "mr-6"
        );

        return (
            <div className={rootCls} data-testid="SearchUserItem">

                <div className={"flex items-center"}>
                    <img src={avatarImg} className={avatarImgCls} alt={""} />
                    <RegularSubtitle className={"ml-6"}>{fullName}</RegularSubtitle>
                    <RegularSubtitle className={userCodeCls}>
                        #{getLastUserCode(_id)}
                    </RegularSubtitle>
                </div>
                <div className={buttonsCls}>
                    <Button type={"button"}>Add Friend</Button>
                    <Button type={"button"}>Send Money</Button>
                </div>
            </div>
        );
    }
;

export default SearchUserItem;
