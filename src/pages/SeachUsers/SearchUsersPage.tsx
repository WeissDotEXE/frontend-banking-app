import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { userDataInterface } from "../Home/Home";
import { RegularSubtitle } from "../../components/Typography/Typography";
import cn from "classnames";
import styles from "./SeachUsersPage.module.scss";
import SearchUserItem from "../../components/SearchUserItem/SearchUserItem";
import { Icon } from "../../components/Icon/Icon";
import colors from "tailwindcss/colors";
import { friendItem } from "../../components/FriendsCard/FriendsCard";


interface userDataWithFriends extends userDataInterface {
    friendship: {
        _id: string,
        recipientId?: string,
        requesterId?: string,
        status: number
    };
}

const SearchUsersPage = () => {

    const { fullName } = useParams();
    const baseLink = process.env.REACT_APP_BASE_URL;
    const [users, setUsers] = useState<userDataWithFriends[]>();
    const [isLoading, setIsLoading] = useState(true);

    const rootCls = cn(styles.searchUsersPage, "px-20", "mt-10");
    const userId = localStorage.getItem("userId");
    const getUsers = async () => {
        try {
            const response = await axios.get(`${baseLink}/searchusers?fullName=${fullName}`);
            const arrayWithoutUserId = response.data.data.filter((obj: any) => obj._id !== userId);
            setUsers(arrayWithoutUserId);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
        }
    };

    const friendIdDeceider = (item: friendItem): string => {
        if (item.recipientId._id === localStorage.getItem("userId")) {
            return "recipientId";

        }
        return "requesterId";
    };

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <div>
            {isLoading ?
                <div className={"w-full h-full flex flex-col items-center justify-center"}>
                    <Icon className={"animate-spin"} name={"loadingIcon"} color={colors.white} />
                    <RegularSubtitle color={"white-950"} bold={true}>Loading...</RegularSubtitle>
                </div> :
                <div className={rootCls}>
                    <RegularSubtitle position={"text-start"} color={"white-950"} bold={true}>
                        Search result for {fullName}</RegularSubtitle>
                    <div>
                        {users && users.map((item: userDataWithFriends, index: number) => {
                                return <SearchUserItem key={index} _id={item._id} fullName={item.fullName}
                                                       email={item.email}
                                                       avatarImg={item.avatarImg} joinDate={item.joinDate}
                                                       friendship={item.friendship}
                                                       iban={item.iban}
                                />;
                            }
                        )}
                        {users && users.length===0 &&
                            <RegularSubtitle color={"white-950"}>No results</RegularSubtitle>}
                    </div>
                </div>
            }
        </div>
    );
};

export default SearchUsersPage;