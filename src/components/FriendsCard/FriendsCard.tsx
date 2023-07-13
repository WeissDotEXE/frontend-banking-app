import React, { FC, useEffect, useState } from "react";
import styles from "./FriendsCard.module.scss";
import cn from "classnames";
import FriendItem from "components/FriendItem/FriendItem";
import Card from "components/Card/Card";
import { RegularSubtitle } from "components/Typography/Typography";
import { useDispatch, useSelector } from "react-redux";
import { fetchFriends } from "redux/friendReducer";
import { Icon } from "../Icon/Icon";
import friendIdDeceider from "../../functions/friendIdDeceider";
import friendItem from "components/FriendItem/FriendItem";

interface FriendsCardProps {
    className?: string;
}

export interface friendItem {
    _id: string;
    recipientId: {
        _id: string;
        avatarImg: string;
        email: string;
        fullName: string;
    };
    receiverId: {
        _id: string;
        avatarImg: string;
        email: string;
        fullName: string;
    };
    status: number;
}

const FriendsCard: FC<FriendsCardProps> = (props: FriendsCardProps) => {
    const { className } = props;

    const rootCls = cn(styles.FriendsCard, className);

    const dispatch = useDispatch();
    const friends = useSelector((state: any) => state.friendReducer.friends);
    const loading = useSelector((state: any) => state.friendReducer.loading);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        // @ts-ignore
        dispatch(fetchFriends());
        console.log(friends);
    }, [dispatch]);

    const showDetailsHandler = () => {
        setShowModal((v) => !v);
    };

    return (
        <Card className={rootCls} data-testid="FriendsCard">
            <RegularSubtitle bold color={"black"} className="mb-10">
                Friends
            </RegularSubtitle>

            {loading ? (
                <div
                    className={
                        "h-full flex justify-center items-center align-middle"
                    }
                >
                    <Icon className={"animate-spin"} name={"loadingIcon"} />
                </div>
            ) : friends && friends!.length > 0 ? (
                <div className="grid grid-cols-3 h-32 overflow-x-auto md:flex md:overflow-y-auto">
                    {friends!.map((item: friendItem, index: number) => {
                        // @ts-ignore
                        return (
                            <FriendItem
                                //@ts-ignore
                                _id={item._id}
                                //@ts-ignore
                                userId={item[friendIdDeceider(item)]}
                                key={index}
                                //@ts-ignore
                                fullName={item[friendIdDeceider(item)].fullName}
                                avatarImg={
                                    //@ts-ignore
                                    item[friendIdDeceider(item)].avatarImg
                                }
                                //@ts-ignore
                                refreshData={() => dispatch(fetchFriends())}
                                status={item.status}
                                onClick={showDetailsHandler}
                                showModal={showModal}
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
