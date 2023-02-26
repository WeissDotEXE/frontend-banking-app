import React, { FC, useState } from "react";
import styles from "./Header.module.scss";
import cn from "classnames";
import { Icon } from "components/Icon/Icon";
import { Link, useLocation } from "react-router-dom";
import { UseWindowSize } from "functions/UseWindowSize";
import { IsDesktop, IsMobile } from "functions/Platform";
import Card from "components/Card/Card";
import NotificationItem from "components/NotificationItem/NotificationItem";
import colors from "colors.module.scss";

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
    const [width] = UseWindowSize();
    const [showNotifications, setShowNotifications] = useState(false);
    const location = useLocation();
    console.log(location);

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

    const notificationList = [
        {
            id: "1",
            avatarLink:
                "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80",
            message: "just send you 400$",
            name: "John",
        },
        {
            id: "2",
            avatarLink:
                "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80",
            message: "just send you 400$",
            name: "John",
        },
        {
            id: "3",
            avatarLink:
                "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80",
            message: "just send you 400$",
            name: "Johnaa",
        },
        {
            id: "1",
            avatarLink:
                "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80",
            message: "just send you 400$",
            name: "John",
        },
        {
            id: "2",
            avatarLink:
                "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80",
            message: "just send you 400$",
            name: "John",
        },
        {
            id: "3",
            avatarLink:
                "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80",
            message: "just send you 400$",
            name: "Johnaa",
        },
        {
            id: "3",
            avatarLink:
                "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80",
            message: "just send you 400$",
            name: "Johnaa",
        },
        {
            id: "3",
            avatarLink:
                "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80",
            message: "just send you 400$",
            name: "Johnaa",
        },
        {
            id: "3",
            avatarLink:
                "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80",
            message: "just send you 400$",
            name: "Johnaa",
        },
    ];

    const dropDownCls = cn(
        styles.dropdown,
        "absolute",
        "top-14",
        "w-80",
        "overflow-x-auto",
        "h-96",
        "-right -1/3 md:right-0",
        "lg:px-6",
        "drop-shadow-2xl"
    );

    return (
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
                <Icon name="searchIcon" className={iconCls} />
            ) : (
                <div className="relative">
                    <input
                        type="text"
                        className={inputCls}
                        placeholder="Search user"
                    />
                    <Icon
                        name="searchIcon"
                        className="absolute right-5 top-2"
                    />
                </div>
            )}
            <div className="flex relative">
                <Link to="/cards">
                    <Icon name="cardIcon" className={iconCls} />
                    <div className="flex mt-1 justify-center">
                        <div
                            className={` h-2 w-2 rounded-full ${
                                location.pathname === "/cards" && "bg-pink-950"
                            }`}
                        ></div>
                    </div>
                </Link>
                <div>
                    <div
                        onClick={() => setShowNotifications(!showNotifications)}
                    >
                        <Icon
                            name="notificationIcon"
                            className={`${iconCls} ml-10 cursor-pointer`}
                        />
                        {!showNotifications && (
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
                            {notificationList.map((item, index) => {
                                return (
                                    <NotificationItem
                                        key={index}
                                        id={item.id}
                                        avatarLink={item.avatarLink}
                                        message={item.message}
                                        name={item.name}
                                    />
                                );
                            })}
                        </Card>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Header;
