//TO-DO
//1. fetch friend list based on user id
//2. store friends into a state list called friendList

import React, { FC, useEffect, useState } from "react";
import styles from "./FriendsCard.module.scss";
import cn from "classnames";
import FriendItem from "components/FriendItem/FriendItem";
import Card from "components/Card/Card";
import { RegularSubtitle } from "components/Typography/Typography";
import axios from "axios";
interface FriendsCardProps {
    className?: string;
}

interface friendItem {
    _id: string;
    fullName: string;
    avatarImg: string;
}

const FriendsCard: FC<FriendsCardProps> = (props: FriendsCardProps) => {
    const { className } = props;
    const BASE_LOGIN_URL = process.env.REACT_APP_BASE_URL;

    const rootCls = cn(styles.FriendsCard, className);

    const [friendsList, setFriendsList] = useState<friendItem[]>([]);

    const api = `${BASE_LOGIN_URL}/friends/getFriends/${localStorage.getItem(
        "userId"
    )}`;
    const token = localStorage.getItem("jwtToken");

    const getFriendsHandler = async () => {
        const friends = await axios.get(api, {
            headers: { Authorization: `Bearer ${token}` },
        });
        console.log(friends.data.data.friends);

        setFriendsList(friends.data.data.friends);
    };

    useEffect(() => {
        getFriendsHandler();
    }, []);

    return (
        <Card className={rootCls} data-testid="FriendsCard">
            <RegularSubtitle bold color={"black"} className="mb-10">
                Friends
            </RegularSubtitle>
            {friendsList && friendsList!.length > 0 ? (
                <div className="grid grid-cols-3 h-32 overflow-x-auto md:flex md:overflow-y-auto">
                    {friendsList!.map((item, index) => {
                        return (
                            <FriendItem
                                _id={item._id}
                                key={index}
                                fullName={item.fullName}
                                avatarImg={item.avatarImg}
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
