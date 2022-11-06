import React, { FC } from "react";
import styles from "./FriendsCard.module.scss";
import cn from "classnames";
import FriendItem from "components/FriendItem/FriendItem";
import Card from "components/Card/Card";
import { RegularSubtitle } from "components/Typography/Typography";
interface FriendsCardProps {
    className?: string;
}

const FriendsCard: FC<FriendsCardProps> = (props: FriendsCardProps) => {
    const { className } = props;

    const rootCls = cn(styles.FriendsCard, className);

    const friendList = [
        {
            id: "id1",
            name: "John John",
            avatar_link:
                "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000",
        },
        {
            id: "id2",
            name: "John John",
            avatar_link:
                "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000",
        },
        {
            id: "id3",
            name: "John John",
            avatar_link:
                "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000",
        },
        {
            id: "id4",
            name: "John John",
            avatar_link:
                "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000",
        },
        {
            id: "id5",
            name: "John John",
            avatar_link:
                "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000",
        },
        {
            id: "id6",
            name: "John John",
            avatar_link:
                "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000",
        },
        {
            id: "id7",
            name: "John John",
            avatar_link:
                "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000",
        },
    ];

    return (
        <Card className={rootCls} data-testid="FriendsCard">
            <RegularSubtitle bold color={"gray-950"} className="mb-10">
                Friends
            </RegularSubtitle>
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
        </Card>
    );
};

export default FriendsCard;
