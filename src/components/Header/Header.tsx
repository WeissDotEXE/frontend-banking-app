import React, { FC } from "react";
import styles from "./Header.module.scss";
import cn from "classnames";
import homeIcon from "assets/icons/homeIcon.svg";
import cardIcon from "assets/icons/cardIcon.svg";
import notificationIcon from "assets/icons/notificationIcon.svg";
import searchIcon from "assets/icons/searchIcon.svg";
import { Link } from "react-router-dom";
import { UseWindowSize } from "functions/UseWindowSize";
import { IsDesktop, IsMobile } from "functions/Platform";
import Card from "components/Card/Card";
import NotificationItem from "components/NotificationItem/NotificationItem";
interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
    const [width] = UseWindowSize();
    const rootCls = cn(
        styles.Header,
        "w-full",
        "flex",
        "justify-between",
        "bg-blue-940",
        "py-3",
        "my-auto",
        "px-20"
    );
    const iconCls = cn(styles.icon, "w-10", "h-10");

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

    return (
        <div className={rootCls} data-testid="Header">
            <Link to="/">
                <img src={homeIcon} className={iconCls} />
            </Link>
            {IsMobile(width) ? (
                <img src={searchIcon} className={iconCls} />
            ) : (
                <div className="relative">
                    <input
                        type="text"
                        className={inputCls}
                        placeholder="Search user"
                    />
                    <img src={searchIcon} className="absolute right-5 top-2" />
                </div>
            )}
            <div className="flex">
                <Link to="/cards">
                    <img src={cardIcon} className={iconCls} />
                </Link>
                <div className={styles.dropdown}>
                    <img
                        src={notificationIcon}
                        className={`${iconCls} ml-10`}
                    />
                    <div className="w-5 animate-bounce bg-red-950 rounded-full absolute bottom-5 right-0">
                        <p className="font-bold flex justify-center">
                            {notificationList.length}
                        </p>
                    </div>
                    {/* use map() for rendering future notifications */}

                    <Card className={styles.dropdownContent}>
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
                </div>
            </div>
        </div>
    );
};

export default Header;
