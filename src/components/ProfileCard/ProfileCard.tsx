//this card will fetch data about whatever user is in database
import React, { FC } from "react";
import styles from "./ProfileCard.module.scss";
import cn from "classnames";
import Card from "components/Card/Card";
import axios from "axios";
import { RegularSubtitle } from "components/Typography/Typography";
import Button from "components/Button/Button";

interface ProfileCardProps {
    className?: string;
}

const ProfileCard: FC<ProfileCardProps> = (props: ProfileCardProps) => {
    const { className } = props;
    const rootCls = cn(styles.profileCard, className, "relative");
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
                className={avatarCls}
                src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000"
            />
            <div className="mt-20 ">
                <RegularSubtitle className="text-3xl font-bold">
                    Jesse Jayce
                </RegularSubtitle>
                <div className="flex justify-center mt-14">
                    <Button bgColor={"pink-950"} txtColor={"white-950"}>
                        Edit Profile
                    </Button>
                </div>
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
            </div>
        </Card>
    );
};

export default ProfileCard;
