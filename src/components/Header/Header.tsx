import React, { FC } from "react";
import styles from "./Header.module.scss";
import cn from "classnames";
import homeIcon from "assets/icons/homeIcon.svg";
import cardIcon from "assets/icons/cardIcon.svg";
import notificationIcon from "assets/icons/cardIcon.svg";

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
    const rootCls = cn(styles.Header);

    return <div className={rootCls} data-testid="Header"></div>;
};

export default Header;
