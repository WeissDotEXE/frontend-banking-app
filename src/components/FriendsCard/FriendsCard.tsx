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

    return (
        <Card className={rootCls} data-testid="FriendsCard">
            <RegularSubtitle bold color={"gray-950"} className="mb-10">
                Friends
            </RegularSubtitle>{" "}
            <div className="flex overflow-auto">
                <FriendItem
                    id="id"
                    name="John John"
                    avatar_link="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000"
                    className="mr-10"
                />
                <FriendItem
                    id="id"
                    name="Johnas Michael Michael Michael"
                    avatar_link="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000"
                    className="mr-10"
                />
                <FriendItem
                    id="id"
                    name="John JohnJohn John"
                    avatar_link="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000"
                    className="mr-10"
                />
                <FriendItem
                    id="id"
                    name="John John"
                    avatar_link="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000"
                    className="mr-10"
                />
                <FriendItem
                    id="id"
                    name="John John"
                    avatar_link="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000"
                    className="mr-10"
                />
                <FriendItem
                    id="id"
                    name="John John"
                    avatar_link="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000"
                    className="mr-10"
                />
                <FriendItem
                    id="id"
                    name="John John"
                    avatar_link="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000"
                    className="mr-10"
                />
            </div>
        </Card>
    );
};

export default FriendsCard;
