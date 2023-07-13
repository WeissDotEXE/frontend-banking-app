import React, { FC, useEffect, useState } from "react";
import styles from "./Header.module.scss";
import cn from "classnames";
import { Icon } from "components/Icon/Icon";
import { useNavigate, useLocation } from "react-router";
import { UseWindowSize } from "functions/UseWindowSize";
import { IsMobile } from "functions/Platform";
import Card from "components/Card/Card";
import NotificationItem from "components/NotificationItem/NotificationItem";
import * as process from "process";
import axios from "axios";
import { RegularSubtitle } from "../Typography/Typography";
import colors from "tailwindcss/colors";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

interface HeaderProps {}

interface NotificationType {
    _id: string;
    fullName: string;
    avatarImg: string;
    message: string;
    type: number;
    senderId: string;
    friendDocumentId?: string | undefined;
}

const Header: FC<HeaderProps> = () => {
    const [width] = UseWindowSize();
    const [showNotifications, setShowNotifications] = useState(false);
    const [notificationList, setNotificationList] = useState<
        NotificationType[]
    >([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchedUser, setSearchedUser] = useState("");
    const [showSearchInput, setShowSearchInput] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const auth = useAuth();

    const rootCls = cn(
        styles.Header,
        "w-full",
        "flex",
        "justify-between",
        "bg-blue-940",
        "py-3",
        "my-auto",
        "px-20",
        "fixed",
        "z-10",
        "top-0"
    );
    const iconCls = cn(
        styles.icon,
        "w-10",
        "h-10",
        "justify-center",
        "items-center"
    );

    const inputCls = cn(
        styles.input,
        "w-52",
        "ease-in duration-200",
        "focus:w-96",
        "h-11",
        "rounded-lg",
        "bg-slate-600",
        "text-pink-950",
        "pr-14",
        "p-4",
        "focus:outline-none",
        "focus:drop-shadow-xl",
        "caret-pink-950"
    );

    const dropDownCls = cn(
        styles.dropdown,
        "absolute",
        "top-14",
        "w-80",
        "overflow-x-auto",
        "h-96",
        "-right -1/3 md:right-0",
        "lg:px-6",
        "drop-shadow-2xl",
        notificationList.length === 0 && "flex"
    );

    const userId = localStorage.getItem("userId");
    const getNotificationsHandler = async () => {
        setIsLoading(true);
        const response = await axios.get(
            `${process.env.REACT_APP_BASE_URL}/notification/${userId}`
        );
        console.log(response.data.data);
        setNotificationList(response.data.data);
        setIsLoading(false);
    };

    useEffect(() => {
        getNotificationsHandler();
    }, []);

    const searchUserHandler = () => {
        navigate(`/searchUsers/${searchedUser}`);
    };

    return (
        <>
            <div className={rootCls} data-testid="Header">
                <Link to="/">
                    <Icon name="homeIcon" className={iconCls} />
                    <div className="flex mt-1 justify-center">
                        <div
                            className={` h-2 w-2 rounded-full ${
                                location.pathname === "/" && "bg-pink-950"
                            }`}
                        ></div>
                    </div>
                </Link>
                {IsMobile(width) ? (
                    <Icon
                        name="searchIcon"
                        className={iconCls}
                        onClick={() => setShowSearchInput((v) => !v)}
                    />
                ) : (
                    <form className="relative" onSubmit={searchUserHandler}>
                        <input
                            type="text"
                            className={inputCls}
                            placeholder="Search user"
                            onChange={(e) => setSearchedUser(e.target.value)}
                        />
                        <Icon
                            name="searchIcon"
                            className="absolute right-5 top-2"
                        />
                    </form>
                )}
                <div className="flex relative">
                    <Link to="/cards">
                        <Icon name="cardIcon" className={iconCls} />
                        <div className="flex mt-1 justify-center">
                            <div
                                className={` h-2 w-2 rounded-full ${
                                    location.pathname === "/cards" &&
                                    "bg-pink-950"
                                }`}
                            ></div>
                        </div>
                    </Link>
                    <div>
                        <div
                            onClick={() =>
                                setShowNotifications(!showNotifications)
                            }
                        >
                            <Icon
                                name="notificationIcon"
                                className={`${iconCls} ml-10 cursor-pointer`}
                            />
                            {!showNotifications &&
                                notificationList.length !== 0 && (
                                    <div className="w-5  text-white-950 cursor-pointer  bg-red-950 rounded-full absolute bottom-5 right-0">
                                        <p className="font-normal flex justify-center">
                                            {notificationList.length}
                                        </p>
                                    </div>
                                )}
                        </div>
                        {/* use map() for rendering future notifications */}

                        {showNotifications && (
                            <Card className={dropDownCls}>
                                {isLoading ? (
                                    <div
                                        className={
                                            "h-full w-full flex justify-center items-center align-middle"
                                        }
                                    >
                                        <Icon
                                            className={"animate-spin"}
                                            name={"loadingIcon"}
                                        />
                                    </div>
                                ) : notificationList &&
                                  notificationList.length !== 0 ? (
                                    notificationList.map((item, index) => {
                                        return (
                                            <NotificationItem
                                                key={index}
                                                id={item._id}
                                                avatarLink={item.avatarImg}
                                                message={item.message}
                                                name={item.fullName}
                                                type={item.type}
                                                refreshData={
                                                    getNotificationsHandler
                                                }
                                                senderId={item.senderId}
                                                friendDocumentId={
                                                    item?.friendDocumentId
                                                }
                                            />
                                        );
                                    })
                                ) : (
                                    <div
                                        className={
                                            "flex flex-col justify-center items-center text-center ml-8 w-full"
                                        }
                                    >
                                        <RegularSubtitle>
                                            No Notification
                                        </RegularSubtitle>
                                        <Icon
                                            name="refreshIcon"
                                            className={"hover:cursor-pointer"}
                                            color={"black"}
                                            onClick={getNotificationsHandler}
                                        />
                                    </div>
                                )}
                            </Card>
                        )}
                    </div>
                    <Icon
                        name={"logoutIcon"}
                        onClick={auth.logoutUser}
                        className={"cursor-pointer ml-6"}
                        height={42}
                        width={42}
                        color={colors.white}
                    />
                </div>
            </div>
            {IsMobile(width) && showSearchInput && (
                <form
                    className="flex flex-col justify-between items-center bg-white-950 -mt-2 py-4 rounded-b-lg"
                    onSubmit={searchUserHandler}
                >
                    <input
                        type="text"
                        className={inputCls}
                        placeholder="Search user"
                        onChange={(e) => setSearchedUser(e.target.value)}
                    />
                    <Button type={"submit"} className={"mt-3"}>
                        Search
                    </Button>
                </form>
            )}
        </>
    );
};

export default Header;
