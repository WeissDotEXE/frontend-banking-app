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
    recipientId:{
        _id:string,
        avatarImg:string,
        email:string,
        fullName:string,
    }
    receiverId:{
        _id:string,
        avatarImg:string,
        email:string,
        fullName:string,
    }
}

const FriendsCard: FC<FriendsCardProps> = (props: FriendsCardProps) => {
    const { className } = props;
    const BASE_LOGIN_URL = process.env.REACT_APP_BASE_URL;

    const rootCls = cn(styles.FriendsCard, className);

    const [friendsList, setFriendsList] = useState<friendItem[]>([]);

    const api = `${BASE_LOGIN_URL}/friends/getFriends/${localStorage.getItem(
        "userId"
    )}`;

    const getFriendsHandler = async () => {
        const friends = await axios.get(api)
        console.log(friends.data.data);

        setFriendsList(friends.data.data);
    };

    useEffect(() => {
        getFriendsHandler();
    },[]);


    const friendIdDeceider=(item:friendItem):string=>{
       if(item.recipientId._id===localStorage.getItem("userId")){
           return 'recipientId'

       }
        return 'requesterId'
    }

    return (
        <Card className={rootCls} data-testid="FriendsCard">
            <RegularSubtitle bold color={"black"} className="mb-10">
                Friends
            </RegularSubtitle>
            {friendsList && friendsList!.length > 0 ? (
                <div className="grid grid-cols-3 h-32 overflow-x-auto md:flex md:overflow-y-auto">
                    {friendsList!.map((item, index) => {
                        // @ts-ignore
                        return (
                            <FriendItem
                                _id={item._id}
                                key={index}
                                //@ts-ignore
                                fullName={item[friendIdDeceider(item)].fullName}
                                //@ts-ignore
                                avatarImg={item[friendIdDeceider(item)].avatarImg}
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
