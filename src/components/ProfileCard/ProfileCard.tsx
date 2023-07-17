//this card will fetch data about whatever user is in database
import React, { FC, useState } from "react";
import styles from "./ProfileCard.module.scss";
import cn from "classnames";
import Card from "components/Card/Card";
import { RegularSubtitle } from "components/Typography/Typography";
import Button from "components/Button/Button";
import { userDataInterface } from "../../pages/Home/Home";
import getLastUserCode from "../../functions/getLastUserCode";
import EditProfileModal from "../EditProfileModal/EditProfileModal";

interface ProfileCardProps {
    className?: string;
    userData: userDataInterface;
    refetchData: () => void;
}

export interface ProfileInterface {
    _id: string;
    avatarImg: string;
    email: string;
    fullName: string;
    iban: string;
    joinDate: string;
}

const ProfileCard: FC<ProfileCardProps> = (props: ProfileCardProps) => {
    const { className, userData, refetchData } = props;

    const [showEditProfile, setShowEditProfile] = useState(false);

    const rootCls = cn(styles.profileCard, className);
    const avatarCls = cn(
        styles.avatar,
        "rounded-full",
        "absolute",
        "w-44",
        "h-44",
        "drop-shadow-xl",
        "object-cover"
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
                alt={""}
                className={avatarCls}
                src={userData && userData.avatarImg}
            />

            <div className="mt-20 ">
                <div className={"flex justify-center"}>
                    <RegularSubtitle className="text-3xl font-bold mr-3">
                        {userData && userData.fullName}
                    </RegularSubtitle>
                    {userData && (
                        <RegularSubtitle className={"text-gray-500"}>
                            #{getLastUserCode(userData._id)}
                        </RegularSubtitle>
                    )}
                </div>

                <div className="flex justify-center mt-14">
                    <Button
                        type="button"
                        bgColor={"pink-950"}
                        txtColor={"white-950"}
                        onClick={() => setShowEditProfile(true)}
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
                    <RegularSubtitle
                        position={"text-start"}
                        className="text-gray-950 my-auto text-base lg:text-lg truncate w-2/3"
                    >
                        {userData && userData.iban}
                    </RegularSubtitle>
                    <RegularSubtitle className="text-base lg:text-2xl font-bold">
                        Join Date
                    </RegularSubtitle>
                    <RegularSubtitle className="text-gray-950 my-auto text-base lg:text-lg mb-20">
                        {userData && userData.joinDate.substring(0, 10)}
                    </RegularSubtitle>
                </div>
                {showEditProfile && (
                    <EditProfileModal
                        _id={userData._id}
                        fullName={userData.fullName}
                        iban={userData.iban}
                        email={userData.email}
                        avatarImg={userData.avatarImg}
                        joinDate={userData.joinDate}
                        onClose={() => setShowEditProfile(false)}
                        refetchData={refetchData}
                    />
                )}
            </div>
        </Card>
    );
};

export default ProfileCard;
