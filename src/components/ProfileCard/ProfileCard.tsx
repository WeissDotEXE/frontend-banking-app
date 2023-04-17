//TO DO
//1. fetch data about user using userID in localhost?

//this card will fetch data about whatever user is in database
import React, { FC } from "react";
import styles from "./ProfileCard.module.scss";
import cn from "classnames";
import Card from "components/Card/Card";
import { RegularSubtitle } from "components/Typography/Typography";
import Button from "components/Button/Button";

interface ProfileCardProps {
    className?: string;
    type: "profile" | "friend" | "personal";
    isFriend?: boolean;
    sendMoneyHandler?: () => void;
}

const ProfileCard: FC<ProfileCardProps> = (props: ProfileCardProps) => {
    const { className, type, isFriend, sendMoneyHandler } = props;
    const rootCls = cn(styles.profileCard, className);
    const avatarCls = cn(
        styles.avatar,
        "rounded-full",
        "absolute",
        "w-44",
        "h-44",
        "drop-shadow-xl"
    );
    const informationsCls = cn(
        styles.informations,
        "grid",
        "grid-cols-2",
        "justify-items-start",
        "mt-10"
    );

    return (
        <Card className={rootCls}>
            <img
                alt=""
                className={avatarCls}
                src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000"
            />
            <div className="mt-20 ">
                <RegularSubtitle className="text-3xl font-bold">
                    John John
                </RegularSubtitle>
                {type === "profile" && (
                    <div className="flex justify-center mt-14">
                        <Button
                            bgColor={"pink-950"}
                            txtColor={"white-950"}
                            type="button"
                            onClick={sendMoneyHandler}
                        >
                            Send Money
                        </Button>
                        <Button
                            bgColor={"pink-950"}
                            txtColor={"white-950"}
                            disable={isFriend}
                            type="button"
                        >
                            Add Friend
                        </Button>
                    </div>
                )}
                {type === "personal" && (
                    <div className="flex justify-center mt-14">
                        <Button
                            type="button"
                            bgColor={"pink-950"}
                            txtColor={"white-950"}
                        >
                            Edit Profile
                        </Button>
                    </div>
                )}
                {type === "friend" && (
                    <div className="flex justify-center mt-14">
                        <Button
                            bgColor={"pink-950"}
                            txtColor={"white-950"}
                            type="button"
                        >
                            Remove friend
                        </Button>
                    </div>
                )}

                {type === "friend" ||
                    ("personl" && (
                        <div className={informationsCls}>
                            <RegularSubtitle className="text-base lg:text-2xl font-bold">
                                Email
                            </RegularSubtitle>
                            <RegularSubtitle className="text-gray-950 my-auto text-base lg:text-lg">
                                t@gmail.com
                            </RegularSubtitle>
                            <RegularSubtitle className="text-base lg:text-2xl font-bold">
                                IBAN
                            </RegularSubtitle>
                            <RegularSubtitle className="text-gray-950 my-auto text-base lg:text-lg truncate w-2/3">
                                RO4757842BRDE754u2148
                            </RegularSubtitle>
                            <RegularSubtitle className="text-base lg:text-2xl font-bold">
                                Join Date
                            </RegularSubtitle>
                            <RegularSubtitle className="text-gray-950 my-auto text-base lg:text-lg mb-20">
                                26-aug-2021
                            </RegularSubtitle>
                        </div>
                    ))}
            </div>
        </Card>
    );
};

export default ProfileCard;
