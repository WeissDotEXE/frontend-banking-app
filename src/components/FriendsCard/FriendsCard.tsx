//TO-DO
//1. fetch friend list based on user id
//2. store friends into a state list called friendList

import React, { FC } from "react";
import styles from "./FriendsCard.module.scss";
import cn from "classnames";
import FriendItem from "components/FriendItem/FriendItem";
import Card from "components/Card/Card";
import { RegularSubtitle } from "components/Typography/Typography";
interface FriendsCardProps {
    className?: string;
}

interface friendItem {
    id: string;
    name: string;
    avatar_link: string;
}

const FriendsCard: FC<FriendsCardProps> = (props: FriendsCardProps) => {
    const { className } = props;

    const rootCls = cn(styles.FriendsCard, className);

    const friendList: friendItem[] = [];

    return (
        <Card className={rootCls} data-testid="FriendsCard">
            <RegularSubtitle bold color={"black"} className="mb-10">
                Friends
            </RegularSubtitle>
            {friendList.length > 0 ? (
                <div className="grid grid-cols-3 h-32 overflow-x-auto md:flex md:overflow-y-auto">
                    {friendList.map((item, index) => {
                        return (
                            <FriendItem
                                id={item.id}
                                key={index}
                                name={item.name}
                                avatar_link={item.avatar_link}
                            />
                        );
                    })}
                </div>
            ) : (
                <div className="mb-4">
                    <RegularSubtitle color={"gray-950"}>
                        No friends yet.
                    </RegularSubtitle>
                </div>
            )}
        </Card>
    );
};

export default FriendsCard;
