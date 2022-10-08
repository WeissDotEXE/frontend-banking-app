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
interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
    const [width] = UseWindowSize();
    const rootCls = cn(
        styles.Header,
        "w-full",
        "h-20",
        "flex",
        "justify-between",
        "bg-blue-940",
        "py-4",
        "my-auto",
        "px-20"
    );
    const iconCls = cn(styles.icon, "w-10", "h-10");

    const inputCls = cn(
        styles.input,
        "w-52",
        "ease-in duration-200",
        "focus:w-96",
        "h-12",
        "rounded-lg",
        "bg-slate-600",
        "text-pink-950",
        "pr-14",
        "p-4",
        "focus:outline-none",
        "focus:drop-shadow-xl",
        "caret-pink-950"
    );

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
                        <p className="font-bold flex justify-center">4</p>
                    </div>
                    {/* use map() for rendering future notifications */}
                    <Card className={styles.dropdownContent}>Hello</Card>
                </div>
            </div>
        </div>
    );
};

export default Header;
