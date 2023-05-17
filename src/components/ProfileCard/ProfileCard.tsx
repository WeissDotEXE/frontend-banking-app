//this card will fetch data about whatever user is in database
import React, { FC } from "react";
import styles from "./ProfileCard.module.scss";
import cn from "classnames";
import Card from "components/Card/Card";
import { RegularSubtitle } from "components/Typography/Typography";
import Button from "components/Button/Button";
import { userDataInterface } from "../../pages/Home/Home";
import getLastUserCode from "../../functions/getLastUserCode";

interface ProfileCardProps {
    className?: string;
    userData: userDataInterface;
}

const ProfileCard: FC<ProfileCardProps> = (props: ProfileCardProps) => {
    const { className, userData } = props;
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

    //todo replace data from home response data

    return (
        <Card className={rootCls}>
            <img
                alt=""
                className={avatarCls}
                src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000"
            />
            <div className="mt-20 ">
                <div className={"flex justify-center"}>
                    <RegularSubtitle className="text-3xl font-bold mr-3">
                        {userData && userData.fullName}
                    </RegularSubtitle>
                    <RegularSubtitle className={"text-gray-500"}>
                        #{getLastUserCode(userData._id)}
                    </RegularSubtitle></div>

                <div className="flex justify-center mt-14">
                    <Button
                        type="button"
                        bgColor={"pink-950"}
                        txtColor={"white-950"}
                    >
                        Edit Profile
                    </Button>
                </div>
                <div className={informationsCls}>
                    <RegularSubtitle className="text-base lg:text-2xl font-bold">
                        Email
                    </RegularSubtitle>
                    <RegularSubtitle className="text-gray-950 my-auto text-base lg:text-lg">
                        {userData && userData.email}
                    </RegularSubtitle>
                    <RegularSubtitle className="text-base lg:text-2xl font-bold">
                        IBAN
                    </RegularSubtitle>
                    {/*todo replace with iban from backend
                        generate iban in backend*/}
                    <RegularSubtitle className="text-gray-950 my-auto text-base lg:text-lg truncate w-2/3">
                        IBAN HARDCODAT TODO
                    </RegularSubtitle>
                    <RegularSubtitle className="text-base lg:text-2xl font-bold">
                        Join Date
                    </RegularSubtitle>
                    <RegularSubtitle className="text-gray-950 my-auto text-base lg:text-lg mb-20">
                        {userData && userData.joinDate.substring(0, 10)}
                    </RegularSubtitle>
                </div>
            </div>
        </Card>
    );
};

export default ProfileCard;
